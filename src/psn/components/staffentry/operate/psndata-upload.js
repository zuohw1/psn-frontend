import React from 'react';
import {
  Upload, message, Icon, Button, // Button, Icon,
} from 'antd';
import reqwest from 'reqwest';

/* 上传人员数据xls,后台接收数据处理
 * 需要获取当前是否有添加附件
 * 控制：1.最多上传1个附件 2.上传格式xls
 */
class PsndataUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [], // 文件列表
      uploading: false,
    };
  }

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
  }

  // 移除文件
  removeFile = () => {
    this.setState(() => ({
      fileList: [],
      uploadPath: '',
    }));
  }

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
      url: 'http://localhost:8002/psn/staffEntry/uploadEntryPsnData', // TODO  上传url
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
    const { fileList, uploading } = this.state;
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
      accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,', // 上传文件类型--这个是excel类型
      fileList, // 上传文件列表
    };

    let showTip = '当前没有添加附件（最多上传1个附件）';
    if (fileList.length > 0) {
      showTip = '已添加1个附件（最多上传1个附件）';
    }
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" />添加附件
          </Button>
        </Upload>
        <p>{showTip}</p>
        <p style={{ color: 'red' }}>注：上传文件为xls格式</p>

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
export default PsndataUpload;
