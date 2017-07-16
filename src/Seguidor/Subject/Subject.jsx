import React from 'react';
import cssModules from 'react-css-modules';
import { Popover, Card, Menu, Dropdown } from 'antd';
import PopoverContent from '../Pendientes/Container';
import StatusDropdown from './StatusDropdown';
import Styles from './Subject.scss';

/*
      id={subject.id}
      name={subject.name}
      status={subject.status}
      cursada={subject.cursada}
      final={subject.final}
*/

const Subject = ({subject, updateEstado}) => {
      
  if(subject.cursada) {
	  return (
	  <div styleName="Subject">
		<Card styleName="SubjectCard">
		  <p styleName="SubjectNameContainer">
			<strong styleName="SubjectName">{subject.name}</strong>
		  </p>
		  <StatusDropdown 
			updateFn={updateEstado} 
			materiaId={subject.id} 
			status={subject.status}
		  />
		</ Card>
	  </div>
    );  
  }
  
  if(!subject.cursada) {
    return (
    <div styleName="Subject Disabled">
        <Popover 
		    content={<PopoverContent pendientes={subject.pendientes} />} 
			title={subject.name} 
			trigger="hover"
		>
		  <Card styleName="SubjectCard">
		    <strong styleName="SubjectName">
			  {subject.name}
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
