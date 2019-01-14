import React from 'react';
import {
  Form, Input, Button, Alert, Select, Modal,
} from 'antd';
import First from './first-window';


const FormItem = Form.Item;

const EmptyAttach = (state) => {
  const {
    showAlert, actions, isVisible, form,
  } = state;
  const {
    setVisible,
  } = actions;
  const { Option } = Select;
  const respList = [];
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };
  // 第一個彈窗
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
    setVisible(false, true);
  };
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
  const addProfModalOk = () => {
  };
  return (
    <div className="addProfDivision">
      <Alert style={showAlert ? { display: 'block' } : { display: 'none' }} message="已有该分组，请重新添加！" type="warning" showIcon />
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
              onClick={showModal}
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
            />
          </FormItem>
        </li>
      </ul>
      <Button key="submit" type="primary" onClick={e => addProfModalOk(e)}>
        保存
      </Button>
      <Modal
        width={800}
        title="通知设置人员查询"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <First />
      </Modal>
    </div>
  );
};

export default EmptyAttach;
