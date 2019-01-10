import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import '../../../assets/styles/module.less';
import Search from './search';
import Table from './main-table';

const { Content } = Layout;

const contractManage = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          人事管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>创建次要分配流程</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Search {...state} />
        <Table {...state} />
      </Content>
    </React.Fragment>
  );
};
export default contractManage;
