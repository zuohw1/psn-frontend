import React from 'react';
import {
  Table, Button, Card, Col,
} from 'antd';

export default (props) => {
  const {
    loading,
  } = props;
  const colums = [{
    title: '开始日期',
    key: 'beginData',
    dataIndex: 'beginData',
    align: 'center',
  }, {
    title: '结束日期',
    key: 'endData',
    dataIndex: 'endData',
    align: 'center',
  }, {
    title: '支付方法名称',
    key: 'payMethod',
    dataIndex: 'payMethod',
    align: 'center',
  }, {
    title: '类型',
    key: 'type',
    dataSource: 'type',
    align: 'center',
  }, {
    title: '优先级',
    key: 'priority',
    dataIndex: 'priority',
    align: 'center',
  }, {
    title: '金额',
    key: 'money',
    dataIndex: 'money',
    align: 'center',
  }, {
    title: '金额币种',
    key: 'moneyType',
    dataIndex: 'moneyType',
    align: 'center',
  }, {
    title: '百分比',
    key: 'Percentage',
    dataIndex: 'Percentage',
    align: 'center',
  }, {
    title: '付款币种',
    key: 'payment',
    dataIndex: 'payment',
    align: 'center',
  }, {
    title: '银行名称',
    key: 'bank',
    dataIndex: 'bank',
    align: 'center',
  }, {
    title: '分行',
    key: 'branch',
    dataIndex: 'branch',
    align: 'center',
  }, {
    title: '银行账户/邮储编号',
    key: 'account',
    dataIndex: 'account',
    align: 'center',
  }, {
    title: '开户姓名',
    key: 'name',
    dataIndex: 'name',
    align: 'center',
  }, {
    title: '邮寄地址',
    key: 'address',
    dataIndex: 'address',
    align: 'center',
  }, {
    title: '邮政编码',
    key: 'Postal',
    dataIndex: 'Postal',
    align: 'center',
  }, {
    title: '操作',
    key: 'operation',
    dataIndex: 'operation',
    align: 'center',
  }];

  const dataSource = [{

  }];
  return (
    <div>
      <Button style={{ margin: 10 }}>新增</Button>
      <Card title="支付方法列表">
        <Table
          columns={colums}
          dataSource={dataSource}
          loading={loading}
          pagination={false}
          size="small"
          scroll={{ x: '180%' }}
        />
        <Col span={24} style={{ textAlign: 'center', marginTop: 20 }}>
          <Button type="primary" style={{ marginRight: 10 }}>提交</Button>
          <Button style={{ marginRight: 10 }}>置空</Button>
          <Button>返回</Button>
        </Col>
      </Card>
    </div>
  );
};
