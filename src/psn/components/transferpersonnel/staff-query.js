import React from 'react';
import {
  Button, Form, Icon, Input, Table, Pagination,
} from 'antd';

const FormItem = Form.Item;

class StaffQuery extends React.Component {
  colums=[
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
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
const CardForm = Form.create()(StaffQuery);
export default CardForm;
