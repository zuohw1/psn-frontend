import React from 'react';
import {
  Layout, Menu, Icon, Input,
} from 'antd';
import { Route, Switch, Link } from 'dva/router';
import logoImg from '../../assets/images/logo.png';
import 'antd/dist/antd.less';
import app from '../../assets/styles/app.less';
import Main from './main';
import PsnTranspro from '../../psn/containers/psn-transpro';
import PsnRoster from '../../psn/containers/roster';
import StaffDimission from '../../psn/containers/staff-dimission';
import PsnMgr from '../../psn/containers/psn-mgr';
import PsnMgrCard from '../../psn/containers/psn-mgr-card';
import DocumentLoad from '../../psn/containers/document-load';
import QuitPersonnel from '../../psn/containers/quit-personnel';
import TransferPersonnel from '../../psn/containers/transfer-personnel';
import RetirePersonnel from '../../psn/containers/retire-personnel';
import ContractManage from '../../psn/containers/contract-manage';
import SettingNotice from '../../psn/containers/setting-notice';
import OrgExportCondition from '../../psn/components/settingnotice/org-export-condition';
import NewInformation from '../../psn/components/contractmanage/new-information';

const { SubMenu } = Menu;

const MainLayout = (state) => {
  const route = (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/psn/transpro" component={PsnTranspro} />
      <Route exact path="/psn/roster" component={PsnRoster} />
      <Route exact path="/psn/staffdimission" component={StaffDimission} />
      <Route exact path="/psn/psnMgr" component={PsnMgr} />
      <Route exact path="/psn/psnMgrCard" component={PsnMgrCard} />
      <Route exact path="/psn/documentLoad" component={DocumentLoad} />
      <Route exact path="/psn/quitPersonnel" component={QuitPersonnel} />
      <Route exact path="/psn/transferPersonnel" component={TransferPersonnel} />
      <Route exact path="/psn/retirePersonnel" component={RetirePersonnel} />
      <Route exact path="/psn/contractManage" component={ContractManage} />
      <Route exact path="/psn/settingNotice" component={SettingNotice} />
      <Route exact path="/psn/settingNotice/OrgExportCondition" component={OrgExportCondition} />
      <Route exact path="/psn/contractManage/newInformation" component={NewInformation} />
    </Switch>
  );
  const ret = state.headless ? (
    <Layout style={{ padding: '5px' }}>
      {route}
    </Layout>
  ) : (
    <div className={app.App}>
      <div className={app.AppHeader}>
        <div className={app.headerTop}>
          <div className={app.headerTopL}>
            <img src={logoImg} alt="" />
          </div>
          <span className={app.headerTopC}><b>中国联通HR网上服务平台</b></span>
          <div className={app.headerTopR}>
            <Input.Search
              placeholder="请输入功能或服务关键字"
              enterButton="搜索"
              onSearch={value => value}
            />
          </div>
        </div>
        <div className={app.headerBottom}>
          <nav>
            <a href=" javascript:;">员工服务大厅</a>
            <a href=" javascript:;" className={app.navActive}>人力业务管理</a>
            <a href=" javascript:;">数据决策中心</a>
          </nav>
        </div>
      </div>
      <Layout style={{ minHeight: '75vh' }}>
        <Layout.Sider
          collapsible
          collapsed={state.collapsed}
          onCollapse={() => { state.dispatch({ type: 'layout/onCollapse' }); }}
          theme="light"
        >
          <div className={app.logo} />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            {
              state.menus.map((item) => {
                if (item.pid === 0) {
                  const children = state.menus.filter(i => i.pid === item.id);
                  return children.length !== 0 ? (
                    <SubMenu
                      key={item.id}
                      title={<span><Icon type={item.iconUrl} /><span>{item.menuName}</span></span>}
                    >
                      {children.map(ele => (
                        <Menu.Item key={ele.id}>
                          <Link to={ele.url || ''}><span>{ele.menuName}</span></Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={item.id}>
                      <Link to={item.url || ''}><Icon type={item.iconUrl} /><span>{item.menuName}</span></Link>
                    </Menu.Item>
                  );
                } else {
                  return '';
                }
              })
            }
          </Menu>
        </Layout.Sider>
        <Layout style={{ padding: '5px' }}>
          {route}
        </Layout>
      </Layout>
    </div>
  );
  return ret;
};

export default MainLayout;
