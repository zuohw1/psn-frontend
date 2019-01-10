import React from 'react';
import {
  Table, Card, Pagination,
} from 'antd';
import AllotList from './allot-list';

export default (props) => {
  const {
    tableData,
    search,
    actions,
  } = props;
  const data = tableData.records;
  const { listTable } = actions;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onChange = (pageSize, pageNumber) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };
  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };
  const { current, total, size } = tableData;
  const onClickAdd = () => {
  };
  /* 列表字段 */
  const tableCols = [{
    title: '员工编号',
    dataIndex: 'employeeNumber',
    key: 'employeeNumber',
    align: 'center',
    width: 100,
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 150,
  }, {
    title: '身份证号',
    dataIndex: 'idNumber',
    key: 'idNumber',
    align: 'center',
    width: 200,
  }, {
    title: '组织',
    dataIndex: 'org',
    key: 'org',
    align: 'center',
    width: 250,
  }, {
    title: '员工类型',
    dataIndex: 'DutyLevel',
    key: 'DutyLevel',
    align: 'center',
    width: 150,
  }, {
    title: '次要分配操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    width: 150,
    render: (text, records) => (
      <span>
        <a href=" javascript:;" onClick={() => onClickAdd(text, records)}>新增</a>
      </span>
    ),
  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }
  return (
    <div>
      <Card title="人员列表" bordered={false} style={{ marginTop: 10 }} bodyStyle={{ padding: '20px 5px' }}>
        <Table
          columns={getFields()}
          dataSource={data}
          bordered
          size="small"
          rowSelection={rowSelection}
          pagination={false}
          scroll={{ y: document.body.scrollHeight - 460 }}
        />
        <Pagination
          showQuickJumper
          current={current}
          total={total}
          pageSize={size}
          onChange={onChange}
          onShowSizeChange={onChangePageSize}
          showTotal={tota => `共${tota}条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </Card>
      <Card title="分配列表" bordered={false} style={{ marginTop: 10 }} bodyStyle={{ padding: '20px 5px' }}>
        <AllotList />
      </Card>
    </div>
  );
};
