import PostInstructionsService from '../services/batch-setup';

// noinspection JSAnnotator
export default {
  namespace: 'batchSetup',
  state: {
    /* 选中记录 */
    record: [],
    /* 列表数据 */
    dataRecord: [
      {
        key: '1',
        number: '1',
        notice: '信息化接口人',
        mailbox: 'yn@qq,com',
        Code: '0001092',
        name: '尹楠',
        organization: '联通系统集成有限公司-客户服务与支撑部',
        system: '',
        handle: '',
        Range: '中国联通总部管理部门[包含下属]',
      },
      {
        key: '2',
        number: '2',
        notice: '信息化接口人',
        mailbox: 'jys@qq,com',
        Code: '0094077',
        name: '姜银山',
        organization: '周口市分公司人力资源部',
        system: '信息化接口人',
        handle: '',
        Range: '周口市分公司[包含下属]',
      },
      {
        key: '3',
        number: '3',
        notice: '部门综合处 ',
        mailbox: 'lf@qq,com',
        Code: '0003889',
        name: '刘芳',
        organization: '中国联通总部-信息化事业部-综合管理处',
        system: '',
        handle: '',
        Range: '中国联通总部-信息化事业部[包含下属]',
      },
      {
        key: '4',
        number: '4',
        notice: '部门综合处',
        mailbox: 'zxp@qq,com',
        Code: '0000048',
        name: '张旭平',
        organization: '中国联通总部-企业发展部-企业管理处',
        system: '部门综合处',
        handle: '',
        Range: '中国联通总部-企业发展部[包含下属]',
      },
      {
        key: '5',
        number: '5',
        notice: '部门综合处',
        mailbox: 'zj@qq,com',
        Code: '0852308',
        name: '朱隽',
        organization: '联通云数据辽宁分公司-综合财务部',
        system: '',
        handle: '',
        Range: '中国联通总部管理部门[包含下属]',
      },
    ],
    pages: 0,
  },
  modal: false,
  visibleDrawer: false,
  sortList: [],

  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *listTable({
      payload: {
        loginName, respId, rangeId, currentPageNum, recordNum,
      },
    }, { call, put }) { // 初始化数据 主列表数据 树选择数据
      const result = yield call(PostInstructionsService.list,
        loginName, respId, rangeId, currentPageNum, recordNum);
      console.log(result);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          records: result.dutyList,
          total: result.count,
          treeSelectData: result.tree,
          duty: result.duty,
        },
      });
    },
    *deleteSortList({ payload: { sort } }, { call, put }) { // 主页面删除
      if (sort.length > 0) {
        const data0 = yield call(PostInstructionsService.delete, sort);
        console.log(data0);
        yield put({
          type: 'stateWillUpdate',
          payload: {
            sortList: [],
          },
        });
      }
    },
    *closeInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleDrawer: false,
        },
      });
    },
    *changeSortList({ payload: { sort } }, { put }) {
      console.log(sort);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          sortList: sort,
        },
      });
    },
  },
  subscriptions: {
  },
};
