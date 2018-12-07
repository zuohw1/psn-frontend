import React, { Component } from 'react';

import {
  Form, Input, Button, Icon,
} from 'antd';

const FormItem = Form.Item;

class Query extends Component {
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
      <Form className="queryform" layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          help=""
          label="组织"
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
        <FormItem
          {...formItemLayout}
          help=""
          label="员工编号"
        >
          {getFieldDecorator('userid', {
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
    );
  }
}
const QueryForm = Form.create()(Query);
export default QueryForm;
