import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';

import Index from '../components/staffentry/index';
import * as actions from '../actions/staff-entry';

const mapStateToProps = state => ({
  ...state.staffEntry,
  loading: state.loading.models.staffEntry,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
