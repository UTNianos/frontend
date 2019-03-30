import { connect } from 'react-redux';
import AccountMenu from './AccountMenu';

const mapStateToProps = state => ({
  notifications: state.session.notifications,
  notificationsEnabled: state.config.notificationsEnabled
})

const AccountMenuContainer = connect(mapStateToProps, null)(AccountMenu)

export default AccountMenuContainer;
