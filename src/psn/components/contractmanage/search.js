import React from 'react';
import {
  Form, Row, Col, Input, DatePicker, Select, Button,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
export default (props) => {
  const {
    form,
    actions,
  } = props;
  const { listTable } = actions;
  const { getFieldDecorator } = form;
  const { RangePicker } = DatePicker;
  const handleSearch = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = 10;
        const pageNumber = 1;
        const select = { ...values, pageSize, pageNumber };
        listTable(select);
      }
    });
  };
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}>{item.title}</Option>);
  };
  /* 查询字段 */
  const queryCols = [{
    itemName: '组织名称', itemKey: 'orgName', itemType: 'String', required: false,
  }, {
    itemName: '员工编号', itemKey: 'number', itemType: 'String', required: false,
  }, {
    itemName: '姓名', itemKey: 'name', itemType: 'String', required: false,
  }, {
    itemName: '签订日期', itemKey: 'signData', itemType: 'Data', required: false,
  }, {
    itemName: '', itemKey: '', itemType: '', required: false,
  }, {
    itemName: '预计到期日', itemKey: 'estimateData', itemType: 'Data', required: false,
  }, {
    itemName: '合同类型', itemKey: 'contractType', itemType: 'Select', required: false, list: [{ id: '0', title: '劳动合同-有固定期限' }, { id: '1', title: '临时服务协议' }, { id: '2', title: '岗位聘用协议' }, { id: '3', title: '保密协议' }],
  }];
  function getFields() {
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 8 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空',
                }],
              })(
                <Input placeholder="请输入" />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Data') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 8 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空',
                }],
              })(
                <RangePicker />,
              )}
            </FormItem>,
          </Col>,

        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 8 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空',
                }],
              })(
                <Select placeholder="请选择">
                  {
                    queryCols[i].list.map(apply)
                  }
                </Select>,
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
        layout="inline"
      >
        <Row getter={24}>{getFields()}</Row>
      </Form>
    </div>
  );
};
