import React from 'react';
import {
  Button, Form, Table, Pagination, TreeSelect, Select,
} from 'antd';

const FormItem = Form.Item;

class First extends React.Component {
  colums=[
    {
      title: '组织名',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: '融合类型',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
  ];

  dataSource=[
  ];

  render() {
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
    const respList = [];
    const respRange = [
      { id: '0', title: '包含组织（不包含子组织）' },
      { id: '1', title: '包含组织（包含子组织）' },
      { id: '2', title: '排除组织（不排除子组织）' },
      { id: '3', title: '排除组织（排除子组织）' }];
    if (respList.length === 0) {
      for (let i = 0; i < respRange.length; i += 1) {
        const respV = {
          id: respRange[i].id,
          title: respRange[i].title,
        };
        respList.push(respV);
      }
    }
    const { Option } = Select;
    const apply = (item) => {
      return (<Option value={item.id} key={item.id}> {item.title} </Option>);
    };
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
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
            label="通知类型"
            help=""
          >
            <span className="conditionContainerItem4">
              <Select
                placeholder="请选择"
                allowClear
                style={{
                  width: 200,
                }}
              >
                {
                    respList.map(apply)
                  }
              </Select>
            </span>
          </FormItem>
          <Button htmlType="submit">
            增加
          </Button>
          <Button htmlType="submit">
            删除
          </Button>
        </Form>
        <Table
          bordered
          columns={this.colums}
          dataSource={this.dataSource}
          rowSelection={rowSelection}
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
const WrappedFirst = Form.create()(First);
export default WrappedFirst;
