import React from 'react';
import { List } from 'antd';
import './FinalesPendientes.css';

const FinalesPendientes = ({ materias, updateEstado }) => {

  const pendientesDeFinal = materias.filter(m => m.final === true && m.status === 3);

  if (pendientesDeFinal.length === 0) {
    return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1>
       No existen materias pendientes de final.
      </h1>
      <h3>
       No tenés materias pendientes de final.
       Una vez que termines la cursada de una materia y la marques
       como
        {' '}
        <strong>firmada</strong>
        {' '}
        la misma aparecera en este área.
      </h3>
    </div>
    );
  }

  return (
    <div className="PendientesList">
      <List
        itemLayout="horizontal"
        dataSource={pendientesDeFinal}
        renderItem={item => (
          <List.Item actions={[
            <span
              className="link-button"
              role="button"
              tabIndex={0}
              onClick={() => updateEstado({ id: item.id, status: '4' })}
              onKeyPress={() => {}}
            >
           Aprobada
            </span>
          ]}
          >
            <List.Item.Meta
              title={
              <a href="http://utnianos.com">
                {item.name}
              </a>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );

}


export default FinalesPendientes;
