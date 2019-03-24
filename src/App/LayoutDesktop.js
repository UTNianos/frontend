import React from 'react';
import Navbar from '../Navbar/Container';
import { Layout, Affix } from 'antd';
import './App.css';

const {Content, Header } = Layout;

const headerStyle = {
  width: '100%',
  height: '100%',
  background: '#fff',
  borderBottom: '1px solid gainsboro',
  padding: '0px'
};

const contentStyle = {
  padding: '50px',
};

const LayoutDesktop = ({children}) => {

  return (
  <Layout>

	  <Header style={headerStyle}>
      <Affix>
	     <Navbar mobile={false} />
      </Affix>
	  </Header>

	  <Content style={contentStyle}>
	    {children}
	  </Content>

  </Layout>
  );

}

export default LayoutDesktop;
