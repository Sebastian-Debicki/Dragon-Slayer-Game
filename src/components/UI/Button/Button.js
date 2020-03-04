import React from 'react';

const Button = ({ className, clicked, children }) =>
  <button className={className} onClick={clicked}>{children}</button>

export default Button;