import React from 'react';
import { Select, Badge } from 'antd';

const { Option } = Select;

const categories = [
  { id: 0, name: 'Pendiente', color: 'default' },
  { id: 1, name: 'Cursando', color: 'processing' },
  { id: 2, name: 'Firmada', color: 'warning' },
  { id: 3, name: 'Aprobada', color: 'success' },
];

function handleChange(value, updateFn, materiaId) {

  const categoryId = categories.filter(c => c.name === value)[0].id;
  const materiaStatus = {
    id: materiaId,
    status: categoryId + 1
  };

  updateFn(materiaStatus);
}

function categroyFromStatus(status, subjectCategories) {
  return subjectCategories.filter(c => (c.id + 1) === status)[0].name;
}

const StatusDropdown = ({ updateFn, materiaId, status }) => (
  <span>
    <Select
      style={{ width: '100%' }}
      optionFilterProp="children"
      onChange={value => handleChange(value, updateFn, materiaId)}
      defaultValue={categroyFromStatus(status, categories)}
    >
      {categories.map(category => (
        <Option value={category.name} key={category.id} title={category.name}>
          <Badge status={category.color} />
          {category.name}
        </Option>
      ))}
    </Select>
  </span>
);

export default StatusDropdown;
