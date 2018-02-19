import React from 'react';
import { Select } from 'antd';
import './Seguidor.css';

const { Option } = Select;

function filterOption(input, option) {
  return option.props.children.toLowerCase()
    .indexOf(input.toLowerCase()) >= 0;
}

const SeguidorHeading = ({ changeViewType, currentView }) => (
  <div>

    <div className="SeguidorTitle">
      <h1 className="SeguidorHeading">Materias</h1>
    </div>

    <div className="ViewChooser">

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Elegir una vista"
        optionFilterProp="children"
        onChange={value => changeViewType(value)}
        defaultValue={currentView}
        filterOption={(input, option) => filterOption(input, option)}
      >
        <Option value="carousel">Vista alargada</Option>
        <Option value="tree">Vista compacta</Option>
        <Option value="finales">Finales Pendientes</Option>
      </Select>

    </div>

  </div>
)

export default SeguidorHeading;
