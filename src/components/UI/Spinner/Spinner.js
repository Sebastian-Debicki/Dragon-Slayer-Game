import React from 'react';
import swords from '../../../assets/icons/spinner.svg';

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner__icon" src={swords} alt="swords" />
    </div>
  );
}

export default Spinner;