import React from 'react';
import {
  Modal, // Button, Row, Col, Icon, Upload,
} from 'antd';
import PropTypes from 'prop-types';
import AppendixUpload from './appendix-upload';
import PsnPhotoUpload from './psnphoto-upload';

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
          width={600}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="上传"
        >
          上传文件：
          <AppendixUpload />
        </Modal>

        <Modal
          title="上传照片"
          visible={uploadPhoVisiable}
          width={1000}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          <PsnPhotoUpload />
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
