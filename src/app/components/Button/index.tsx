import React from 'react';
import { Button } from 'react-bootstrap';

interface IButtonInterface {
  label: string;
  value?: string;
  className?: string;
  handleOnClick?: (event: any) => any;
}
const ButtonComponent = (buttonProps: IButtonInterface) => {
  return (
    <Button
      type="button"
      onClick={buttonProps.handleOnClick}
      value={buttonProps.value}
      className={`button ${buttonProps.className}`}
    >
      {buttonProps.label}
    </Button>
  );
};

export default ButtonComponent;
