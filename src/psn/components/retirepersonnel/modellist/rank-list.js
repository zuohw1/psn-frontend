import React from 'react';
import {
  Button, Form, Icon, Input, Table, Pagination,
} from 'antd';

const FormItem = Form.Item;

class StaffQuery extends React.Component {
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
    const columns = [{
      title: '职级薪档',
      dataIndex: 'name',
      filters: [{
        text: '正序',
        value: 'Joe',
      }, {
        text: '逆序',
        value: 'Jim',
      }, {
        text: '列',
        value: 'Submenu',
        children: [{
          text: '职级薪档',
          value: 'Green',
        }],
      }],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => {
        const stringA = a.name.toUpperCase(); // ignore upper and lowercase
        const stringB = b.name.toUpperCase(); // ignore upper and lowercase
        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
        return 0;
      },
    }];

    const data = [{
      key: '1',
      name: '01.A',
    }, {
      key: '2',
      name: '02.A',
    }, {
      key: '3',
      name: '03.A',
    }, {
      key: '4',
      name: '04.A',
    }, {
      key: '5',
      name: '05.A',
    }, {
      key: '6',
      name: '06.A',
    }, {
      key: '7',
      name: '07.A',
    }, {
      key: '8',
      name: '08.A',
    }];
    function onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter);
    }
    return (
      <div className="select">
        <Form className="query" layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            help=""
            label="名称"
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
          <Button htmlType="submit">
            <Icon type="search" />
            查询
          </Button>
        </Form>
        <Table
          bordered
          columns={columns}
          dataSource={data}
          onChange={onChange}
          scroll={{ y: 240 }}
        />
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
