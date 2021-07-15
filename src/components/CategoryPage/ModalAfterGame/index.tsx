import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StateInterface } from '../../../reducers/state';
import { getAllMistakes } from '../../../selectors';
import { soundPlay } from '../../../utills/index';
import style from './style.module.css';

interface MyInterface {
    allMistakes: number
}

const WindowAfterGame = ({ allMistakes }: MyInterface) => {
  const src = allMistakes === 0
    ? 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for.kids.data/img/success.jpg?raw=true'
    : 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for.kids.data/img/failure.jpg?raw=true';
  useEffect(() => {
    if (allMistakes === 0) {
      soundPlay('WIN');
    } else {
      soundPlay('LOSE');
    }
  });
  if (!allMistakes) {
    return (
      <div className={style.div}>
        <h1>Win</h1>
        <img
          src={src}
          alt="win"
        />
      </div>
    );
  }
  return (
    <div className={style.div}>
      <h1>{allMistakes === 1 ? `${allMistakes} mistake` : `${allMistakes} mistakes`}</h1>
      <img src={src} alt="" />
    </div>
  );
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  allMistakes: getAllMistakes(data),
});

export default connect(mapStateToProps)(WindowAfterGame);
