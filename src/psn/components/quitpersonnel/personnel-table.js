import React from 'react';
import { Table, Pagination, Card } from 'antd';

export default (props) => {
  const {
    loading,
    tableData,
    actions,
    search,
  } = props;
  const { listTable } = actions;
  const data = tableData.records;
  const onChange = (pageSize, pageNumber) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };
  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };
  const { current, total, size } = tableData;
  /* 列表字段 */
  const tableCols = [{
    title: '员工编号',
    dataIndex: 'employee',
    key: 'employee',
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
    dataIndex: 'organization',
    key: 'organization',
    align: 'center',
    width: 250,
  }, {
    title: '职务',
    dataIndex: 'post',
    key: 'post',
    align: 'center',
    width: 200,
  }];
  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }
  return (
    <div style={{ marginTop: 10 }}>
      <Card title="员工列表" bordered={false} bodyStyle={{ padding: '20px 5px' }}>
        <Table
          columns={getFields()}
          dataSource={data}
          loading={loading}
          pagination={false}
          size="small"
          bordered
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
    </div>
  );
};
