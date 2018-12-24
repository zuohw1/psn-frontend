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
          employee: '071719',
          name: '刘宾',
          idNumber: '120111198001254511',
          organization: '有限公司-审计部',
          post: '',
        },
        {
          employee: '0201119',
          name: '李金龙',
          idNumber: '652901197501136513',
          organization: '阿克苏地区分公司市场经营部',
          post: '技术业务序列..市场营销主管.',
        }, {
          employee: '0008248',
          name: '闫海涛',
          idNumber: '110222197803086415',
          organization: '有限公司-审计部 ',
          post: '',
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
