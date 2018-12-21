import React from 'react';
import {
  Upload, Button, Icon, message, Row, Col,
} from 'antd';
import reqwest from 'reqwest';
import 'cropperjs/dist/cropper.css';
import img from './img20181219193304.png';

class PsnPhotoUpload extends React.Component {
  state = {
    fileList: [],
    // fileNum: 0,
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
    const {
      uploading,
      fileList, fileNum,
    } = this.state;
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
        const size = file.size / 1024; // kb
        const filemaxsize = 1024 * 2; // 2M
        if (size > filemaxsize) {
          message.error(`附件大小不能大于${filemaxsize / 1024}M！`);
          return false;
        }
        if (size <= 0) {
          message.error('附件大小不能为0M！');
          return false;
        }
        this.setState(state => ({
          fileList: [...state.fileList, file],
          fileNum: fileNum + 1,
        }));

        return false;
      },
      accept: 'image/png,image/gif,image/jpeg,image/jpg,image/bmp', // 照片
      fileList,
    };

    // 当前没有添加附件（无数量限制）
    return (
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
            <p>请选择新的照片文件，文件需小于2MB</p>
            <Upload {...props} listType="picture">
              <Button>
                <Icon type="upload" />选择照片
              </Button>
            </Upload>
            <Button
              type="primary"
              onClick={this.handleUpload}
              disabled={fileList.length === 0}
              loading={uploading}
              style={{ marginTop: 16 }}
            >
              {uploading ? '正在上传...' : '上传' }
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PsnPhotoUpload;
