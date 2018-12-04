import React from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import PsnMgrCard from './psn-mgr-card';
import '../../../assets/styles/module.less';


const { Content } = Layout;

const PsnMgrCardDetail = (state) => {
  const onBtnReturnClick = () => {
    state.history.goBack(-1);
  };

  return (

    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          人事管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>员工信息维护-详情</strong>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span style={{ float: 'right' }}><Button onClick={onBtnReturnClick}> 返回</Button></span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <PsnMgrCard {...state} />
      </Content>
    </React.Fragment>
  );
};

export default PsnMgrCardDetail;
