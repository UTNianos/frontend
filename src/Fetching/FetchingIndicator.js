import React from 'react';
import { Spin, Alert } from 'antd';

const indicatorStyles = {
  marginLeft: '0%',
  marginTop: '10%'
};

const FetchingIndicator = () => {	
  return(
	<div style={indicatorStyles}>
	   <Spin tip="Cargando...">
       <Alert
          message="Cargando"
          description="Por favor espere..."
          type="info"
       />
       </Spin>
	</div>
  );	
}

export default FetchingIndicator;