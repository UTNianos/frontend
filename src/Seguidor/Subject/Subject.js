import React from 'react';
import { Popover, Card } from 'antd';
import PopoverContent from '../Pendientes/Container';
import StatusDropdown from './StatusDropdown';
import './Subject.css';

const Subject = ({ subject, updateEstado }) => {

  if (subject.cursada) {
    return (
      <div className="Subject">
        <Card className="SubjectCard">
          <p className="SubjectNameContainer">
            <strong className="SubjectName">{subject.name}</strong>
          </p>
          <StatusDropdown
            updateFn={updateEstado}
            materiaId={subject.id}
            status={subject.status}
          />
        </Card>
      </div>
    );
  }

  return (
    <div className="Subject Disabled">
      <Popover
        content={<PopoverContent pendientes={subject.pendientes} />}
        title={subject.name}
        trigger="hover"
      >
        <Card className="SubjectCard">

          <p className="Unselectable">
            <strong className="SubjectName">
              {subject.name}
            </strong>
          </p>

          <p className="Unselectable">
        No se cumplen las coorrelativas para que curses esta materia.
          </p>

        </Card>
      </Popover>
    </div>
  );

}

export default Subject;
