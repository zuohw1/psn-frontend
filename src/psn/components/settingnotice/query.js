import React from 'react';
import {
  Button, Form, Icon, Input, Table, Pagination, TreeSelect,
} from 'antd';

const FormItem = Form.Item;

class Query extends React.Component {
  colums=[
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
      width: 70,
    },
    {
      title: '员工编号',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: '员工姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '部门名称',
      dataIndex: 'department',
      key: 'department',
      align: 'center',
    },
  ];

  dataSource=[
  ];

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const onChange = (value) => {
      console.log(value);
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
          <span className="trans_modelTop_1">组织：
            <TreeSelect
              style={{
                width: 158,
                align: 'center',
              }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={treeData}
              treeDefaultExpandAll
              onChange={onChange}
            />
          </span>
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
            <Icon type="search" />
            查询
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
const CardForm = Form.create()(Query);
export default CardForm;
