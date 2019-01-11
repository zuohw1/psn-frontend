/* eslint-disable max-len */
import React from 'react';
import {
  Form, Row, Col, Select, Tree, TreeSelect, Input,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
// const { RangePicker } = DatePicker;
const { TreeNode } = Tree;
export default (state) => {
  const {
    form,
    actions,
    expand,
  } = state;
  const { getFieldDecorator } = form;
  const { listTable } = actions;

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
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  const refUrl = 'org/allData?id=';

  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };
  const renderTreeNodes = () => {
    // return data.map((item) => {
    //   if (item.children) {
    //     return (
    //       <TreeNode icon={<Icon type="star-o" theme="twoTone" />} title={item.title} key={item.key} dataRef={item}>
    //         {renderTreeNodes(item.children)}
    //       </TreeNode>
    //     );
    //   }
    // });
    return (
      // <TreeNode {...item} dataRef={item} />;
      <TreeNode value="parent" title="中国联合网络通信集团有限公司" key="0-1">
        <TreeNode value="parent 1-0" title="中国联通总部管理部门" key="0-1-1">
          <TreeNode value="parent 1-1" title="中国联通总部-综合部（董事会办公室）" key="0-1-1-1">
            <TreeNode value="leaf1" title="中国联通总部-综合部" key="random" />
            <TreeNode value="leaf2" title="中国联通总部-综合部" key="random1" />
          </TreeNode>
        </TreeNode>
        <TreeNode value="parent 1-1" title="省份公司" key="random2">
          <TreeNode value="sss" title="北京市子公司" key="random3" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="其他子公司" key="random4">
          <TreeNode value="sss" title="上市子公司" key="random5" />
        </TreeNode>
      </TreeNode>
    );
  };

  /* 查询字段 */
  const queryCols = [{
    itemName: '组织', itemKey: 'test_def1', itemType: 'OrgSelect', required: false,
  },
  {
    itemName: '通知类型', itemKey: 'test_def3', itemType: 'Select', required: false, list: [{ id: '0', title: '部门综合处' }, { id: '1', title: '信息化接口人' }, { id: '2', title: '人力核心' }, { id: '3', title: '主数据' }, { id: '2', title: '云门户' }, { id: '2', title: '各个系统' }],
  },
  {
    itemName: '审批范围', itemKey: 'ATTRIBUTE8', itemType: 'Date', required: false,
  },
  ];
  function getFields() {
    const count = expand ? queryCols.length : 3;
    const children = [];

    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <TreeSelect
                  treeId={37838}
                  treeSelectChange={treeSelectChange}
                  refUrl={refUrl}
                  placeholder="请选择"
                  allowClear
                  treeDefaultExpandAll
                >
                  {renderTreeNodes(state.orgTree)}
                </TreeSelect>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Date') {
        children.push(
          <Col span={7} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <Input />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
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
    return children;
  }

  return (
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
      style={{ padding: 10 }}
      layout="inline"
    >
      <Row gutter={24}>{getFields()}</Row>
    </Form>

  );
};
