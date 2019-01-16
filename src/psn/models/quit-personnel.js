import quitPersonnelService from '../services/quit-personnel';

/* 格式化table数据 */
const formatTableData = (tableData, currentPageNum, recordNum) => {
  // console.log('格式化table数据', tableData);
  const num = currentPageNum * recordNum - recordNum;
  const table = tableData.pageInfo.map((item, index) => {
    const ite = { ...item, key: index + 1 + num };
    return ite;
  });
  const formatTable = {
    ...tableData,
    records: table,
    total: tableData.num,
    size: recordNum,
    current: currentPageNum,
  };
  return formatTable;
};

export default {
  namespace: 'quitPersonnel', // 命名空间
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 0,
      records: [],
      pages: 0,
      /* 查询条件数据 */
      search: {
      },
    },
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    /* 列表查询 */
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(quitPersonnelService.list, search);
      console.log('tableData:', tableData);
      let formatTable = [];
      setTimeout(
        formatTable = formatTableData(tableData, search.currentPageNum, search.recordNum),
        1000,
      );
      yield put({
        type: 'stateWillUpdate',
        payload: {
          tableData: formatTable,
          record: {},
        },
      });
    },
  },
  subscriptions: {
  },
};
