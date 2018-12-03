import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';

import Index from '../components/psnmgr/index';
import * as actions from '../actions/psn-mgr-action';

const mapStateToProps = state => ({
  ...state.psnMgr,
  loading: state.loading.models.psnMgr,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
