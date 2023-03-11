import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ label }) => {
  return (
    <Button
      type="button"
      className={`button ${label === 'All' ? 'active' : ''}`}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
