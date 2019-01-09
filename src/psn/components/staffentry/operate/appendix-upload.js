import React from 'react';
import {
  Upload, Button, Icon, message,
} from 'antd';
import reqwest from 'reqwest';

class AppendixUpload extends React.Component {
  state = {
    fileList: [],
    fileNum: 0,
    uploading: false,
  }

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
      url: 'http://localhost:8002/psn/staffEntry/uploadAppendix', // TODO  上传url
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
  }

  render() {
    const { uploading, fileList, fileNum } = this.state;
    const props = {
      onRemove: (file) => {
        console.log('onRemove');
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
            fileNum: fileNum - 1,
          };
        });
      },
      beforeUpload: (file) => {
        console.log('beforeUpload');
        this.setState(state => ({
          fileList: [...state.fileList, file],
          fileNum: fileNum + 1,
        }));
        return false;
      },
      fileList,
    };

    // 当前没有添加附件（无数量限制）
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" />添加附件
          </Button>
        </Upload>
        <p>已添加{fileNum}个附件（无数量限制）</p>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? '正在上传...' : '上传' }
        </Button>
      </div>
    );
  }
}

export default AppendixUpload;
