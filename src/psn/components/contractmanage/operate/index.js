import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import SeeInformation from './see-information';

class Operate extends React.Component {
  state={
    contractMessage: false,
    modifyContract: false,
    renewalContract: false,
    relieveContract: false,
  };

  showModal=() => {
    const { operateName } = this.props;
    if (operateName === '查看') {
      this.setState({
        contractMessage: true,
      });
    } else if (operateName === '修改') {
      this.setState({
        modifyContract: true,
      });
    } else if (operateName === '续签/变更/改签') {
      this.setState({
        renewalContract: true,
      });
    } else if (operateName === '终止/解除') {
      this.setState({
        relieveContract: true,
      });
    }
  };

  handleOk = () => {
    this.setState({
      contractMessage: false,
      modifyContract: false,
      renewalContract: false,
      relieveContract: false,
    });
  };

  handleCancel =() => {
    this.setState({
      contractMessage: false,
      modifyContract: false,
      renewalContract: false,
      relieveContract: false,
    });
  };

  render() {
    const { operateName } = this.props;
    const {
      contractMessage, modifyContract, renewalContract, relieveContract,
    } = this.state;
    return (
      <div>
        <a href=" javascript:void(0)" onClick={this.showModal.bind(this)}>{operateName}</a>
        <Modal
          title="合同信息"
          style={{ top: 20 }}
          visible={contractMessage}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          <SeeInformation />
        </Modal>
        <Modal
          title="修改合同信息"
          visible={modifyContract}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        />
        <Modal
          title="合同续签信息"
          visible={renewalContract}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        />
        <Modal
          title="合同解除信息"
          visible={relieveContract}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        />
      </div>
    );
  }
}

Operate.propTypes = {
  operateName: PropTypes.string.isRequired,
};
export default Operate;
