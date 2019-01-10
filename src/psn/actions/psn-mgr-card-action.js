export function isModeShow(modal, formEdit) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      modal, formEdit,
    },
  };
}

export function isQuerySetModeShow(querySettingModel) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      querySettingModel,
    },
  };
}

export function updateJRZTJAndJRTJSMRefData({ jRZTJRefData, jRTJSMRefData }) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      jRZTJRefData,
      jRTJSMRefData,
    },
  };
}

export function updateEmpBasicUptState(empBasicUptState) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      empBasicUptState,
    },
  };
}

export function isPsnCardModelShow(psnCardModel) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      psnCardModel,
    },
  };
}

export function updateBasicInfo(formData) {
  console.log('------------');
  return {
    type: 'psnMgrCard/updateBasicInfo',
    payload: {
      formData,
    },
  };
}

// export function updateOrgRefModelShow(refModal) {
//   return {
//     type: 'psnMgrCard/stateWillUpdate',
//     payload: {
//       refModal,
//     },
//   };
// }
//
// export function updateDynamicTableCols(newDynamicTableCols) {
//   return {
//     type: 'psnMgrCard/stateWillUpdate',
//     payload: {
//       dynamicTableCols: newDynamicTableCols,
//     },
//   };
// }
// export function updateQuerySetItems(allDisplayItems) {
//   return {
//     type: 'psnMgrCard/stateWillUpdate',
//     payload: {
//       allDisplayItems,
//     },
//   };
// }
// // 记录上一次生效的显示字段
// export function updateLastSetQueryItems(newSetQueryItems) {
//   return {
//     type: 'psnMgrCard/stateWillUpdate',
//     payload: {
//       lastSetQueryItems: newSetQueryItems,
//     },
//   };
// }

// 查询单据模板数据
export function queryBillTemplateDataS(billTypeCode) {
  return {
    type: 'psnMgrCard/queryBillTemplateDataByCode',
    payload: {
      billTypeCode,
    },
  };
}

export function getRecord(record) {
  return {
    type: 'psnMgrCard/getRecord',
    payload: {
      record,
    },
  };
}

export function selectName(search) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      search,
    },
  };
}

export function listTable(search) {
  return {
    type: 'psnMgrCard/fetch',
    payload: {
      search,
    },
  };
}

export function queryDetailDataByPersonId(detailSearch) {
  return {
    type: 'psnMgrCard/queryDetailData',
    payload: {
      detailSearch,
    },
  };
}

export function setToggle(expand) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      expand,
    },
  };
}

/**
 * 查询待修改的人员基本信息数据
 * @param personId
 * @returns {{type: string, payload: {personId: *}}}
 */
export function queryPsnEmpBasicDetailByPersonId(personId) {
  return {
    type: 'psnMgrCard/queryPsnBasicDetail',
    payload: {
      personId,
    },
  };
}

/**
 *  查询档案码表数据
 * @param billTypeCode
 * @returns {{type: string, payload: {billtypecode: *}}}
 */
export function querySelectData(billTypeCode) {
  return {
    type: 'psnMgrCard/queryRefSelectDataByBillType',
    payload: {
      billTypeCode,
    },
  };
}

/**
 *  查询加入本企业途径（新）相关码表数据
 * @returns {{type: string, payload: {}}}
 */
export function queryJRTJRefData() {
  return {
    type: 'psnMgrCard/queryJRTJRefData',
    payload: {
    },
  };
}
