import React, { Component } from 'react';
import {
  Row, Col, Layout, Button,
} from 'antd';
import StaffDimission from './staff-mission';

const {
  Footer, Content,
} = Layout;
export default class StaffIndex extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <Row>
            <Col span={3} />
            <Col span={18}>
              <StaffDimission />
            </Col>
            <Col span={3} />
          </Row>
        </Content>
        <Footer style={{ margin: '0 auto' }}>
          <Button style={{ marginRight: '10px' }}>提交</Button>
          <Button>打印通知单</Button>
        </Footer>
      </Layout>
    );
  }
}
