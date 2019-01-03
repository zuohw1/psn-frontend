export default {
  namespace: 'contractManage',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          employeeNumber: '0016525',
          name: '李大福',
          idNumber: '120224196202260019',
          org: '宝坻区分公司办公室',
          DutyLevel: '支撑序列...主办',
        },
        {
          employeeNumber: '0016588',
          name: '张怀宇',
          idNumber: '120224197103070011',
          org: '宝坻区分公司办公室 ',
          DutyLevel: '支撑序列...助理 ',
        },
        {
          employeeNumber: '0016711',
          name: '王瑞武',
          idNumber: '120101197405241517',
          org: '宝坻区分公司办公室 ',
          DutyLevel: '支撑序列... ',
        },
      ],
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
