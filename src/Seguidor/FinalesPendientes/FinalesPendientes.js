import React from 'react';
import { List } from 'antd';
import './FinalesPendientes.css';

const FinalesPendientes = ({ materias, updateEstado }) => {

  const pendientesDeFinal = materias.filter(m => m.final === true && m.status === 3);

  return (
    <div className="PendientesList">

      <List
        itemLayout="horizontal"
        dataSource={pendientesDeFinal}
        renderItem={item => (
          <List.Item actions={[
            <a
              role="button"
              tabIndex={0}
              onClick={() => updateEstado({ id: item.id, status: '4' })}
              onKeyPress={() => {}}
            >
              Aprobada
            </a>
          ]}
          >
            <List.Item.Meta title={<a href="http://utnianos.com">{item.name}</a>} />
          </List.Item>
         )}
      />
    </div>
  );

}


export default FinalesPendientes;
