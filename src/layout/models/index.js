import MenuService from '../services';

export default {
  namespace: 'layout',
  state: {
    collapsed: false,
    menus: [
      {
        id: 3,
        menuName: '人员管理',
        url: null,
        pid: 0,
        iconUrl: 'tag-o',
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
      try {
        const menu = yield call(MenuService.getList, payload);
        console.log(menu);
        yield put({
          type: 'willUpdateState',
          payload: {
            menus: menu,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname && pathname === '/') {
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
