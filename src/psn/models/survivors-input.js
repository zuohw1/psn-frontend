export default {
  namespace: 'survivorsInput',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: '1',
          name: '张三',
          sex: '男',
          idNumber: '111111111',
          type: '非员工',
          status: '遗属人员',
          department: '中国联通总部管理部门',
          data: '2018-10-23',
          operation: ['删除', '上传附件'],
        }, {
          key: '2',
          name: '刘兵',
          sex: '男',
          idNumber: '22233333',
          type: '非员工',
          status: '内退遗属',
          department: '省部门',
          data: '2018-11-23',
          operation: ['删除', '上传附件'],
        }, {
          key: '3',
          name: '李金龙',
          sex: '男',
          idNumber: '55555555',
          type: '非员工',
          status: '在职遗属',
          department: '省部门',
          data: '2018-11-23',
          operation: ['删除', '上传附件'],
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
