import React from 'react';
import { connect } from 'react-redux';

let Main = ({ dispatch }) => {
  
  return (
    <div>
		<h1>UTNianos</h1>
		<h2>/kick gonza</h2>
    </div>
  );
  
}

Main = connect()(Main)

export default Main