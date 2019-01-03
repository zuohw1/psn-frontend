import React from 'react';
import { Table, Button, Card } from 'antd';
import OperateDuty from './operate/index';

export default () => {
  /* 列表字段 */
  const listCols = [{
    title: '员工编号',
    dataIndex: 'employeeNumber',
    key: 'employeeNumber',
    align: 'center',
    width: '10%',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: '10%',
  }, {
    title: '合同编号',
    dataIndex: 'contractNumber',
    key: 'contractNumber',
    align: 'center',
    width: '10%',
  }, {
    title: '合同类型',
    dataIndex: 'contractType',
    key: 'contractType',
    align: 'center',
    width: '10%',
  }, {
    title: '签订日期',
    dataIndex: 'signData',
    key: 'signData',
    align: 'center',
    width: '10%',
  }, {
    title: '合同状态',
    dataIndex: 'contractStatus',
    key: 'contractStatus',
    align: 'center',
    width: '10%',
  }, {
    title: '生效日期',
    dataIndex: 'effectData',
    key: 'effectData',
    align: 'center',
    width: '10%',
  }, {
    title: '失效日期',
    dataIndex: 'InvalidData',
    key: 'InvalidData',
    align: 'center',
    width: '10%',
  }, {
    title: '预计到期日',
    dataIndex: 'EstimateData',
    key: 'EstimateData',
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
              <OperateDuty
                operateName={tag}
                psnRecord={record}
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
    for (let i = 0; i < listCols.length; i += 1) {
      children.push(listCols[i]);
    }
    return children;
  }
  const listData = [{
    key: '1',
    employeeNumber: '0016711',
    name: '王瑞武',
    contractNumber: 'TJZ140069-bm',
    contractType: '保密协议',
    signData: '2004-09-29',
    contractStatus: '续签',
    effectData: '2004-09-29',
    InvalidData: '',
    EstimateData: '',
    operation: ['查看', '修改', '续签/变更/改签', '终止/解除'],
  }, {
    key: '2',
    employeeNumber: '0016711',
    name: '王瑞武',
    contractNumber: 'TJZ140069',
    contractType: '劳动合同',
    signData: '2004-09-29 ',
    contractStatus: '续签',
    effectData: '2004-09-29 ',
    InvalidData: '',
    EstimateData: '',
    operation: ['查看', '修改', '续签/变更/改签', '终止/解除'],
  }];
  return (
    <div>
      <Card title="合同列表" bordered={false}>
        <Button style={{ marginBottom: 10 }}>新增</Button>
        <Table
          columns={getFields()}
          dataSource={listData}
          pagination={false}
          size="small"
          bordered
          scroll={{ y: document.body.scrollHeight - 460 }}
          style={{ marginTop: 10 }}
        />
      </Card>
    </div>
  );
};
