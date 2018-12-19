export default {
  namespace: 'staffEntry',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: '1',
          psnName: '简凡一',
          sex: '男',
          idNumber: '110101199003078291',
          psnType: '合同制员工',
          psnState: '实业招用的员工',
          deptName: '廊坊市大城县分公司',
          entryDate: '2018-11-01',
          psnFlag: '普通员工',
          operation: ['详细信息', '附件', '上传照片', '删除'],
        },
      ],
      pages: 0,
    },
    /* 导入弹框显示与否 */
    impModalVisiable: false,
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
