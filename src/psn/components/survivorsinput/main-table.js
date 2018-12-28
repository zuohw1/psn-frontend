import React from 'react';
import { Table, Pagination, Card } from 'antd';
import Upload from './upload';

export default (props) => {
  const {
    loading,
    actions,
    search,
    tableData,
  } = props;
  const { listTable, setTableData } = actions;
  const data = tableData.records;

  const handleDelete = (posKey) => {
    const dataDel = [...data];
    const dataNew = dataDel.filter((item) => {
      return item.key !== posKey;
    });
    const tableDataNew = {
      total: 0,
      size: 0,
      current: 1,
      records: dataNew,
    };
    setTableData(tableDataNew);
  };

  const onChange = (pageSize, pageNumber) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };
  const onShowSizeChange = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };
  const { total, current, size } = tableData;
  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: '7%',
  }, {
    title: '员工姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: '10%',
  }, {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
    width: '7%',
  }, {
    title: '身份证号',
    dataIndex: 'idNumber',
    key: 'idNumber',
    align: 'center',
    width: '15%',
  }, {
    title: '人员类型',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    width: '12%',
  }, {
    title: '员工状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    width: '10%',
  }, {
    title: '所在部门',
    dataIndex: 'department',
    key: 'department',
    align: 'center',
    width: '10%',
  }, {
    title: '有效时间',
    dataIndex: 'data',
    key: 'data',
    align: 'center',
    width: '10%',
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    width: '10%',
    render: (text, record) => (
      <span>
        {record.operation.map(
          tag => (
            <div>
              <Upload
                psnKey={record.key}
                operateName={tag}
                psnRecord={record}
                handleDelete={handleDelete.bind(this)}
              />
            </div>
          ),
        )
        }
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
      <Card title="人员列表" bordered={false}>
        <Table
          columns={getFields()}
          loading={loading}
          dataSource={data}
          pagination={false}
          size="small"
          scroll={{ y: document.body.scrollHeight - 460 }}
          bordered
        />
        <Pagination
          showQuickJumper
          current={current}
          total={total}
          pageSize={size}
          onChange={onChange}
          onShowSizeChange={onShowSizeChange}
          showTotal={tota => `共${tota}条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </Card>
    </div>
  );
};
