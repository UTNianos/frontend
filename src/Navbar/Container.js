import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    userLoggedIn: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default NavbarContainer;
