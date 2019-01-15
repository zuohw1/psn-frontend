export function setModeShow(modal) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      modal,
    },
  };
}
export function isAlertShow(showAlert) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      showAlert,
    },
  };
}
export function updateLeftCardTree(leftCardTree) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      leftCardTree,
    },
  };
}
export function setPrimaryBusinessData(primaryBusinessData) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      primaryBusinessData,
    },
  };
}
export function isAddprofModalShow(addProfModal) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      addProfModal,
    },
  };
}
export function setQuery(addProfQuery) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      addProfQuery,
    },
  };
}
export function setVisible(isVisible) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      isVisible,
    },
  };
}
export function listTable(loginName, respId, rangeId, currentPageNum, recordNum) {
  return {
    type: 'batchSetup/listTable',
    payload: {
      loginName, respId, rangeId, currentPageNum, recordNum,
    },
  };
}
export function deleteSortList(sort) {
  return {
    type: 'batchSetup/deleteSortList',
    payload: {
      sort,
    },
  };
}
export function closeInsDrawer() {
  return {
    type: 'batchSetup/closeInsDrawer',
    payload: {
    },
  };
}
