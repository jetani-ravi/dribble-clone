import React from 'react';
import { Button } from 'react-bootstrap';

interface IButtonInterface {
  label: string;
  value?: string;
  handleOnClick?: (event: any) => any;
}
const ButtonComponent = (buttonProps: IButtonInterface) => {
  return (
    <Button
      type="button"
      onClick={buttonProps.handleOnClick}
      value={buttonProps.value}
      className={`button ${buttonProps.label === 'All' ? 'active' : ''}`}
    >
      {buttonProps.label}
    </Button>
  );
};

export default ButtonComponent;
