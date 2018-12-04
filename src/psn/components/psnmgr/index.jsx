import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Search from './search-comp';
import PsnTable from './psn-table';
import '../../../assets/styles/module.less';


const { Content } = Layout;

const PsnRoster = (state) => {
  return (

    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          人事管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>员工信息维护</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Search {...state} />
        <PsnTable {...state} />
      </Content>
    </React.Fragment>
  );
};

export default PsnRoster;
