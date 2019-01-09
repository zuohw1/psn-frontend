/* 设置是否显示导入弹框 */
export function setImpModalVisiable(impModalVisiable) {
  return {
    type: 'staffEntry/stateWillUpdate',
    payload: {
      impModalVisiable,
    },
  };
}
/* 设置列表数据 */
export function setTableData(tableData) {
  return {
    type: 'staffEntry/stateWillUpdate',
    payload: {
      tableData,
    },
  };
}
