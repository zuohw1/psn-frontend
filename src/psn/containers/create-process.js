import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';
import Index from '../components/createprocess/index';
import * as actions from '../actions/create-process';

/* 建立组件跟 store 的 state 的映射关系 */
const mapStateToProps = state => ({
  ...state.createProcess,
  loading: state.loading.models.createProcess,
});

/* 界面有from时初始化 */
const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  /* 直接将action包装成可以被调用的函数 */
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
