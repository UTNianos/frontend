import React from 'react';
import { Badge } from 'antd'; 

const badgeStyle = {marginLeft: '4px'};

const SubjectBadge = ({name, status}) => {
	
   return(
   <span>
	 {name}   
	 <span style={badgeStyle}>
		<Badge status={status} />   
	 </span>
   </span>   
   );	
}

export default SubjectBadge;