import React from 'react';
import {
  Upload, Button, Icon, message, Row, Col, Slider,
} from 'antd';
import reqwest from 'reqwest';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import AvatarEditor from 'react-avatar-editor';
import img from './img20181219193304.png';

class PsnPhotoUpload extends React.Component {
  state = {
    fileList: [],
    uploading: false,
    fileName: 'derewr',
    selectImg: img,
    scale: 1,
    previewAfterScale: null,
    position: { x: 0.5, y: 0.5 },
  }

  setEditorRef = (editor) => {
    if (editor) this.editor = editor;
  }

  /** 剪裁预览 */
  handleSave = () => {
    const img0 = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();
    const {
      scale,
    } = this.state;
    this.setState({
      previewAfterScale: {
        img: img0,
        rect,
        scale,
      },
    });
  };

  /** 滑动输入条改变 */
  handleScale = (e) => {
    const scale = parseFloat(e);
    this.handleSave();
    this.setState({ scale });
  };

  /** 鼠标拖动触发 */
  handlePositionChange = (position) => {
    this.handleSave();
    this.setState({ position });
  }

  upload = (file, token) => {
    return fetch('http://localhost:8002/psn/staffEntry/uploadAppendix2', { // url地址
      body: file,
      credentials: 'include',
      headers: {
        token,
      },
      method: 'POST',
    })
      .then(response => response.json());
  };

  /** 上传按钮触发 */
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    this.setState({
      uploading: true,
    });
    const croppedCanvas = this.cropper.getCroppedCanvas({
      minWidth: 200,
      minHeight: 200,
      width: 200,
      height: 200,
      maxWidth: 200,
      maxHeight: 200,
    });
    if (typeof croppedCanvas === 'undefined') {
      return;
    }
    const {
      fileName,
    } = this.state;
    croppedCanvas.toBlob(async (blob) => {
      // 图片name添加到blob对象里
      // blob.name = fileName;
      // 创建提交表单数据对象
      const filedata = new FormData();
      // 添加要上传的文件
      filedata.append('file', blob, fileName);
      try {
        // 接口
        const token = '';
        const res = await this.upload(filedata, token);
        if (res.errCode === 0) {
          // 上传成功
        } else {
          // 上传失败
        }
      } catch (err) {
        console.log(err);
      }
    }, 'image/jpeg');

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
    if (typeof FileReader === 'undefined') {
      message.error('当前浏览器不支持FileReader接口');
    }
    const {
      uploading, fileList, selectImg, scale, previewAfterScale, position,
    } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
            selectImg: img,
            previewAfterScale: null,
            scale: 1,
            position: { x: 0.5, y: 0.5 },
          };
        });
      },
      beforeUpload: (file) => {
        const size = file.size / 1024; // kb
        const filemaxsize = 1024 * 2; // 2M
        if (size > filemaxsize) {
          message.error('附件大小不能大于2M！');
          return false;
        }
        if (size <= 0) {
          message.error('附件大小不能为0M！');
          return false;
        }
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));

        // 读取文件内容
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function (e) {
          this.setState({
            selectImg: e.target.result,
          });
        }.bind(this);

        return false;
      },
      // onChange: (file) => {
      // },
      // ({ fileList }) => this.setState({ fileList })
      accept: 'image/png,image/gif,image/jpeg,image/jpg,image/bmp', // 照片
      // fileList,
    };

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">选择照片</div>
      </div>
    );
    return (
      <div style={{ height: 500 }}>
        <Row>
          <Col span={12}>
            <p style={{ color: 'red' }}>
              剪裁头像照片
            </p>
            <p>您可以拖动照片以剪裁满意的头像</p>
            <div>
              <AvatarEditor
                ref={this.setEditorRef}
                image={selectImg}
                width={200}
                height={200}
                border={50}
                color={[248, 249, 250, 0.8]}
                borderRadius={0}
                scale={parseFloat(scale)}
                style={{ cursor: 'move', margin: '10px 0' }}
                position={position}
                onPositionChange={this.handlePositionChange}
              />
              <Slider
                onChange={this.handleScale}
                min={1}
                max={2}
                step={0.01}
                value={scale}
                style={{ width: 280, margin: '10px auto' }}
                defaultValue={1}
              />
            </div>
          </Col>
          <Col span={12}>
            <p style={{ color: 'red' }}>
              更换照片
            </p>
            <p>请选择新的照片文件，文件需小于2MB</p>
            <Row>
              <Col span={24}>
                <div>
                  <Upload
                    {...props}
                    listType="picture-card"
                    // showUploadList={false}
                  >
                    {fileList.length >= 1 ? null : uploadButton}
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
                </div>
              </Col>
            </Row>
            <Cropper
              style={{ width: '300', height: '200' }}
              aspectRatio={1}
              preview=".uploadCrop"
              guides={false}
              ref={(cropper) => { this.cropper = cropper; }}
            />
            <div>
              <br />
              {!!previewAfterScale && (
                <img
                  alt="imgAftScale"
                  src={previewAfterScale.img}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PsnPhotoUpload;
