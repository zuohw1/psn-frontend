import React from 'react';
import {
  Table, Checkbox, Form, Input, Button, Icon, Pagination,
} from 'antd';

const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

const data = [{
  key: '1',
  taxarea: '安徽省安庆市',
  code: 'AH-AQ',
}, {
  key: '2',
  taxarea: '安徽省蚌埠市',
  code: 'AH-BB',
}, {
  key: '3',
  taxarea: '安徽省巢湖市',
  code: 'AH-CH',
}, {
  key: '4',
  taxarea: '安徽省池州市',
  code: 'AH-CHZ',
}, {
  key: '5',
  taxarea: '安徽省滁州市',
  code: 'AH-CZ',
}, {
  key: '6',
  taxarea: '安徽省阜阳市',
  code: 'AH-FY',
}, {
  key: '7',
  taxarea: '安徽省合肥市',
  code: 'AH-HF',
}, {
  key: '8',
  taxarea: '安徽省淮北市',
  code: 'AH-HB',
}];
const plainOptions = [
  { label: '代码', value: '代码' },
];
const defcolumns = [{
  title: '代码',
  dataIndex: 'code',
  key: 'code',
  width: '50%',
  sorter: (a, b) => {
    const stringA = a.code.toUpperCase();
    const stringB = b.code.toUpperCase();
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  },
}];
class AreaList extends React.Component {
  state = {
    columns: [{
      title: '代码',
      dataIndex: 'code',
      key: 'code',
      width: '50%',
      sorter: (a, b) => {
        const stringA = a.code.toUpperCase();
        const stringB = b.code.toUpperCase();
        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
        return 0;
      },
    }, {
      title: '纳税地区',
      dataIndex: 'taxarea',
      key: 'taxarea',
      width: '50%',
      filterDropdown: (
      ) => {
        return (
          <div>
            <CheckboxGroup options={plainOptions} defaultValue={['代码']} onChange={this.onChange} />
          </div>
        );
      },
      sorter: (a, b) => {
        const stringA = a.taxarea.toUpperCase();
        const stringB = b.taxarea.toUpperCase();
        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
        return 0;
      },
    }],
  };

  onChange = (checkedValues) => {
    const areaData = [{
      title: '纳税地区',
      dataIndex: 'taxarea',
      key: 'taxarea',
      width: '50%',
      filterDropdown: () => (
        <div>
          <CheckboxGroup options={plainOptions} defaultValue={['代码']} onChange={this.onChange} />
        </div>
      ),
      sorter: (a, b) => {
        const stringA = a.taxarea.toUpperCase();
        const stringB = b.taxarea.toUpperCase();
        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
        return 0;
      },
    }];
    defcolumns.forEach((r) => {
      if (checkedValues) {
        checkedValues.forEach((rs) => {
          if (r.title === rs) {
            areaData.unshift(r);
          }
        });
      }
    });
    this.setState({ columns: areaData });
  };

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
    const { columns } = this.state;
    return (
      <div className="select">
        <Form className="query" layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            help=""
            label="名称"
          >
            {
              getFieldDecorator('codeanize',
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
          scroll={{ y: 240 }}
          pagination={false}
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

const WrappedAreaListForm = Form.create()(AreaList);
export default WrappedAreaListForm;
