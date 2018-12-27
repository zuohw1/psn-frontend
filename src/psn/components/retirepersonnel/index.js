import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Search from './search';
import Personnel from './persoonel-table';
import Back from './backpay-table';
import '../../../assets/styles/module.less';

const { Content } = Layout;

const transferPersonnel = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          人事管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>退休人员补薪</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Search {...state} />
        <Personnel {...state} />
        <Back {...state} />
      </Content>
    </React.Fragment>
  );
};
export default transferPersonnel;
