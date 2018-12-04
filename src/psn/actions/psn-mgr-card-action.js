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

export function isPsnCardModelShow(psnCardModel) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      psnCardModel,
    },
  };
}

export function updateOrgRefModelShow(refModal) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      refModal,
    },
  };
}

export function updateDynamicTableCols(newDynamicTableCols) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      dynamicTableCols: newDynamicTableCols,
    },
  };
}
export function updateQuerySetItems(allDisplayItems) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      allDisplayItems,
    },
  };
}
// 记录上一次生效的显示字段
export function updateLastSetQueryItems(newSetQueryItems) {
  return {
    type: 'psnMgrCard/stateWillUpdate',
    payload: {
      lastSetQueryItems: newSetQueryItems,
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
