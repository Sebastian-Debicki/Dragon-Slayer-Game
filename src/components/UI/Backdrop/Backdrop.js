import React from 'react';

const Backdrop = ({ clicked }) => {
  return (
    <div onClick={clicked} className="backdrop"></div>
  );
}

export default Backdrop;