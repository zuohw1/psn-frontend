import { routerRedux } from 'dva/router';

export default {
  namespace: 'psnSetting',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          ATTRIBUTE8: '内部员工调动',
          ATTRIBUTE9: '员工调动 ',
          DOC_VERIFIER: '提交',
          ATTRIBUTE12: ['查看'],
        },
        {
          ATTRIBUTE8: '联通软件研究院入职',
          ATTRIBUTE9: '入职流程',
          DOC_VERIFIER: '提交',
          ATTRIBUTE12: ['查看'],
        },
        {
          ATTRIBUTE8: '离职通知',
          ATTRIBUTE9: '离职流程',
          DOC_VERIFIER: '提交',
          ATTRIBUTE12: ['查看'],

        },
        {
          ATTRIBUTE8: '23333 ',
          ATTRIBUTE9: '跨省兼职借调交流流程',
          DOC_VERIFIER: '提交',
          ATTRIBUTE12: ['查看'],

        },
        {
          ATTRIBUTE8: '12333 ',
          ATTRIBUTE9: '组织变更流程 ',
          DOC_VERIFIER: '提交',
          ATTRIBUTE12: ['查看'],

        },
        {
          ATTRIBUTE8: '省内地市间兼职借调交流',
          ATTRIBUTE9: '跨地市兼职借调交流流程',
          DOC_VERIFIER: '提交',
          ATTRIBUTE12: ['查看'],
        },
      ],
      pages: 0,
    },
    addPeople: [{
      department: '',
      name: '',
      contact: '',
      address: '',
      handle: '',
      Whether: '',
      Remarks: '',
    },
    ],
    /* 卡片是否显示 */
    modal: false,
    /* 参照是否显示 */
    refModal: false,
    /* 参照选中数据 */
    refSelectData: {},
    /* 查询是否展开 */
    expand: false,
    /* 卡片表单是否可编辑 */
    formEdit: true,
    /* 卡片记录 */
    record: {},
    /* 查询条件数据 */
    search: {
      batchCode: '',
      workFlowStatus: '',
      batchVerifier: '',
      fullName: '',
      batDateS: '',
      batDateE: '',
      pageSize: 10,
      pageNumber: 1,
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
    *redirect({ payload: { pathname, state } }, { put }) {
      yield put(routerRedux.push({ pathname, state }));
    },
  },
  subscriptions: {
  },
};
