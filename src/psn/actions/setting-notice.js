/* 设置卡片界面是否显示，是否可编辑 */
export function setModeShow(modal, formEdit) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      modal, formEdit,
    },
  };
}

/* 设置参照界面是否显示 */
export function setRefModeShow(refModal) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      refModal,
    },
  };
}

/* 设置参照列表选中数据 */
export function setRefSelectData(refSelectData, refModal) {
  if (refSelectData === null) {
    return {
      type: 'psnSetting/stateWillUpdate',
      payload: {
        refSelectData: {}, refModal,
      },
    };
  } else {
    return {
      type: 'psnSetting/stateWillUpdate',
      payload: {
        refModal, record: refSelectData,
      },
    };
  }
}

/* 获取列表选中数据 */
export function getRecord(record, modal, formEdit) {
  return {
    type: 'psnSettingRecord',
    payload: {
      record, modal, formEdit,
    },
  };
}

/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'psnSetting/fetch',
    payload: {
      search,
    },
  };
}

/* 更新数据 */
export function updateRecord(record) {
  const id = record.BATCH_HEADER_ID;
  if (id && id !== '') {
    return {
      type: 'psnSetting/updateRecord',
      payload: {
        record,
      },
    };
  } else {
    return {
      type: 'psnSetting/newRecord',
      payload: {
        record,
      },
    };
  }
}

/* 删除数据 */
export function deleteRecord(record) {
  return {
    type: 'psnSetting/deleteRecord',
    payload: {
      record,
    },
  };
}

/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
/* 设置是否展开查询 */
export function setTableDataNew(tableData) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      tableData,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceAll(dataSourceAll) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      dataSourceAll,
    },
  };
}

/* 更新列表数据记录数 */
export function setListCountAll(countAll) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      countAll,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceOffice(dataSourceOffice) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      dataSourceOffice,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountOffice(countOffice) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      countOffice,
    },
  };
}
/* 更新列表数据 */
export function setListComprehensive(comprehensive) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      comprehensive,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountComprehensive(countComprehensive) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      countComprehensive,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceFinance(dataSourceFinance) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      dataSourceFinance,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountFinance(countFinance) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      countFinance,
    },
  };
}
export function getJobNumber() {
  return {
    type: 'psnSetting/getJobNumber',
    payload: {
    },
  };
}
export function closeJobNumber() {
  return {
    type: 'psnSetting/closeJobNumber',
    payload: {
    },
  };
}
export function getPsnanize() {
  return {
    type: 'psnSetting/getPsnanize',
    payload: {
    },
  };
}
export function closePsnanize() {
  return {
    type: 'psnSetting/closePsnanize',
    payload: {},
  };
}

/* 设置是否展开查询 */
export function setAddPeople(addPeople) {
  return {
    type: 'psnSetting/stateWillUpdate',
    payload: {
      addPeople,
    },
  };
}
/* 跳转页面 */

export function redirectDetail(pathname, state) {
  return {
    type: 'psnSetting/redirect',
    payload: {
      pathname, state,
    },
  };
}
export function setTableData(tableData) {
  return {
    type: 'staffEntry/stateWillUpdate',
    payload: {
      tableData,
    },
  };
}
