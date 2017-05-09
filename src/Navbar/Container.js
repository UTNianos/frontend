import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = () => ({ userLoggedIn: false });
const mapDispatchToProps = () => ({});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;
