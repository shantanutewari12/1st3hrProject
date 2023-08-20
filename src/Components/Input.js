import React from 'react';
import './Input.css'
function Input(props) {
  return (
    <div>
      <h4>{props.label}</h4>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{ marginRight: '10px' }}
      />
    </div>
  );
}

export default Input;
