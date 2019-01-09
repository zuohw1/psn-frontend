export function isModeShow(modal, formEdit) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      modal, formEdit,
    },
  };
}

export function isQuerySetModeShow(querySettingModel) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      querySettingModel,
    },
  };
}

export function isAdvancedQueryModelShow(selectConditionModel) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      selectConditionModel,
    },
  };
}

export function isPsnCardModelShow(psnCardModel) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      psnCardModel,
    },
  };
}

export function updateOrgRefModelShow(refModal) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      refModal,
    },
  };
}

export function updateSelectedConditions(selectedConditions) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      selectedConditions,
    },
  };
}

export function setCurrentCheckedValues(currentCheckedValues) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      currentCheckedValues,
    },
  };
}

export function updateDynamicTableCols(newDynamicTableCols) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      dynamicTableCols: newDynamicTableCols,
    },
  };
}
export function updateQuerySetItems(allDisplayItems) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      allDisplayItems,
    },
  };
}
// 记录上一次生效的显示字段
export function updateLastSetQueryItems(newSetQueryItems) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      lastSetQueryItems: newSetQueryItems,
    },
  };
}

// export function isRefModeShow(refModal) {
//   return {
//     type: 'psnRoster/stateWillUpdate',
//     payload: {
//       refModal,
//     },
//   };
// }

export function getRecord(record) {
  return {
    type: 'psnRoster/getRecord',
    payload: {
      record,
    },
  };
}

export function selectName(search) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      search,
    },
  };
}

export function listTable(search) {
  return {
    type: 'psnRoster/fetch',
    payload: {
      search,
    },
  };
}

export function queryDetailDataByPersonId(detailSearch) {
  return {
    type: 'psnRoster/queryDetailData',
    payload: {
      detailSearch,
    },
  };
}

// export function updateRecord(record) {
//   if (record.BATCH_HEADER_ID && record.BATCH_HEADER_ID !== '') {
//     return {
//       type: 'psnRoster/updateRecord',
//       payload: {
//         record,
//       },
//     };
//   } else {
//     return {
//       type: 'psnRoster/newRecord',
//       payload: {
//         record,
//       },
//     };
//   }
// }

// export function newRecord(record) {
//   return {
//     type: 'psnRoster/newRecord',
//     payload: {
//       record,
//     },
//   };
// }

// export function deleteRecord(record) {
//   return {
//     type: 'psnRoster/deleteRecord',
//     payload: {
//       record,
//     },
//   };
// }

export function setToggle(expand) {
  return {
    type: 'psnRoster/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
