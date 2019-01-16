/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'quitPersonnel/fetch',
    payload: {
      search,
    },
  };
}
