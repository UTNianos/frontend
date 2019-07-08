import React from 'react';
import { Select } from 'antd';
import './Seguidor.css';

const { Option } = Select;

const subjectViews = [{
  value: "carousel",
  text: "Vista normal"
 },
 {
   value: "tree",
   text: "Vista compacta"
  },
  {
    value: "finales",
    text: "Finales Pendientes"
}];

const filterOption = (input, option) => {
  return option.props.children.toLowerCase()
    .indexOf(input.toLowerCase()) >= 0;
}

const getViews = (desktop) => {
  if(desktop)
    return subjectViews;

  return subjectViews.filter(v => v.value !== "tree");
}

const SeguidorHeading = ({ changeViewType, currentView, desktop }) => (
  <div>

    <div className="SeguidorTitle">
      <h1 className="SeguidorHeading">Materias</h1>
    </div>

    <div className={"ViewChooser " + (desktop ? " Desktop" : " Mobile")}>

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Elegir una vista"
        optionFilterProp="children"
        onChange={value => changeViewType(value)}
        defaultValue={currentView}
        filterOption={(input, option) => filterOption(input, option)}
        className="ViewChooserSelect"
      >
       {getViews(desktop).map(v =>
         <Option key={v.value} view={v.value}>
            {v.text}
         </Option>)}
      </Select>

    </div>

  </div>
)

export default SeguidorHeading;
