import React from 'react';
import {
  Table, Button, Row, Col, Modal,
} from 'antd';
import OperateDuty from './operate';
import PsndataUpload from './operate/psndata-upload';

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  tableData,
  actions,
  impModalVisiable,
  loading,
}) => {
  const data = tableData.records;
  const { setImpModalVisiable, setTableData } = actions;

  console.log(impModalVisiable);

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

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: 130,
    align: 'center',
  }, {
    title: '员工姓名',
    dataIndex: 'psnName',
    key: 'psnName',
    width: 130,
    align: 'center',
  }, {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 130,
    align: 'center',
  }, {
    title: '身份证号',
    dataIndex: 'idNumber',
    key: 'idNumber',
    width: 200,
    align: 'center',
  }, {
    title: '人员类型',
    dataIndex: 'psnType',
    key: 'psnType',
    width: 130,
    align: 'center',
  }, {
    title: '员工状态',
    dataIndex: 'psnState',
    key: 'psnState',
    width: 130,
    align: 'center',
  }, {
    title: '所在部门',
    dataIndex: 'deptName',
    key: 'deptName',
    width: 180,
    align: 'center',
  }, {
    title: '入职日期',
    dataIndex: 'entryDate',
    key: 'entryDate',
    width: 130,
    align: 'center',
  }, {
    title: '人员标识（系统内）',
    dataIndex: 'psnFlag',
    key: 'psnFlag',
    width: 180,
    align: 'center',
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 300,
    align: 'center',
    render: (text, record) => (
      <span>
        {record.operation.map(
          tag => (
            <div>
              <OperateDuty
                psnKey={record.key}
                operateName={tag}
                psnRecord={record}
                handleDelete={handleDelete.bind(this)}
              />
            </div>
          ),
        )}
      </span>
    ),
  }];

  function handlePsnEntrySubmit() {
    console.log('handlePsnEntrySubmit');
  }
  function handleImportPsnEntry() {
    setImpModalVisiable(true);
  }
  function handleExportPsnEntry() {
    console.log('handleExportPsnEntry');
  }

  function handleCancel() {
    console.log('handleCancel');
    setImpModalVisiable(false);
  }

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <Row>
        <Col span={20}>
          <p style={{ color: 'red' }}>人员列表</p>
        </Col>
        <Col span={4}>
          <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleImportPsnEntry}>
            导入数据
          </Button>
          <Modal
            title="入职批量导入"
            visible={impModalVisiable}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>返回</Button>,
            ]}
          >
            <PsndataUpload />
          </Modal>
          <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleExportPsnEntry}>
            导出模板
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} style={{ marginTop: '10px' }} />
        </Col>
      </Row>
      <Row>
        <Col span={24} align="center">
          <Button htmlType="button" type="primary" style={{ marginTop: '5px' }} onClick={handlePsnEntrySubmit}>
            提交
          </Button>
        </Col>
      </Row>
    </div>
  );
};
