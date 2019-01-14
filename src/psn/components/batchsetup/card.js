import React from 'react';
import {
  Form, Input, Button, Alert, Select,
} from 'antd';


const FormItem = Form.Item;


const Card = ({
  form, showAlert,
}) => {
  const { Option } = Select;
  const respList = [];
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
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
  const { getFieldDecorator } = form;
  // 点击radio2 显示一级业务划分
  const addProfModalOk = () => {
  };
  // const addProfModalCancel = () => {
  //   isAlertShow(false);
  //   isAddprofModalShow(false);
  // };
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
              </Select>,
            </span>
          </FormItem>
        </li>
        <li>
          <FormItem
            {...formItemLayout}
            label="通知人员"
            help=""
          >
            {getFieldDecorator('businessdescript', {
              rules: [{
                type: 'string',
              }],
            })(
              <Input
                style={{
                  width: 300,
                }}
              />,
            )}
          </FormItem>
        </li>
        <li>
          <FormItem
            {...formItemLayout}
            label="通知范围"
            help=""
          >
            {getFieldDecorator('businessdescript', {
              rules: [{
                type: 'string',
              }],
            })(
              <Input
                style={{
                  width: 300,
                }}
              />,
            )}
          </FormItem>
        </li>
        <li>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            help=""
          >
            {getFieldDecorator('businessdescript', {
              rules: [{
                type: 'string',
              }],
            })(
              <Input
                style={{
                  width: 300,
                }}
              />,
            )}
          </FormItem>
        </li>
        <li>
          <FormItem
            {...formItemLayout}
            label="系统名称"
            help=""
          >
            {getFieldDecorator('businessdescript', {
              rules: [{
                type: 'string',
              }],
            })(
              <Input
                style={{
                  width: 300,
                }}
              />,
            )}
          </FormItem>
        </li>
      </ul>
      <Button key="submit" type="primary" onClick={e => addProfModalOk(e)}>
        保存
      </Button>
    </div>
  );
};

const WrappedCard = Form.create()(Card);
export default WrappedCard;
