import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  finishGame, openWindowAfterGame, selectCategory, setRandomWordOrder, startGame, StateInterface,
} from '../../reducers/state';
import {
  getCurrentWord, getStart, getStatusGame, getWindowAfterGame, getWords,
} from '../../selectors';
import { createRandowWordOrder, sound } from '../../utills';
import style from './style.module.css';
import Card from './Card';
import Rating from './Rating';
import ModalAfterGame from './ModalAfterGame';

interface MyInterface {
    words: Record<string, Record<string, string>>,
    game: boolean,
    start: boolean,
    startBtn: Function,
    currentWord: string,
    setWordOrder: Function,
    finish: Function,
    windowAfterGame: boolean,
    openWinModal: Function,
    setCategory: Function
}

export type wordInterface = [string, {[key: string]: string}]

const CategoryPage = ({
  words,
  game,
  start,
  startBtn,
  currentWord, setWordOrder, finish, windowAfterGame, openWinModal, setCategory,
}: MyInterface) => {
  useEffect(() => {
    if (currentWord === undefined) {
      setTimeout(openWinModal, 1000);
      setTimeout(() => { finish(); setCategory(''); }, 3000);
    }
  });
  if (words) {
    const englishWords = Object.entries(words);
    const order = createRandowWordOrder(englishWords);
    if (windowAfterGame) {
      return <ModalAfterGame />;
    }
    return (
      <div>
        <Rating />
        <div className={style.cards}>
          {englishWords.map((word: wordInterface) => {
            const englishWord = {
              word: word[0],
              logo: word[1].logo,
              translation: word[1].translate,
            };
            return <Card key={englishWord.word} {...englishWord} />;
          })}
        </div>
        {game ? (
          <div className={style.btns}>
            <button
              aria-hidden="true"
              type="button"
              onClick={start ? () => sound(currentWord)
                : () => { startBtn(); setWordOrder(order); sound(order[0]); }}
              className={start ? `${style.startBtn} ${style.repeat}` : style.startBtn}
            >
              start game
            </button>
          </div>
        ) : ''}
      </div>

    );
  }
  return <Redirect to="/" />;
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  words: getWords(data),
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
