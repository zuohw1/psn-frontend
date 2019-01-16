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
export function changeSortList(sort) {
  return {
    type: 'batchSetup/changeSortList',
    payload: {
      sort,
    },
  };
}
export function setAddPeople(addPeople) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      addPeople,
    },
  };
}
/* 获取选中记录 */
export function getRecord(record) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      record,
    },
  };
}
/* 更新列表数据 */
export function updateTable(dataRecord) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      dataRecord,
    },
  };
}
export function updateFirst(treeData) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      treeData,
    },
  };
}
export function updateSecond(respRange) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      respRange,
    },
  };
}
