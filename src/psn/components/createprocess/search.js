import React from 'react';
import {
  Form, Row, Col, Input, TreeSelect, Tree, Button,
} from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;

export default (props) => {
  const {
    form,
    expand,
    actions,
  } = props;
  const { getFieldDecorator } = form;
  const { listTable } = actions;
  const { TreeNode } = Tree;
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
  const handleReset = () => {
    console.log('resetFields', Input.value);
    form.resetFields();
  };
  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };
  const refUrl = 'org/allData?id=';
  const renderTreeNodes = () => {
    return (
      <TreeNode value="parent" title="中国联合网络有限公司" key="0-1">
        <TreeNode value="parent 1-0" title="中国联通总部管理部门" key="0-1-1">
          <TreeNode value="parent 1-1-1" title="中国联通总部-综合部（董事会办公室）" key="0-1-1-1">
            <TreeNode value="leaf1" title="中国联通总部-综合部" key="random" />
            <TreeNode value="leaf2" title="中国联通总部-综合部" key="random1" />
          </TreeNode>
        </TreeNode>
        <TreeNode value="parent 1-1" title="中国联通总部-办公厅" key="random2">
          <TreeNode value="sss" title="中国联通总部-办公厅" key="random3" />
        </TreeNode>
      </TreeNode>
    );
  };
  /* 查询字段 */
  const queryCols = [{
    itemName: '组织名称', itemKey: 'orgname', itemType: 'OrgSelect', required: false,
  }, {
    itemName: '员工编号', itemKey: 'Employee', itemType: 'EmString', required: false,
  }, {
    itemName: '姓名', itemKey: 'name', itemType: 'String', required: false,
  }, {
    itemName: '身份证号', itemKey: 'idNumber', itemType: 'String', required: false,
  }];
  function getFields() {
    const count = expand ? queryCols.length : 4;
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空',
                }],
              })(
                <Input placeholder="请输入" />,
              )
              }
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <TreeSelect
                  treeId={37838}
                  refUrl={refUrl}
                  treeSelectChange={treeSelectChange}
                  placeholder="请选择"
                  allowClear
                  treeDefaultExpandAll
                >
                  {renderTreeNodes()}
                </TreeSelect>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'EmString') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空',
                }],
              })(
                <InputGroup compact>
                  <Input placeholder="请输入" />
                  <span style={{ fontSize: 12 }}>可输入多个员工编号用逗号分隔</span>
                </InputGroup>,
              )
              }
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={24} key={count + 5} style={{ textAlign: 'right', marginTop: 5 }}>
        <Button htmlType="submit" style={{ marginRight: 10 }}>查询</Button>
        <Button onClick={handleReset}>重置</Button>
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
        <Row gutter={24}>{getFields()}</Row>
        <Row gutter={24} />
      </Form>
    </div>
  );
};
