import { connect } from 'react-redux';
import AccountMenu from './AccountMenu';

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: state.session.notifications,
	  notificationsEnabled: state.config.notificationsEnabled
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const AccountMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountMenu)

export default AccountMenuContainer;
