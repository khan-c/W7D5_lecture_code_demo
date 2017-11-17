import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(
  mapDispatchToProps,
  mapDispatchToProps
)(Login);
