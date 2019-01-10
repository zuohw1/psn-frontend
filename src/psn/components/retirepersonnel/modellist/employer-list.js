import React from 'react';
import {
  Table, Checkbox, Form, Input, Button, Icon, Pagination,
} from 'antd';

const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

const data = [{
  key: '1',
  employer: '中国联合网络通信集团有限公司',
  org: 101,
}, {
  key: '2',
  employer: '白城市分公司',
  org: 23831,
}, {
  key: '3',
  employer: '白山市分公司',
  org: 23861,
}, {
  key: '4',
  employer: '包头市分公司',
  org: 23954,
}, {
  key: '5',
  employer: '安徽省分公司',
  org: 23549,
}, {
  key: '6',
  employer: '安阳市分公司',
  org: 23627,
}, {
  key: '7',
  employer: '巴彦淖尔市分公司',
  org: 23679,
}, {
  key: '8',
  employer: '阿拉善盟分公司',
  org: 23172,
}];
const plainOptions = [
  { label: '组织机构ID', value: '组织机构ID' },
];
const defcolumns = [{
  title: '组织机构ID',
  dataIndex: 'org',
  key: 'org',
  width: '50%',
  sorter: (a, b) => a.org - b.org,
}];
class EmployerList extends React.Component {
  state = {
    columns: [
      {
        title: '组织机构ID',
        dataIndex: 'org',
        key: 'org',
        width: '50%',
        sorter: (a, b) => a.org - b.org,
      }, {
        title: '雇主',
        dataIndex: 'employer',
        key: 'employer',
        width: '50%',
        filterDropdown: (
        ) => {
          return (
            <div>
              <CheckboxGroup options={plainOptions} defaultValue={['组织机构ID']} onChange={this.onChange} />
            </div>
          );
        },
        sorter: (a, b) => {
          const stringA = a.employer.toUpperCase();
          const stringB = b.employer.toUpperCase();
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
      title: '雇主',
      dataIndex: 'employer',
      key: 'employer',
      width: '50%',
      filterDropdown: () => (
        <div>
          <CheckboxGroup options={plainOptions} defaultValue={['组织机构ID']} onChange={this.onChange} />
        </div>
      ),
      sorter: (a, b) => {
        const stringA = a.employer.toUpperCase();
        const stringB = b.employer.toUpperCase();
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

const WrappedEmployerListForm = Form.create()(EmployerList);
export default WrappedEmployerListForm;
