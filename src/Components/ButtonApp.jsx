import React from 'react';
import Button, {
  handleExit,
  handleSave,
  HandleClick,
} from './ReusableCmpt.jsx';

const ButtonApp = () => {
  return (
    <div>
      <Button handle={HandleClick} backcolor="green">
        Click Me
      </Button>
      <Button handle={handleSave} backcolor="blue">
        Save
      </Button>
      <Button handle={handleExit} backcolor="red">
        Exit
      </Button>
    </div>
  );
};

export default ButtonApp;
