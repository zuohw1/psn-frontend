export default {
  namespace: 'createProcess',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          employeeNumber: '0233669',
          name: '郭颖 ',
          idNumber: '12010319810304382X',
          org: '天津市分公司客服呼叫中心语音服务中心',
          DutyLevel: '其他从业',
        },
        {
          employeeNumber: '0015547',
          name: '姜莹',
          idNumber: '120101197710064027',
          org: '天津市分公司信息化部计费账务中心',
          DutyLevel: '正式',
        },
        {
          employeeNumber: '0242056',
          name: '牛欣茹',
          idNumber: '120224197703224627',
          org: '宝坻区分公司网络部',
          DutyLevel: '正式',
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
