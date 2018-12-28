/* 设置列表数据 */
export function setTableData(tableData) {
  return {
    type: 'survivorsInput/stateWillUpdate',
    payload: {
      tableData,
    },
  };
}
