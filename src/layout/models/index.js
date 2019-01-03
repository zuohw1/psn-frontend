import MenuService from '../services';

export default {
  namespace: 'layout',
  state: {
    collapsed: false,
    headless: false,
    /* 左侧菜单数据 */
    menus: [
      {
        id: 3,
        menuName: '人员管理',
        url: '',
        pid: 0,
        iconUrl: 'tag-o',
      },
      {
        id: 302,
        menuName: '跨省调动',
        url: '/psn/transpro',
        pid: 0,
        iconUrl: 'team',
      },
      {
        id: 301,
        menuName: '全员花名册查询',
        url: '/psn/roster',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 303,
        menuName: '员工离职',
        url: '/psn/staffdimission',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 304,
        menuName: '操作向导及文档下载',
        url: '/psn/documentLoad',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 305,
        menuName: '员工入职',
        url: '/psn/staffEntry',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 306,
        menuName: '离职人员补薪',
        url: '/psn/quitPersonnel',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 307,
        menuName: '调动人员补薪',
        url: '/psn/transferPersonnel',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 308,
        menuName: '退休人员补薪',
        url: '/psn/retirePersonnel',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 309,
        menuName: '遗属人员录入',
        url: '/psn/survivorsInput',
        pid: 3,
        iconUrl: 'sync',
      },
      {
        id: 310,
        menuName: '合同管理',
        url: '/psn/contractManage',
        pid: 3,
        iconUrl: 'sync',
      },
    ],
  },
  reducers: {
    willUpdateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    onCollapse(state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    },
  },
  effects: {
    *getMenuList({ payload }, { call, put }) {
      const menu = yield call(MenuService.getList, payload);
      yield put({
        type: 'willUpdateState',
        payload: {
          menus: menu,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const headless = search.indexOf('headless=true') >= 0;
        dispatch({
          type: 'willUpdateState',
          payload: {
            headless,
          },
        });
        if (pathname && pathname === '/') {
          /* 跳转页面后初始化左侧菜单数据 */
          dispatch({
            type: 'getMenuList',
            payload: {
            },
          });
        }
      });
    },
  },
};
