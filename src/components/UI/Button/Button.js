import React from 'react';

const Button = ({ className, clicked, children, disabled }) =>
  <button className={className} onClick={clicked} disabled={disabled}>{children}</button>

export default Button;