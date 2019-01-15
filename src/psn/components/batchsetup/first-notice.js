import React from 'react';
import {
  Button, Form, Icon, Input, Table, Pagination, TreeSelect,
} from 'antd';

const FormItem = Form.Item;

class Notice extends React.Component {
  colums=[
    {
      title: '员工编码',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
    },
    {
      title: '员工姓名',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: '所属组织',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
  ];

  dataSource=[
  ];

  render() {
    const { form, state } = this.props;
    const { getFieldDecorator, searchNewTree } = form;
    const onChange = (value) => {
      console.log(value);
    };
    const handleReset = () => {
      form.resetFields();
    };
    const onSearchNewTree = () => {
      console.log(state.real);
      searchNewTree(state.treeData[0].id, state.real);
    };
    const treeData = [{
      title: '中国联合网络通信集团有限公司',
      value: '0-0',
      key: '0-0',
      children: [{
        title: '中国联通总部管理部门',
        value: '0-0-1',
        key: '0-0-1',
        children: [{
          title: '中国联通总部-综合部（董事会办公室）',
          value: '0-0-0-1',
          key: '0-0-0-1',
        }],
      }],
    },
    {
      title: '省份公司',
      value: '0-0-2',
      key: '0-0-2',
    },
    {
      title: '其他子公司',
      value: '0-1',
      key: '0-1',
    }];

    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    return (
      <div className="selectstaff">
        <Form className="queryform" layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            help=""
            label="组织"
          >
            <TreeSelect
              placeholder="请选择"
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={treeData}
              // treeDefaultExpandAll
              onChange={onChange}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            help=""
            label="员工编号"
          >
            {
              getFieldDecorator('organize',
                {
                  rules: [{ writable: true }],
                })(
                  <Input />,
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            help=""
            label="员工姓名"
          >
            {getFieldDecorator('username', {
              rules: [{ writable: true }],
            })(
              <Input />,
            )}
          </FormItem>
          <Button htmlType="submit">
            <Icon type="search" onClick={onSearchNewTree} />
            查询
          </Button>
          <Button htmlType="submit" onClick={handleReset}>
            清除
          </Button>
        </Form>
        <Table bordered columns={this.colums} dataSource={this.dataSource} />
        <Pagination
          showQuickJumper
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
const WrappedFirst = Form.create()(Notice);
export default WrappedFirst;
