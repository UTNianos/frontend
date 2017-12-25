import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Row, Col, Icon, Button } from 'antd';
import logo from './logo_utnianos.png';

const imgStyle = {
  marginLeft: '17px',
  marginTop: '9px',
  width: '150px',
  height: '25px'
};

const NavbarMobile = () => (
  <Menu mode="horizontal">
    <Row type="flex" justify="space-between">
      <Col span={4} />
      <Col span={4}>
        <Link to="/">
          <img src={logo} alt="ReactiveBB" style={imgStyle} />
        </Link>
      </Col>
      <Col span={4} />
      <Col span={4} />
      <Col span={4} />
      <Col span={4}>
        <Button>
          <Icon type="bars" />
        </Button>
      </Col>
    </Row>
  </Menu>
)

export default NavbarMobile;
