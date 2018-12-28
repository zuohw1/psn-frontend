import React from 'react';
import {
  Modal, Button, Upload, Icon, message,
} from 'antd';
import PropTypes from 'prop-types';
import reqwest from 'reqwest';

class UploadList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [], // 文件列表
      uploading: false,
      visible: false,
    };
  }

  showModal = () => {
    const {
      psnKey, handleDelete, operateName,
    } = this.props;
    if (operateName === '上传附件') {
      this.setState({
        visible: true,
      });
    } else if (operateName === '删除') {
      handleDelete(psnKey);
    }
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  // 上传之前事件
  beforeUpload = (file) => {
    const fileArr = [];
    // 获取新的上传列表
    fileArr.push(file);
    // 进行赋值保存
    this.setState(() => ({
      fileList: fileArr,
      uploadPath: '',
    }));
  };

  // 移除文件
  removeFile = () => {
    this.setState(() => ({
      fileList: [],
      uploadPath: '',
    }));
  };

  // 上传状态改变事件
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: 'http://localhost:8002/psn/survivorsInput/upload', // TODO  上传url
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('上传成功。');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('上传失败');
      },
    });
  };

  render() {
    const { visible, fileList, uploading } = this.state;
    const { operateName } = this.props;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        const size = file.size / 1024;
        if (size <= 0) {
          alert('附件大小不能为0M！');
          return false;
        }

        const fileArr = [];
        // 获取新的上传列表
        fileArr.push(file);
        // 进行赋值保存
        this.setState(() => ({
          fileList: fileArr,
          uploadPath: '',
        }));
        return false;
      },
      fileList, // 上传文件列表
    };

    let showTip = '当前没有添加附件（最多上传1个附件）';
    if (fileList.length > 0) {
      showTip = '已添加1个附件（最多上传1个附件）';
    }
    return (
      <div>
        <a href=" javascript:void(0)" onClick={this.showModal.bind(this)}>{operateName}</a>
        <Modal
          title="上传附件"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Upload {...props}>
            <Button>
              <Icon type="upload" />添加附件
            </Button>
          </Upload>
          <p>{showTip}</p>

          <Button
            type="primary"
            onClick={this.handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? '正在上传...' : '上传' }
          </Button>
        </Modal>
      </div>
    );
  }
}

UploadList.propTypes = {
  operateName: PropTypes.string.isRequired,
  psnKey: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default UploadList;
