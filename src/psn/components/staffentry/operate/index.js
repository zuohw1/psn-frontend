import React from 'react';
import {
  Button, Row, Col, Modal,
} from 'antd';
import PropTypes from 'prop-types';
import img from './img20181219193304.png';

class OperateDuty extends React.Component {
  state = {
    psnInfoVisiable: false,
    appendixVisiable: false,
    uploadPhoVisiable: false,
  };


  showModal = () => {
    const {
      operateName, psnKey, handleDelete,
    } = this.props;
    if (operateName === '详细信息') {
      this.setState({
        psnInfoVisiable: true,
      });
    } else if (operateName === '附件') {
      this.setState({
        appendixVisiable: true,
      });
    } else if (operateName === '上传照片') {
      this.setState({
        uploadPhoVisiable: true,
      });
    } else if (operateName === '删除') {
      handleDelete(psnKey);
    }
  };

  addAppendix = () => {
    console.log('addAppendix');
  };

  handleOk = () => {
    this.setState({
      psnInfoVisiable: false,
      appendixVisiable: false,
      uploadPhoVisiable: false,
    });
  };

  handleCancel = () => {
    this.setState({
      psnInfoVisiable: false,
      appendixVisiable: false,
      uploadPhoVisiable: false,
    });
  };

  render() {
    const {
      operateName, // posKey, posRecord,
    } = this.props;
    const { psnInfoVisiable, appendixVisiable, uploadPhoVisiable } = this.state;
    return (
      <div>
        <a href=" javascript:;" onClick={this.showModal.bind(this)}> {operateName}</a>
        <Modal
          title="人员信息"
          visible={psnInfoVisiable}
          width={1000}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: 400 }}>
            人员信息
          </div>
        </Modal>


        <Modal
          title="附件"
          visible={appendixVisiable}
          width={1000}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="上传"
        >
          上传文件：
          <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={this.addAppendix}>
            添加附件
          </Button>
          <p>当前没有添加附件（无数量限制）</p>

        </Modal>

        <Modal
          title="上传照片"
          visible={uploadPhoVisiable}
          width={1000}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: 400 }}>
            <Row>
              <Col span={12}>
                <p style={{ color: 'red' }}>
                  当前照片
                </p>
                <div>
                  <img src={img} width="200" height="200" alt="当前照片" />
                </div>
              </Col>
              <Col span={12}>
                <p style={{ color: 'red' }}>
                  更换照片
                </p>
                <p>请选择新的好怕文件，文件需小于2MB</p>
                <Button htmlType="button">
                  上传
                </Button>
              </Col>
            </Row>
          </div>
        </Modal>

      </div>
    );
  }
}

OperateDuty.propTypes = {
  operateName: PropTypes.string.isRequired,
  psnKey: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default OperateDuty;
