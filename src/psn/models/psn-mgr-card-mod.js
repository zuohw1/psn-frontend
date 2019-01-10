import PsnMgrCardService from '../services/psn-mgr-card-service';

/* 格式化添加修改数据 */
const formatRecord = (record) => {
  const format = {
    ...record,
    dateOfBirth: record.dateOfBirth === undefined ? null : record.dateOfBirth.format('YYYY-MM-DD'),
    planOfRetirementDate: record.planOfRetirementDate === undefined ? null : record.planOfRetirementDate.format('YYYY-MM-DD'),
    initialJobStartDate: record.initialJobStartDate === undefined ? null : record.initialJobStartDate.format('YYYY-MM-DD'),
    workingAgesStartDate: record.workingAgesStartDate === undefined ? null : record.workingAgesStartDate.format('YYYY-MM-DD'),
    joinOfficeDate: record.joinOfficeDate === undefined ? null : record.joinOfficeDate.format('YYYY-MM-DD'),
    addStaffDate: record.addStaffDate === undefined ? null : record.addStaffDate.format('YYYY-MM-DD'),
    joinCucDate: record.joinCucDate === undefined ? null : record.joinCucDate.format('YYYY-MM-DD'),
  };
  return format;
};

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
    templateData: [], // 单据模板数据
    editEmpBasicDetail: {}, // 待编辑的基本信息
    selectRefData: {}, // 档案数据 {key1:[{},{}],key2:[{},{}]}
    empBasicUptState: 'CORRECTION', // 基本信息修改状态，区分是更新还是更正
    jRTJRefData: {}, // eg:
    // {"CUC_JRTJ":["社会招聘","劳务派遣"],"CUC_JRZTJ":
    // {"社会招聘":["紧密型业务外包人员转化","劳务派遣转化",
    // "社会招聘"],"劳务派遣":["接收应届毕业生","型业务外包转劳务派遣","通过劳务派遣公司招用"]},
    // "CUC_JRTJSM":{"社会招聘":["无","从其他运营商流入"],"劳务派遣":["无"]}}
    jRZTJRefData: [],
    jRTJSMRefData: [],
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
    * queryPsnBasicDetail({ payload: { personId } }, { call, put }) {
      if (personId && personId !== '') {
        const detailData1 = yield call(PsnMgrCardService.getPsnBasicDetail, personId);
        console.log(detailData1);
        yield put({
          type: 'stateWillUpdate',
          payload: { editEmpBasicDetail: detailData1 },
        });
      } else {
        yield put({
          type: 'stateWillUpdate',
          payload: { editEmpBasicDetail: {} },
        });
      }
    },
    * queryRefSelectDataByBillType({ payload: { billTypeCode } }, { call, put }) {
      if (billTypeCode && billTypeCode !== '') {
        const refDataS = yield call(PsnMgrCardService.getRefSelectDataByBillType, billTypeCode);
        yield put({
          type: 'stateWillUpdate',
          payload: { selectRefData: refDataS },
        });
      }
    },
    * queryJRTJRefData({ payload: { r } }, { call, put }) {
      const refDataS = yield call(PsnMgrCardService.queryJRTJRefData, r);
      yield put({
        type: 'stateWillUpdate',
        payload: { jRTJRefData: refDataS },
      });
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
    * queryBillTemplateDataByCode({ payload: { billTypeCode } }, { call, put }) {
      const templateData = yield call(PsnMgrCardService.queryBillTemplateDataByCode, billTypeCode);
      yield put({
        type: 'stateWillUpdate',
        payload: { templateData },
      });
    },
    * updateBasicInfo({ payload: { formData } }, { call, put }) {
      yield call(PsnMgrCardService.update, formatRecord(formData));
      yield put({
        type: 'stateWillUpdate',
        payload: { editEmpBasicDetail: formData },
      });
    },
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
