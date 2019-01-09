/* 设置参照界面是否显示 */
export function setRefModeShow(refModal) {
  return {
    type: 'psnSettingCard/stateWillUpdate',
    payload: {
      refModal,
    },
  };
}

/* 设置参照列表选中数据 */
export function setRefSelectData(refSelectData, refModal) {
  if (refSelectData === null) {
    return {
      type: 'psnSettingCard/stateWillUpdate',
      payload: {
        refSelectData: {}, refModal,
      },
    };
  } else {
    return {
      type: 'psnSettingCard/setRefSelectData',
      payload: {
        refModal, record: refSelectData,
      },
    };
  }
}

/* 设置表单数据 */
export function setRecord(record) {
  return {
    type: 'psnSettingCard/stateWillUpdate',
    payload: {
      record,
    },
  };
}

/* 更新数据 */
export function updateRecord(record) {
  const id = record.DOC_HEADER_ID;
  if (id && id !== '') {
    return {
      type: 'psnSettingCard/updateRecord',
      payload: {
        record,
      },
    };
  } else {
    return {
      type: 'psnSettingCard/newRecord',
      payload: {
        record,
      },
    };
  }
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
