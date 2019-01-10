import { routerRedux } from 'dva/router';

export default {
  namespace: 'psnSetting',
  state: {
    count: 0,
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          noticId: '001',
          key: '001',
          notice: '内部员工调动',
          business: '员工调动 ',
          state: '提交',
          ATTRIBUTE12: ['查看'],
        },
        {
          noticId: '002',
          key: '002',
          notice: '联通软件研究院入职',
          business: '入职流程',
          state: '提交',
          ATTRIBUTE12: ['查看'],
        },
        {
          noticId: '003',
          key: '003',
          notice: '离职通知',
          business: '离职流程',
          state: '提交',
          ATTRIBUTE12: ['查看'],

        },
        {
          noticId: '004',
          key: '004',
          notice: '23333 ',
          business: '跨省兼职借调交流流程',
          state: '提交',
          ATTRIBUTE12: ['查看'],

        },
        {
          noticId: '005',
          key: '005',
          notice: '12333 ',
          business: '组织变更流程 ',
          state: '提交',
          ATTRIBUTE12: ['查看'],

        },
        {
          noticId: '006',
          key: '006',
          notice: '省内地市间兼职借调交流',
          business: '跨地市兼职借调交流流程',
          state: '提交',
          ATTRIBUTE12: ['查看'],
        },
      ],
      pages: 0,
    },
    addPeople: [{
      noticId: '001',
      key: '001',
      department: '1',
      name: '2',
      contact: '3',
      address: '7',
      handle: '8',
      Whether: '77',
      Remarks: '99',
      count: 1,
    },
    ],
    /* 卡片是否显示 */
    isNAddViewShow: false,
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
