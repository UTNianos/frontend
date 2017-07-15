import React from 'react';
import Styles from './Subject.scss';
import cssModules from 'react-css-modules';
import { Popover, Card, Menu, Dropdown } from 'antd';
import SubjectBadge from './SubjectBadge';
import PopoverContent from './Popover';

const subjectValues = [
	{"number": 1, "name": "Pendiente"},
	{"number": 2, "name": "Cursando"},
	{"number": 3, "name": "Firmada"},
	{"number": 4, "name": "Aprobada"}
];

function updateMateria(e, id, updateFn){

   const actualKey = parseInt(e.key)+1;
   const currentStatus = subjectValues.filter(s => s.number == actualKey)[0];
   const value = currentStatus.number;

   const materiaStatus = {"id": id, "status": value};
   updateFn(materiaStatus);
}

const Subject = ({id, name, status, cursada, final, updateEstado}) => {

  const currentStatus = subjectValues.filter(s => s.number == status);
  const statusName = currentStatus[0].name;
  const subjectClass = "Subject " + statusName;
  
  const menu = (
	<Menu onClick={(e) => updateMateria(e, id, updateEstado)}>
	  {subjectValues.map((sValue, i) =>
	   <Menu.Item key={i} >
          {sValue.name}
	   </Menu.Item>
	   )}
	</Menu>
  );

  if(cursada) {
	  return (
	  <div styleName={subjectClass}>
		<Card styleName="SubjectCard">
		  <strong styleName="SubjectName">{name}</strong>
		  <Dropdown.Button overlay={menu} style={{'display': 'inline', 'marginLeft': '4px'}}>
		   {statusName}
		  </Dropdown.Button>
		</ Card>
	  </div>
    );
  }

  if(!cursada) {
	 return (
	 <div styleName="Subject Disabled">
	    <Popover content={PopoverContent} title={name} trigger="hover">
		  <Card styleName="SubjectCard">
		    <strong styleName="SubjectName">{name}</strong>
		    <Dropdown.Button  
			       disabled 
				   style={{'display': 'inline', 'marginLeft': '4px'}} 
				   overlay={menu}
			>
 			Pendiente
		    </Dropdown.Button>
		  </Card>
		</ Popover>
	 </div>
	 );
  }

}

export default cssModules(Subject, Styles, { allowMultiple: true });
