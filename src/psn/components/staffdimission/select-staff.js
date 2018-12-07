import React, { Component } from 'react';
import { Table } from 'antd';
import QueryForm from './query-form';

export default class SelectStaff extends Component {
  colums=[
    {
      title: '员工姓名',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '员工编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '组织',
      dataIndex: 'organize',
      align: 'center',
    },
    {
      title: '职务',
      dataIndex: 'duty',
      align: 'center',
    },
  ];

  dataSource=[
  ];

  render() {
    return (
      <div className="selectstaff">
        <QueryForm />
        <Table bordered columns={this.colums} dataSource={this.dataSource} />
      </div>
    );
  }
}
