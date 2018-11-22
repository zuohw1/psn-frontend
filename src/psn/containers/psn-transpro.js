import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';
import Index from '../components/psntranspro/index';
import * as actions from '../actions/psn-transpro';

const mapStateToProps = state => ({
  ...state.psnTranspro,
  loading: state.loading.models.psnTranspro,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
