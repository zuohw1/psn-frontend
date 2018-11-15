import MenuService from '../services';

export default {
  namespace: 'layout',
  state: {
    collapsed: false,
    /* 左侧菜单数据 */
    menus: [
      {
        id: 3,
        menuName: '人员管理',
        url: null,
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
      return history.listen(({ pathname }) => {
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
