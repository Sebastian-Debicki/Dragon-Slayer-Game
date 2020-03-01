import React from 'react';

const Button = ({ classEl, clicked, children }) =>
  <button className={classEl} onClick={clicked}>{children}</button>

export default Button;