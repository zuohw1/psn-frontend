import React from 'react';
import {
  Form, Input, Button, Alert, Select, Modal,
} from 'antd';
import First from './first-window';
import Notice from './first-notice';

const FormItem = Form.Item;

class EmptyAttach extends React.Component {
  state = {
    visible: false,
    notice: false,
  };


  // 第一個彈窗
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  };
  // 第二个弹窗

  showModal2 = () => {
    this.setState({
      notice: true,
    });
  };

  handleOk2 = () => {
    this.setState({
      notice: false,
    });
  };

  handleCancel2 = (e) => {
    e.preventDefault();
    this.setState({
      notice: false,
    });
  };

  render() {
    // const { form } = this.props;
    // const { closeInsDrawer } = form;
    const respList = [];
    const respRange = [
      { id: '0', title: '部门综合处' },
      { id: '1', title: '信息化接口人' },
      { id: '2', title: '人力核心' },
      { id: '3', title: '主数据' },
      { id: '4', title: '云门户' },
      { id: '5', title: '各个系统' }];
    if (respList.length === 0) {
      for (let i = 0; i < respRange.length; i += 1) {
        const respV = {
          id: respRange[i].id,
          title: respRange[i].title,
        };
        respList.push(respV);
      }
    }
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const addProfModalOk = (e) => {
      e.preventDefault();
      // closeInsDrawer( );
    };
    const { Option } = Select;
    const apply = (item) => {
      return (<Option value={item.id} key={item.id}> {item.title} </Option>);
    };
    const { visible, notice } = this.state;
    return (
      <div className="addProfDivision">
        <Alert style={this.showAlert ? { display: 'block' } : { display: 'none' }} message="已有该分组，请重新添加！" type="warning" showIcon />
        <ul className="addProfList">
          <li>
            <FormItem
              {...formItemLayout}
              label="通知类型"
              help=""
            >
              <span className="conditionContainerItem4">
                <Select
                  placeholder="请选择"
                  allowClear
                  style={{
                    width: 300,
                  }}
                >
                  {
                  respList.map(apply)
                }
                </Select>
              </span>
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="通知人员"
              help=""
            >
              <Input
                style={{
                  width: 300,
                }}
                onClick={this.showModal2}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="通知范围"
              help=""
            >

              <Input
                style={{
                  width: 300,
                }}
                onClick={this.showModal}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="邮箱"
              help=""
            >

              <Input
                style={{
                  width: 300,
                }}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="系统名称"
              help=""
            >

              <Input
                style={{
                  width: 300,
                }}
              />
            </FormItem>
          </li>
        </ul>
        <Button key="submit" type="primary" onClick={e => addProfModalOk(e)}>
          保存
        </Button>
        <Modal
          width={800}
          title=" "
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <First />
        </Modal>
        <Modal
          width={800}
          title="查找审批人"
          visible={notice}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          <Notice />
        </Modal>
      </div>
    );
  }
}

export default EmptyAttach;
