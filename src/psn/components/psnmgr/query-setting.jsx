/* eslint-disable no-param-reassign */
import React from 'react';
import {
  Tag,
} from 'antd';


export default ({ allDisplayItems, actions }) => {
  const { updateQuerySetItems, isQuerySetModeShow } = actions;
  const { CheckableTag } = Tag;
  // const allQueryItems = [{ itemKey: 'sex', itemName: '性别', checked: true },
  //   { itemKey: 'nation', itemName: '民族', checked: true },
  //   { itemKey: 'politicsLandscapeName', itemName: '政治面貌', checked: true },
  //   { itemKey: 'educationExperience', itemName: '最高学历', checked: false },
  //   { itemKey: 'degree', itemName: '最高学位', checked: false },
  //   { itemKey: 'householdRegisterType', itemName: '户口类型', checked: false },
  //   { itemKey: 'staffCategory', itemName: '员工状态', checked: false },
  //   { itemKey: 'householdRegisterPlace', itemName: '户口所在地', checked: false },
  //   { itemKey: 'joinCucChannel', itemName: '加入本企业途径', checked: false },
  //   { itemKey: 'assignmentCategory', itemName: '分配类别', checked: false },
  //   { itemKey: 'jobName', itemName: '岗位序列', checked: false },
  //   { itemKey: 'qualificationName', itemName: '专业技术资格名称', checked: false },
  //   { itemKey: 'qualificationNameOther', itemName: '其他名称', checked: false },
  //   { itemKey: 'professionComments', itemName: '其他', checked: false },
  //   { itemKey: 'joinCucDate', itemName: '加入本企业日期', checked: false },
  //   { itemKey: 'initialJobStartDate', itemName: '参加工作日期', checked: false },
  //   { itemKey: 'dateOfBirth', itemName: '出生日期', checked: false },
  //   { itemKey: 'nationalIdentifier', itemName: '身份证号', checked: false },
  //   { itemKey: 'gradeName', itemName: '职级薪档', checked: false },
  //   { itemKey: 'peopleGroup', itemName: '人员组', checked: false },
  // ];

  const handleChange = (item, checked) => {
    for (let i = 0; i < allDisplayItems.length; i += 1) {
      if (allDisplayItems[i].key === item.key) {
        allDisplayItems[i].isCheck = checked;
        break;
      }
    }
    updateQuerySetItems(allDisplayItems);
    isQuerySetModeShow(false);
    isQuerySetModeShow(true);
    // updateQuerySetItems
  };

  // const initAllDisplayItems = () => {
  //   for (let j = 0; j < allDisplayItems.length; j += 1) {
  //     for (let i = 0; i < lastSetQueryItems.length; i += 1) {
  //       if (lastSetQueryItems[i] === allDisplayItems[j].key) {
  //         allDisplayItems[j].isCheck = true;
  //       } else {
  //         allDisplayItems[j].isCheck = false;
  //       }
  //     }
  //   }
  //   updateQuerySetItems(allDisplayItems);
  // };

  // 返回所有的显示项目
  // function getAllTags() {
  //   const tags = [];
  //   for (let i = 0; i < allDisplayItems.length; i += 1) {
  //   }
  // }

  return (
    <div>
      {
        allDisplayItems.map(item => (
          <CheckableTag
            style={{ margin: 3 }}
            checked={item.isCheck}
            onChange={checked => handleChange(item, checked)}
            key={item.key}
          > {item.title}
          </CheckableTag>

        ))

      }
    </div>
  );
};
