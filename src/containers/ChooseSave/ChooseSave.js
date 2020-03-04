import React from 'react';
import Button from '../../components/UI/Button/Button';

const ChooseSave = () => {
  return (
    <div className="choose-save">
      <div className="choose-save__box">
        <div className="heading-box u-margin-bottom-big">
          <h2 className="heading-secondary">Choose Game</h2>
        </div>
        <Button className="btn btn__secondary">New Game</Button>
        <Button className="btn btn__secondary">New Game</Button>
        <Button className="btn btn__secondary">New Game</Button>
      </div>
    </div>
  );
}

export default ChooseSave;