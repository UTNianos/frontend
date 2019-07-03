import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HomeLink from './HomeLink';
import './Navbar.css';

const Navbar = () => {

  const [setDrawerVisible] = useState(false);

  return (
    <div className="navbar-container">
      <Row gutter={4}>
        <Col className="gutter-row" span={16}>
          <HomeLink />
        </Col>
        <Col className="gutter-row" span={4} />
        <Col className="gutter-row" span={4}>
          <span
            onClick={() => setDrawerVisible(true)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              color="gainsboro"
            />
          </span>
        </Col>
      </Row>
    </div>
  );

}

export default Navbar;
