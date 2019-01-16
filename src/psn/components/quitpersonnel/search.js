import React from 'react';
import {
  Form, Row, Col, Input, Checkbox, Button,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';

const FormItem = Form.Item;
export default (state) => {
  const {
    form,
    actions,
  } = state;
  const { getFieldDecorator } = form;
  const { listTable } = actions;
  const handleSearch = () => {
    // e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const recordNum = 10;
        const currentPageNum = 1;
        const select = { ...values, recordNum, currentPageNum };
        listTable(select);
      }
    });
  };
  const refUrl = 'empBasicV1/getPayForEmps?currentPageNum=1&recordNum=4&orgId=';
  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgName: `${extra.triggerNode.props.id}`,
    });
  };
  /* 查询字段 */
  const queryCols = [{
    itemName: '组织名称', itemKey: 'orgName', itemType: 'OrgSelect', required: false,
  }, {
    itemName: '员工编号', itemKey: 'employeeNum', itemType: 'String', required: false,
  }, {
    itemName: '姓名', itemKey: 'employeeName', itemType: 'String', required: false,
  }];
  function getFields() {
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空',
                }],
              })(
                <Input placeholder="请输入" style={{ width: 220 }} />,
              )
              }
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <SyncTreeSelect
                  treeId={37838}
                  treeSelectChange={treeSelectChange}
                  refUrl={refUrl}
                  placeholder="请选择"
                  allowClear
                />,
              )}
              {getFieldDecorator('levelType')(
                <Checkbox defaultChecked> 是否包含下层组织</Checkbox>,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={6} style={{ textAlign: 'center', marginTop: 5 }}>
        <Button htmlType="submit">查询</Button>
      </Col>,
    );
    return children;
  }
  return (
    <div>
      <Form
        className="ant-advanced-search-form"
        style={{ padding: 10 }}
        onSubmit={handleSearch}
      >
        <Row gutter={24}>{getFields()}</Row>
      </Form>
    </div>
  );
};
