import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';

import Index from '../components/psnmgrcard/index';
import * as actions from '../actions/psn-mgr-card-action';

const mapStateToProps = state => ({
  ...state.psnMgrCard,
  loading: state.loading.models.psnMgrCard,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
