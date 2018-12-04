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
        <Content style={{ marginTop: 20 }}>
          <Row>
            <Col span={4} />
            <Col span={16}>
              <StaffDimission />
            </Col>
            <Col span={4} />
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
