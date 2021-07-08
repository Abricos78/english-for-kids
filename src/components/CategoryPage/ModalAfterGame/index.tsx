import React from 'react';
import { connect } from 'react-redux';
import { StateInterface } from '../../../reducers/state';
import { getAllMistakes } from '../../../selectors';
import style from './style.module.css';

interface MyInterface {
    allMistakes: number
}

const WindowAfterGame = ({ allMistakes }: MyInterface) => {
  if (!allMistakes) {
    return (
      <div className={style.div}>
        <h1>Win</h1>
      </div>
    );
  }
  return (
    <div className={style.div}>
      <h1>{allMistakes === 1 ? `${allMistakes} mistake` : `${allMistakes} mistakes`}</h1>
    </div>
  );
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  allMistakes: getAllMistakes(data),
});

export default connect(mapStateToProps)(WindowAfterGame);
