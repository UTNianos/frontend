import React, { PropTypes } from 'react'

const Navbar = () => {
  
  return (  
	<ul>
	  <li><a className="active" href="#">UTNianos</a></li>
	</ul>
  )
}

Navbar.propTypes = {
  /*active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired*/
}

export default Navbar