import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => ({
  userLoggedIn: false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;
