import React from 'react';
import { Table, Pagination, Card } from 'antd';
import Back from './backpay-table';

export default({
  form,
  actions,
  tableData,
  loading,
}) => {
  const { listTable } = actions;
  const data = tableData.records;
  const onChange = (currentPageNum, recordNum) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, recordNum, currentPageNum };
        listTable(select);
      }
    });
  };
  const onChangePageSize = (current, size) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, recordNum: size, currentPageNum: current };
        listTable(select);
      }
    });
  };
  const { current, total, size } = tableData;
  /* 列表字段 */
  const tableCols = [{
    title: '员工编号',
    dataIndex: 'employeeNumber',
    key: 'employeeNumber',
    align: 'center',
    width: 100,
  }, {
    title: '姓名',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
    width: 150,
  }, {
    title: '身份证号',
    dataIndex: 'nationalIdentifier',
    key: 'nationalIdentifier',
    align: 'center',
    width: 200,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'center',
    width: 250,
  }, {
    title: '职务',
    dataIndex: 'postName',
    key: 'postName',
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
      <Card title="人员列表" bordered={false} bodyStyle={{ padding: '20px 5px' }}>
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
          pageSizeOptions={['10', '50', '100', '200']}
        />
      </Card>
      <Back />
    </div>
  );
};
