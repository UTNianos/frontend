import React, { PropTypes } from 'react'

const Navbar = () => {
  
  return (  
	<ul>
	  <li><a className="active" href="#home">UTNianos</a></li>
	  <li><a href="#news">News</a></li>
	  <li><a href="#contact">Contact</a></li>
	  <li><a href="#about">About</a></li>
	</ul>
  )
}

Navbar.propTypes = {
  /*active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired*/
}

export default Navbar