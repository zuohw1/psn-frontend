import React from 'react';
import {
  Form, Row, Col, Input, TreeSelect, Tree, Button, Checkbox, Card,
} from 'antd';

const FormItem = Form.Item;
export default (state) => {
  const {
    form,
    expand,
    actions,
  } = state;
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
  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };
  const renderTreeNodes = () => {
    return (
      <TreeNode value="parent" title="中国联合网络通信集团有限公司" key="0-1">
        <TreeNode value="parent 1-0" title="中国联通总部管理部门" key="0-1-1">
          <TreeNode value="parent 1-1" title="中国联通总部-综合部（董事会办公室）" key="0-1-1-1">
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
    itemName: '员工编号', itemKey: 'Employee', itemType: 'String', required: false,
  }, {
    itemName: '姓名', itemKey: 'name', itemType: 'String', required: false,
  }, {
    itemName: '所属模块', itemKey: 'model', itemType: 'DiSelect', required: false,
  }];
  function getFields() {
    const count = expand ? queryCols.length : 3;
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
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
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <div>
                  <TreeSelect
                    treeId={37838}
                    treeSelectChange={treeSelectChange}
                    placeholder="请选择"
                    allowClear
                    treeDefaultExpandAll
                  >
                    {renderTreeNodes(state.orgTree)}
                  </TreeSelect>,
                  <Checkbox defaultChecked /> 是否包含下层组织
                </div>,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={6} key={count + 5} style={{ textAlign: 'center', marginTop: 5 }}>
        <Button htmlType="submit">查询</Button>
      </Col>,
    );
    return children;
  }
  return (
    <div>
      <Card title="员工查询">
        <Form
          className="ant-advanced-search-form"
          style={{ padding: 10 }}
          onSubmit={handleSearch}
          layout="inline"
        >
          <Row gutter={24}>{getFields()}</Row>
        </Form>
      </Card>
    </div>
  );
};
