import React from 'react';
import {
  Card, Layout, Table, Form, Input,
} from 'antd';
import Search from './new-search';
import '../assets/styles/contract-manage.less';

const { Content } = Layout;

const columns = [{
  title: '合同编号',
  dataIndex: 'contractNumber',
  key: 'contractNumber',
  align: 'center',
  width: 150,
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  align: 'center',
  width: 150,
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
  align: 'center',
  width: 150,
}, {
  title: '签订日期',
  dataIndex: 'SignData',
  key: 'SignData',
  align: 'center',
  width: 150,
}, {
  title: '续签日期',
  dataIndex: 'RenewalData',
  key: 'RenewalData',
  align: 'center',
  width: 150,
}, {
  title: '预计到期日',
  dataIndex: 'ExpectedDate',
  key: 'ExpectedDate',
  align: 'center',
  width: 150,
}];
const dataSource = [{
  contractNumber: 'TJZ140054-gwpy',
  type: '岗位聘用协议',
  status: '续签',
  SignData: '2004-09-29',
  RenewalData: '',
  ExpectedDate: '2004-09-29',
}, {
  contractNumber: 'TJZ140054-bm',
  type: '保密协议',
  status: '续签',
  SignData: '2004-09-29',
  RenewalData: '',
  ExpectedDate: '2004-09-29',
}, {
  contractNumber: 'TJZ140054',
  type: '劳动合同-无固定期限',
  status: '续签',
  SignData: '2004-09-29',
  RenewalData: '',
  ExpectedDate: '2004-09-29',
}];
const newInformation = (state) => {
  return (
    <React.Fragment>
      <div className="contractNew">
        <Content
          className="page-module"
          style={{
            background: '#fff', padding: '15px', margin: 0, minHeight: 280,
          }}
        >
          <Card title="员工信息" bodyStyle={{ padding: '20px 5px' }} bordered={false}>
            <Form>
              <div className="conditionContainer conditionContainer1">
                <span className="conditionContainerItem1">员工编号：</span>
                <span className="conditionContainerItem4">
                  <Input style={{ width: 300 }} />
                </span>
                <span className="conditionContainerItem3">姓名：</span>
                <span className="conditionContainerItem4">
                  <Input style={{ width: 300 }} />
                </span>
              </div>
              <div className="conditionContainer">
                <span className="conditionContainerItem1">组织：</span>
                <span className="conditionContainerItem4">
                  <Input style={{ width: 300 }} />
                </span>
                <span className="conditionContainerItem3">职衔/岗位名称：</span>
                <span className="conditionContainerItem4">
                  <Input style={{ width: 300 }} />
                </span>
              </div>
            </Form>
          </Card>
          <Card title="合同列表" bodyStyle={{ padding: '20px 5px' }} bordered={false}>
            <Table
              columns={columns}
              dataSource={dataSource}
              bordered
              pagination={false}
            />
          </Card>
          <Search {...state} />
        </Content>
      </div>
    </React.Fragment>
  );
};
const WrappedSearchForm = Form.create()(newInformation);
export default WrappedSearchForm;
