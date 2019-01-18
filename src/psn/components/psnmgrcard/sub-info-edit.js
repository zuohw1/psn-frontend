/* eslint-disable no-unused-vars,react/jsx-no-comment-textnodes,no-debugger */
/**
 * 1. 子集-编辑(修改)卡片界面,其他子集通用
 * （ 教育经历，
 * 工作经历，
 * 职业技能信息，
 * 专业技术资格，
 * 奖励信息，
 * 处分信息，
 * 党团政治信息，
 * 职业技能鉴定，
 * 专业技术资格聘任）
 */
import React from 'react';
import {
  Form, Input, Select, DatePicker, InputNumber,
} from 'antd';

import moment from 'moment';
import SearchTable from '../../../components/search-table';

export default ({
  form, templateData, subInfoData, selectRefData,
  actions, collegeNameModel, profTypeModel, profSecTypeModel, rewardAmountUnitModel,
}) => {
  const { getFieldDecorator } = form;

  const {
    updateCollegeNameModel, updateProfTypeModel,
    updateProfSecTypeModel, updateRewardAmountUnitModel,
  } = actions;

  const { Option } = Select;
  /**
   * 动态加载FormItem为Select的下拉项(Options)
   * @param item
   */
  const loadFormItemSelectData = (item) => {
    if (item.selectType in selectRefData) {
      return selectRefData[item.selectType].map(apply);
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
        <Input style={{ width: '80%' }} readOnly={item.editflag === 'N'} />,
      ));
    } else if (item.itemType === 'Select') {
      return (getFieldDecorator(item.itemkey,
        { initialValue: getColumnVal(item), rules })(
          <Select placeholder="请选择" style={{ width: '80%' }} allowClear>
            {loadFormItemSelectData(item)}
          </Select>,
      ));
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
    } else if (item.itemType === 'RefTable') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item) })(
        <Input.Search style={{ width: '80%' }} placeholder="请选择组织" onSearch={onSearch} autoComplete="off" readOnly={item.editflag === 'N'} />,
      ));
    }
  };

  const onSearch = () => {
    console.log('执行onSearch');
    updateCollegeNameModel(true);
  };
  /** --------参照处理begin ---------*/
  const collegeNameRefUrl = 'empMgr/queryCollegeNameList?';
  const professionTypeRefUrl = 'empMgr/queryProfessionTypeList?';
  const professionSecTypeRefUrl = 'empMgr/queryProfessionTypeList?';
  const rewardAmountUnitRefUrl = 'empMgr/queryRewardAmountUnitList?';
  const collegeNameRefColumns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 120,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'left',
    width: 400,
  }];
  const professionTypeRefColumns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 120,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'left',
    width: 400,
  }];
  const professionSecTypeRefColumns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 120,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'left',
    width: 400,
  }];
  const rewardAmountUnitRefColumns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 120,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'left',
    width: 400,
  }];
  const collegeNameRefMapping = [{ code: 'collegeId', refcode: 'collegeId' }, { code: 'collegeName', refcode: 'collegeName' }];
  const professionTypeRefMapping = [{ code: 'professionType', refcode: 'professionType' },
    { code: 'professionTypeName', refcode: 'professionTypeName' }];
  const professionSecTypeRefMapping = [{ code: 'professionSecondType', refcode: 'professionSecondType' },
    { code: 'professionSecondTypeName', refcode: 'professionSecondTypeName' }];
  const rewardAmountUnitRefMapping = [{ code: 'rewardAmountUnit', refcode: 'rewardAmountUnit' },
    { code: 'rewardAmountUnitName', refcode: 'rewardAmountUnitName' }];
  /**
   *  点击参照时触发
    * @param item
   */
  // const onRefClick = (itemKey) => {
  //   // debugger;
  //   if (itemKey === 'collegeName') {
  //     updateCollegeNameModel(true);
  //   } else if (itemKey === 'professionType') {
  //     updateProfTypeModel(true);
  //   } else if (itemKey === 'professionSecondType') {
  //     updateProfSecTypeModel(true);
  //   } else if (itemKey === 'rewardAmountUnit') {
  //     updateRewardAmountUnitModel(true);
  //   }
  // };
  /** --------参照处理end ---------*/
  /**
   * 根据ItemKey取值
   * @param itemKey
   * @returns {string}
   */
  const getColumnVal = (item) => {
    let ret = '';
    if (item.itemkey in subInfoData) {
      ret = subInfoData[item.itemkey];
    }
    return ret;
  };

  /**
   *  供直接显示用
   * @param item
   * @returns {string}
   */
  const getColumnValName = (item) => {
    let ret = '';
    const specificFields = ['CNC_JRZTJ', 'CUC_JRTJ', 'CUC_JRZTJ', 'CUC_JRTJSM'];
    if (item.itemkey in subInfoData) {
      if (item.itemType === 'Select') {
        if (specificFields.indexOf(item.itemkey) >= 0) {
          ret = subInfoData[item.itemkey];
        } else {
          ret = subInfoData[(`${item.itemkey}Name`)];
        }
      } else {
        ret = subInfoData[item.itemkey];
      }
    }
    // 对加入途径相关字段单独处理

    return ret;
  };


  const buildBasicInfoEditForm = () => {
    const formAry = [];
    if (templateData && templateData.length > 0) {
      for (let i = 0; i < templateData.length; i += 1) {
        const item = templateData[i];
        formAry.push(
          <tr key={(i + 10)} style={{ display: item.showFlag === 'Y' ? '' : 'none' }}>
            <td>&nbsp;&nbsp;<b>{item.showName}:</b></td>
            <td style={{ paddingLeft: '20px' }}>
              {getColumnValName(item)}
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
    debugger;
    return formAry;
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
            {buildBasicInfoEditForm()}

          </tbody>
        </table>
      </Form>
      <SearchTable
        refModal={collegeNameModel}
        setRefModeShow={updateCollegeNameModel}
        parentForm={form}
        refUrl={collegeNameRefUrl}
        columns={collegeNameRefColumns}
        placeholder="请输或选择入学校或学院名称"
        refCodes={collegeNameRefMapping}
      />
      <SearchTable
        refModal={profTypeModel}
        setRefModeShow={updateProfTypeModel}
        parentForm={form}
        refUrl={professionTypeRefUrl}
        columns={professionTypeRefColumns}
        placeholder="请选择第一专业类别"
        refCodes={professionTypeRefMapping}
      />
      <SearchTable
        refModal={profSecTypeModel}
        setRefModeShow={updateProfSecTypeModel}
        parentForm={form}
        refUrl={professionSecTypeRefUrl}
        columns={professionSecTypeRefColumns}
        placeholder="请选择第二专业类别"
        refCodes={professionSecTypeRefMapping}
      />
      <SearchTable
        refModal={rewardAmountUnitModel}
        setRefModeShow={updateRewardAmountUnitModel}
        parentForm={form}
        refUrl={rewardAmountUnitRefUrl}
        columns={rewardAmountUnitRefColumns}
        placeholder="请输入学校或学院名称"
        refCodes={rewardAmountUnitRefMapping}
      />
    </React.Fragment>
  );
};
