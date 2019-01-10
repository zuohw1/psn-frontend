import React from 'react';
import { Table } from 'antd';

class AllotList extends React.Component {
  render() {
    const tableCols = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
      width: 100,
    }, {
      title: '员工编号',
      dataIndex: 'employeeNumber',
      key: 'employeeNumber',
      align: 'center',
      width: 150,
    }, {
      title: '员工姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 150,
    }, {
      title: '次要分配号',
      dataIndex: 'idNumber',
      key: 'idNumber',
      align: 'center',
      width: 200,
    }, {
      title: '员工类别',
      dataIndex: 'org',
      key: 'org',
      align: 'center',
      width: 250,
    }, {
      title: '开始日期',
      dataIndex: 'DutyLevel',
      key: 'DutyLevel',
      align: 'center',
      width: 150,
    }, {
      title: '结束日期',
      dataIndex: 'endData',
      key: 'endData',
      align: 'center',
      width: 150,
    }, {
      title: '分配组织',
      dataIndex: 'allot',
      key: 'allot',
      align: 'center',
      width: 250,
    }, {
      title: '是否主要分配',
      dataIndex: 'main',
      key: 'main',
      align: 'center',
      width: 150,
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      width: 150,
    }];
    const data = [];
    function getFields() {
      const children = [];
      for (let i = 0; i < tableCols.length; i += 1) {
        children.push(tableCols[i]);
      }
      return children;
    }
    return (
      <div>
        <Table
          columns={getFields()}
          dataSource={data}
          bordered
          pagination={false}
          scroll={{ y: document.body.scrollHeight - 460 }}
        />
      </div>
    );
  }
}
export default AllotList;
