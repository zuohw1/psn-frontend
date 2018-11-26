/* eslint-disable */

export default {

  namespace: 'psnTranspro', // 命名空间

  state: {
    jobNumberModal: false,
    PsnanizeModal: false,
    jobNumberUrl: 'psnHeaderBatch/all',
    PsnanizeUrl: 'psnHeaderBatch/all',
    code: '',
    search: {
      pageNumber: 1,
      pageSize: 10,
    },
    refData: [],
    val: undefined,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/psn/psntranspro') {
          dispatch({
            type: 'fetch',
            payload: {},
          });
        }
      });
    },
  },

  effects: {
    *getJobNumber({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          jobNumberModal: true,
        },
      });
    },
    *closeJobNumber({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          jobNumberModal: false,
        },
      });
    },
    *getPsnanize({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          PsnanizeModal: true,
        },
      });
    },
    *closePsnanize({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          PsnanizeModal: false,
        },
      });
    },
  },

  reducers: {
    stateUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

};
