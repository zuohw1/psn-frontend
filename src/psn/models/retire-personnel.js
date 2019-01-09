export default {
  namespace: 'retirePersonnel',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          employee: '0000560',
          name: '靳训锋',
          idNumber: '130104195708191512',
          organization: '中国联通总部-离退休人员',
          post: '管理序列...总经理',
        },
        {
          employee: '0598870',
          name: '吴卫平',
          idNumber: '652901197501136513',
          organization: '中国联通总部-离退休人员',
          post: '管理序列...经理',
        }, {
          employee: '0184303',
          name: '姜正欣',
          idNumber: '110222197803086415',
          organization: '中国联通总部-离退休人员',
          post: '管理序列...',
        }],
      pages: 0,
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
  },
  subscriptions: {
  },
};
