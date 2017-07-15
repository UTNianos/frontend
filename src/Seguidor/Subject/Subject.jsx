import React from 'react';
import cssModules from 'react-css-modules';
import { Popover, Card, Menu, Dropdown } from 'antd';
import PopoverContent from './Popover';
import StatusDropdown from './StatusDropdown';
import Styles from './Subject.scss';

const Subject = ({id, name, status, cursada, final, updateEstado}) => {
        
  if(cursada) {
	  return (
	  <div styleName="Subject">
		<Card styleName="SubjectCard">
		  <p styleName="SubjectNameContainer">
			<strong styleName="SubjectName">{name}</strong>
		  </p>
		  <StatusDropdown 
			updateFn={updateEstado} 
			materiaId={id} 
			status={status}
		  />
		</ Card>
	  </div>
    );  
  }
  
  if(!cursada) {
    return (
    <div styleName="Subject Disabled">
        <Popover content={PopoverContent} title={name} trigger="hover">
		  <Card styleName="SubjectCard">
		    <strong styleName="SubjectName">
			  {name}
			</strong>
			<p>
			  No se cumplen las coorrelativas para que curses esta materia.
			</p>
		  </Card>
		</ Popover>
	</div>
	);
  }
 
}

export default cssModules(Subject, Styles, { allowMultiple: true });
