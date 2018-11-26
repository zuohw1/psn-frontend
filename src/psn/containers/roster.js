import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';

import Index from '../components/psnroster/index';
import * as actions from '../actions/roster-action';

const mapStateToProps = state => ({
  ...state.psnRoster,
  loading: state.loading.models.psnRoster,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
