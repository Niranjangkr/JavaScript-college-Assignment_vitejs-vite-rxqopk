import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handle} style={{ backgroundColor: props.backcolor }}>
      {props.children}
    </button>
  );
};

export const HandleClick = () => {
  alert('clicked');
};

export const handleSave = () => {
  alert('saved');
};

export const handleExit = () => {
  alert('exit');
};

export default Button;
