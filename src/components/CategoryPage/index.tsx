import React, { FunctionComponent, useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  finishGame, openWindowAfterGame, setRandomWordOrder, startGame, StateInterface,
} from '../../reducers/state';
import {
  getCurrentCategory,
  getCurrentWord, getStart, getStatusGame, getWindowAfterGame, getWords as getWordsSelector,
} from '../../selectors';
import { createRandowWordOrder, soundPlay } from '../../utills/index';
import style from './style.module.css';
import Card from './Card';
import Rating from './Rating';
import ModalAfterGame from './ModalAfterGame';
import { Categories, selectCategory } from '../../reducers/categories';
import { Word } from '../../api/interface';
import { Words } from '../../reducers/words';

export interface CategoriesInterface {
    words: Word[],
    game: boolean,
    start: boolean,
    startBtn: Function,
    currentWord: string,
    currentCategory: string,
    setWordOrder: Function,
    finish: Function,
    windowAfterGame: boolean,
    openWinModal: Function,
    setCategory: Function,
    getWordsD: Function
}

export type wordInterface = [string, {[key: string]: string}]

const CategoryPage = ({
  words,
  game,
  start,
  startBtn,
  currentWord, setWordOrder, finish, windowAfterGame, openWinModal, setCategory,
  currentCategory,
}: CategoriesInterface) => {
  useEffect(() => {
    if (currentWord === 'END') {
      setTimeout(openWinModal, 1000);
      setTimeout(() => { finish(); setCategory(''); }, 3000);
    }
  });
  console.log(words);
  if (currentCategory === '') {
    return <Redirect from="category/" to="/" />;
  }

  const order = createRandowWordOrder(words);
  if (windowAfterGame) {
    return <ModalAfterGame />;
  }
  return (
    <div>
      <Rating />
      <div className={style.cards}>
        {words.map((word: Word) => <Card key={word.name} {...word} />)}
      </div>
      {game ? (
        <div className={style.btns}>
          <button
            aria-hidden="true"
            type="button"
            onClick={start ? () => soundPlay(currentWord)
              : () => { startBtn(); setWordOrder(order); soundPlay(order[0]); }}
            className={start ? `${style.startBtn} ${style.repeat}` : style.startBtn}
          >
            start game
          </button>
        </div>
      ) : ''}
    </div>

  );
};

interface Props {
  data: StateInterface,
  categories: Categories,
  words: Words
}

const mapStateToProps = ({ data, categories, words }: Props) => ({
  currentCategory: getCurrentCategory(categories),
  words: getWordsSelector(words),
  game: getStatusGame(data),
  start: getStart(data),
  currentWord: getCurrentWord(data),
  windowAfterGame: getWindowAfterGame(data),
});
const mapDispatchToProps = {
  setCategory: selectCategory,
  startBtn: startGame,
  setWordOrder: setRandomWordOrder,
  finish: finishGame,
  openWinModal: openWindowAfterGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage as FunctionComponent);
