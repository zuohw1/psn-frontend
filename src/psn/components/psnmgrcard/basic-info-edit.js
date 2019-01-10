/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Form, Input, Select, DatePicker, InputNumber,
} from 'antd';

import moment from 'moment';

export default ({
  form, templateData, detailRecord, editEmpBasicDetail, selectRefData,
  empBasicUptState, actions, jRTJRefData, jRZTJRefData, jRTJSMRefData,
}) => {
  const { getFieldDecorator } = form;

  const { updateEmpBasicUptState, updateJRZTJAndJRTJSMRefData } = actions;

  const { Option } = Select;

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       // 可做自定义校验或服务器端校验
  //       // 提交表单数据
  //       updateBasicInfo(values);
  //     }
  //     // console.log('submit');
  //   });
  //   // console.log(form.getFieldsValue());
  // };
  /**
   * 动态加载FormItem为Select的下拉项(Options)
   * @param item
   */
  const loadFormItemSelectData = (item) => {
    if (item.selectType in selectRefData) {
      return selectRefData[item.selectType].map(apply);
    }
    /**
     * 单独处理加入本企业途径(新)以及下级级联档案
     */
    if (item.selectType in jRTJRefData) {
      if (item.selectType === 'CUC_JRTJ') {
        return jRTJRefData[item.selectType].map(
          jrtj => <Option key={jrtj} value={jrtj}>{jrtj}</Option>,
        );
      } else if (item.selectType === 'CUC_JRZTJ') {
        if (jRZTJRefData) {
          return jRZTJRefData.map(
            jrztj => <Option key={jrztj} value={jrztj}>{jrztj}</Option>,
          );
        }
      } else if (item.selectType === 'CUC_JRTJSM') {
        if (jRTJSMRefData) {
          return jRTJSMRefData.map(
            jrtjsm => <Option key={jrtjsm} value={jrtjsm}>{jrtjsm}</Option>,
          );
        }
      }
    }
  };
  /**
   * 数据转换为标签
   * @param item
   * @returns {*}
   */
  const apply = (item) => {
    return (<Option value={item.value} key={item.value}> {item.name} </Option>);
  };

  /**
   * 加入本企业途径（新）变化时，需要重新构建级联下拉
   * @param value
   */
  const onJoinCucChannelNewChange = (value) => {
    const selKey = value;

    updateJRZTJAndJRTJSMRefData({
      jRZTJRefData: jRTJRefData.CUC_JRZTJ[value],
      jRTJSMRefData: jRTJRefData.CUC_JRTJSM[value],
    });
    form.setFieldsValue({ joinCucOtherChannelNew: null, joinCucChannelMarkNew: null });
  };
  /**
   * 动态构建单个FormItem对象
   * @param item
   * @returns {*}
   */
  const buildFormItem = (item) => {
    const rules = [];
    if (item.nullFlag === 'N') {
      rules.push({ required: true, message: `${item.showName}不能为空！` });
    }
    if (item.itemType === 'Input') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item), rules })(
        <Input style={{ width: '80%' }} />,
      ));
    } else if (item.itemType === 'Select') {
      if (item.itemkey === 'joinCucChannelNew') {
        return (getFieldDecorator(item.itemkey,
          { initialValue: getColumnVal(item), rules })(
            <Select placeholder="请选择" style={{ width: '80%' }} allowClear onChange={onJoinCucChannelNewChange}>
              {loadFormItemSelectData(item)}
            </Select>,
        ));
      } else {
        return (getFieldDecorator(item.itemkey,
          { initialValue: getColumnVal(item), rules })(
            <Select placeholder="请选择" style={{ width: '80%' }} allowClear>
              {loadFormItemSelectData(item)}
            </Select>,
        ));
      }
    } else if (item.itemType === 'DatePicker#Date') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item) ? moment(getColumnVal(item), 'YYYY-MM-DD') : undefined, rules })(
        <DatePicker style={{ width: '80%' }} />,
      ));
    } else if (item.itemType === 'Input#Number') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item), rules })(
        <InputNumber min={item.min} max={item.max} style={{ width: '80%' }} />,
      ));
    } else if (item.itemType === 'Input#Email') {
      rules.push({ type: 'email', message: '邮箱格式不正确!' });
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item), rules })(
        <Input style={{ width: '80%' }} />,
      ));
    } else if (item.itemType === 'Input#Hidden') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item) })(
        <Input type="hidden" />,
      ));
    }
  };
  /**
   * 下划线转驼峰命名
   * @param val
   * @returns {string}
   */
  // const replaceUnderLine = (val) => {
  //   const arr = val.split('_');
  //   let toHumpStr = '';
  //   for (let i = 0; i < arr.length; i += 1) {
  //     if (i === 0) {
  //       toHumpStr += arr[i];
  //     } else {
  //       toHumpStr += arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
  //     }
  //   }
  //   return toHumpStr;
  // };
  /**
   * 根据ItemKey取值
   * @param itemKey
   * @returns {string}
   */
  const getColumnVal = (item) => {
    let ret = '';
    // const key = replaceUnderLine(itemKey);
    const specificFields = ['CNC_JRZTJ', 'CUC_JRTJ', 'CUC_JRZTJ', 'CUC_JRTJSM'];
    if (item.itemkey in editEmpBasicDetail) {
      if (item.itemType === 'Select') {
        if (specificFields.indexOf(item.selectType) !== -1) {
          ret = editEmpBasicDetail[item.itemkey];
        } else {
          ret = editEmpBasicDetail[(`${item.itemkey}Name`)];
        }
      } else {
        ret = editEmpBasicDetail[item.itemkey];
      }
    }
    // 对加入途径相关字段单独处理

    return ret;
  };


  const buildBasicInfoEditForm = () => {
    const formAry = [];

    // 更正和更新
    if (empBasicUptState === 'UPDATE') {
      formAry.push(
        <tr key={1}>
          <td>&nbsp;&nbsp;
            <b>变更日期:</b>
          </td>
          <td colSpan={2} style={{ paddingLeft: '20px' }}>
            <Form.Item>
              {getFieldDecorator('effectiveUpdateStartDate', { rules: [{ required: true, message: '变更日期不能为空！' }] })(
                <DatePicker style={{ width: '80%' }} />,
              )}
            </Form.Item>
          </td>
        </tr>,
      );
    }


    if (templateData && templateData.length > 0) {
      for (let i = 0; i < templateData.length; i += 1) {
        const item = templateData[i];
        formAry.push(
          <tr key={(i + 10)} style={{ display: item.showFlag === 'Y' ? '' : 'none' }}>
            <td>&nbsp;&nbsp;<b>{item.showName}:</b></td>
            <td style={{ paddingLeft: '20px' }}>
              {getColumnVal(item)}
            </td>
            <td style={{ paddingLeft: '20px' }}>
              <Form.Item>
                {
                    buildFormItem(item)
                  }
              </Form.Item>
            </td>
          </tr>,
        );
      }
    }
    return formAry;
  };

  const onOptionChange = (value) => {
    // 更新state
    updateEmpBasicUptState(value);
  };
  return (
    <React.Fragment>
      <Form
        style={{ padding: 10 }}
      >
        <table width="100%" style={{ border: '#e8e8e8' }} border="1" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr height="40px">
              <td width="25%"><b>&nbsp;&nbsp;栏目名称</b></td>
              <td width="30%"><b>&nbsp;&nbsp;修改前内容</b></td>
              <td width="45%"><b>&nbsp;&nbsp;修改后内容</b></td>
            </tr>
            <tr>
              <td><b>&nbsp;&nbsp;操作</b></td>
              <td colSpan={2}>
                <Form.Item>
                  {getFieldDecorator('opt', { initialValue: 'CORRECTION' })(
                    <Select style={{ width: '80%', marginLeft: '20px' }} onChange={onOptionChange}>
                      <Option value="CORRECTION" key="corrections">更正</Option>
                      <Option value="UPDATE" key="update">更新</Option>
                    </Select>,
                  )}
                </Form.Item>
              </td>
            </tr>
            {buildBasicInfoEditForm()}

          </tbody>
        </table>
      </Form>
    </React.Fragment>
  );
};
