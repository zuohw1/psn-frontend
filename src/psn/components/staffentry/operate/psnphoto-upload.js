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
    imgSrc: '',
    fileName: 'derewr',
    previewImage: img,
    scale: 1,
    previewAfterScale: null,
  }


  handleSave = (data) => {
  // handleSave = function (data) {
    console.log('handleSave()--', data);
    // const img0 = this.editor.getImageScaledToCanvas().toDataURL();
    // const rect = this.editor.getCroppingRect();

    // const {
    //   scale, width, height, borderRadius,
    // } = this.state;
    // this.setState({
    //   previewAfterScale: {
    //     // img: img0,
    //     // rect,
    //     scale,
    //     width,
    //     height,
    //     borderRadius,
    //   },
    // });
  };
  // }.bind(this);

  handleScale = (e) => {
    const scale = parseFloat(e);
    this.setState({ scale });
  };

  // handlePositionChange = (position) => {
  //   this.setState({ position });
  // }
  //
  // handleDrop = (acceptedFiles) => {
  //   this.setState({ previewImage: acceptedFiles[0] });
  // }

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

      // try {
      //   // 接口
      //   const res = await upload(filedata, token);
      //   if (res.errCode === 0) {
      //     // 上传成功
      //   } else {
      //     // 上传失败
      //   }
      // } catch (err) {
      //   console.log(err);
    }, 'image/jpeg');

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
    // 判断浏览器是否支持FileReader接口
    if (typeof FileReader === 'undefined') {
      console.log('<h1>当前浏览器不支持FileReader接口</h1>');
    }
    const {
      uploading,
      fileList,
      imgSrc,
    } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
            previewImage: img,
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
        }));

        const fr = new FileReader();
        // 读取文件内容，结果用data:url的字符串形式表示
        fr.readAsDataURL(file);
        fr.onload = function (e) {
          this.setState({
            previewImage: e.target.result,
          });
        }.bind(this);

        return false;
      },
      onPreview: (file) => {
        this.setState({
          previewImage: file.thumbUrl,
        });
      },
      onChange: (file) => {
        console.log('onChange() ----- file:', file);
        // this.setState({ fileList });
      },
      // ({ fileList }) => this.setState({ fileList })
      accept: 'image/png,image/gif,image/jpeg,image/jpg,image/bmp', // 照片
      // fileList,
    };

    const {
      previewImage,
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">选择照片</div>
      </div>
    );


    // 当前没有添加附件（无数量限制）
    const { scale, previewAfterScale } = this.state;
    return (
      <div style={{ height: 400 }}>
        <Row>
          <Col span={12}>
            <p style={{ color: 'red' }}>
              当前照片
            </p>
            <div>
              <AvatarEditor
                ref={this.setEditorRef}
                image={previewImage}
                width={200}
                height={200}
                border={50}
                color={[248, 249, 250, 0.8]}
                borderRadius={0}
                scale={parseFloat(scale)}
                style={{ cursor: 'move', margin: '10px 0' }}
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
            <Upload
              {...props}
              listType="picture-card"
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
            <Cropper
              style={{ width: '300', height: '200' }}
              aspectRatio={1}
              preview=".uploadCrop"
              guides={false}
              src={imgSrc}
              ref={(cropper) => { this.cropper = cropper; }}
            />
            <input type="button" onClick={this.handleSave} value="Preview" />
            <br />
            {!!previewAfterScale && (
              <img
                alt="imgAftScale"
                src={previewAfterScale.img}
                style={{
                  borderRadius: `${(Math.min(
                    previewAfterScale.height,
                    previewAfterScale.width,
                  )
                    + 10)
                  * (previewAfterScale.borderRadius / 2 / 100)}px`,
                }}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default PsnPhotoUpload;
