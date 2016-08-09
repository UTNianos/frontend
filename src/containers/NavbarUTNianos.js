import { connect } from 'react-redux';
import Navbar from '../components/navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    userLoggedIn: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(requestUserStatus(""))
    }
  }
}

const NavbarUTNianos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default NavbarUTNianos;