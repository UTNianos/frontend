import React from 'react';

const DisplayList = ({ title, list }) => {
  if (list.length === 0) { return null; }

  return (
    <div>

      <p>{title}</p>

      <ul>
        {list.map(pendiente => (
          <li key={pendiente.id}>
            {pendiente.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default DisplayList;
