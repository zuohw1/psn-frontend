import React, { Component } from 'react';
import {
  Row, Col, Layout,
} from 'antd';
import StaffDimissionForm from './staff-mission';

const {
  Content,
} = Layout;
export default class StaffIndex extends Component {
  render() {
    return (
      <Layout style={{ backgroundColor: '#fff' }}>
        <Content style={{ marginTop: 20 }}>
          <Row>
            <Col span={4} />
            <Col span={16}>
              <StaffDimissionForm />
            </Col>
            <Col span={4} />
          </Row>
        </Content>
      </Layout>
    );
  }
}
