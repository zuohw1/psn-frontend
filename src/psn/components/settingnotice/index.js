import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Table from './main-table';
import '../../../assets/styles/module.less';

const { Content } = Layout;

const SettingNotice = (state) => {
  console.log('33', state);
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          人事管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>通知单设置</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Table {...state} />
      </Content>
    </React.Fragment>
  );
};
export default SettingNotice;
