import PsnMgrCardService from '../services/psn-mgr-card-service';

/* 格式化添加修改数据 */
// const formatRecord = (record) => {
//   const format = {
//     ...record,
//     DOC_DATE: record.DOC_DATE.format('YYYY-MM-DD'),
//   };
//   return format;
// };

/* 格式化table数据 */
// const formatTableData = (tableData) => {
//   const num = tableData.current * tableData.size - tableData.size;
//   const table = tableData.records.map((item, index) => {
//     const ite = { ...item, key: index + 1 + num };
//     return ite;
//   });
//   const formatTable = { ...tableData, records: table };
//   return formatTable;
// };

export default {
  namespace: 'psnMgrCard', // 命名空间
  state: {
    model: false,
    formEdit: false,
    record: {}, // 列表界面传递的人员基本信息数据
    detailSearch: { // 子集查询条件
      personId: '',
      infoSetType: '',
    },
    psnCardModel: false,
    detailRecord: {}, // 基本信息详情
    infoSetList: [], // 最新的子集信息
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
    // * fetch({ payload: { search } }, { call, put }) {
    //   const tableData = yield call(PsnMgrCardService.list, search);
    //   const formatTable = formatTableData(tableData);
    //   yield put({
    //     type: 'stateWillUpdate',
    //     payload: {
    //       tableData: formatTable,
    //       record: {},
    //       search,
    //     },
    //   });
    // },
    * getBasicDetailData({ payload: { personId, record } }, { call, put }) {
      if (personId && personId !== '') {
        const detailData = yield call(PsnMgrCardService.getBasicDetailData, personId);
        yield put({
          type: 'stateWillUpdate',
          payload: { detailRecord: detailData, record },
        });
      } else {
        yield put({
          type: 'stateWillUpdate',
          payload: { detailRecord: {}, record },
        });
      }
    },
    * queryDetailData({ payload: { detailSearch } }, { call, put }) {
      const detailData = yield call(PsnMgrCardService.getInfoSetDetailData, detailSearch);
      yield put({
        type: 'stateWillUpdate',
        payload: { infoSetList: detailData },
      });
    },
    // * getRefData({ payload: { url, search } }, { call, put }) {
    //   const tableData = yield call(PsnMgrCardService.getRefData, url, search);
    //   const formatTable = formatTableData(tableData);
    //   yield put({
    //     type: 'stateWillUpdate',
    //     payload: {
    //       refData: formatTable,
    //     },
    //   });
    // },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/psn/psnMgrCard') {
          // 从请求中获取人员Id
          if (history.location.state !== undefined
            && history.location.state.personId !== undefined) {
            const { personId } = history.location.state;
            const { record } = history.location.state;
            if (personId) {
              dispatch({
                type: 'getBasicDetailData',
                payload: { personId, record },
              });
            }
          }
        }
      });
    },
  },
};
