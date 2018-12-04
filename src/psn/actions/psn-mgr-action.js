export function isModeShow(modal, formEdit) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      modal, formEdit,
    },
  };
}

export function isQuerySetModeShow(querySettingModel) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      querySettingModel,
    },
  };
}

export function isPsnCardModelShow(psnCardModel) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      psnCardModel,
    },
  };
}

export function updateOrgRefModelShow(refModal) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      refModal,
    },
  };
}

export function updateDynamicTableCols(newDynamicTableCols) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      dynamicTableCols: newDynamicTableCols,
    },
  };
}
export function updateQuerySetItems(allDisplayItems) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      allDisplayItems,
    },
  };
}
// 记录上一次生效的显示字段
export function updateLastSetQueryItems(newSetQueryItems) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      lastSetQueryItems: newSetQueryItems,
    },
  };
}

export function getBasicDetailData(record) {
  return {
    type: 'psnMgr/getBasicDetailData',
    payload: {
      record,
    },
  };
}

export function selectName(search) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      search,
    },
  };
}

export function listTable(search) {
  return {
    type: 'psnMgr/fetch',
    payload: {
      search,
    },
  };
}

export function queryDetailDataByPersonId(detailSearch) {
  return {
    type: 'psnMgr/queryDetailData',
    payload: {
      detailSearch,
    },
  };
}

export function setToggle(expand) {
  return {
    type: 'psnMgr/stateWillUpdate',
    payload: {
      expand,
    },
  };
}

/* 跳转页面 */
export function redirectDetail(pathname, state) {
  return {
    type: 'psnMgr/redirect',
    payload: {
      pathname, state,
    },
  };
}
