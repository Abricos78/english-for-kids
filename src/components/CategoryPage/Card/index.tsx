import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Word } from '../../../api/interface';
import {
  changeRating, nextWord, setMistake, StateInterface,
} from '../../../reducers/state';
import { StatisticsInterface, updateStatistics } from '../../../reducers/statistics';
import {
  getCurrentWord, getStart, getStatusGame, getWords,
} from '../../../selectors';
import { soundPlay } from '../../../utills/index';
import style from './style.module.css';

interface MyInterface {
    translation: string,
    logo: string,
    name: string,
    game: boolean,
    start: boolean,
    currentWord: string,
    setNextWord: Function,
    setNewRating: Function,
    addMistake: Function,
    updateStatistic: Function,
    words: Word[],
    sound: string | undefined
}

const Card = ({
  translation,
  sound,
  logo, name, game, start, currentWord, setNextWord, setNewRating, addMistake, updateStatistic,
  words,
}: MyInterface) => {
  function checkWord(event: React.MouseEvent<Element, MouseEvent>) {
    if (!(event.target as HTMLElement).classList.contains(style.inactive)) {
      if (currentWord === name) {
        setNextWord();
        updateStatistic(words, 'correct', currentWord);
        setNewRating('success');
        (event.target as HTMLElement).classList.add(style.inactive);
        soundPlay('SUCCESS');
      } else {
        updateStatistic(words, 'wrong', currentWord);
        setNewRating('error');
        addMistake();
        soundPlay('ERROR');
      }
    }
  }
  const background = {
    backgroundImage: `url(${logo})`,
    backgroundSize: !game ? 'contain' : 'cover',
    backgroundPosition: !game ? '' : '50%',
  };
  const startListener = start ? (e: React.MouseEvent<Element, MouseEvent>) => checkWord(e) : () => {};
  return (
    <div
      aria-hidden="true"
      onClick={game ? (e: React.MouseEvent<Element, MouseEvent>) => startListener(e)
        : (e: React.MouseEvent<Element, MouseEvent>) => {
          console.log(sound);
          if (sound) {
            soundPlay(sound, e);
          } else {
            soundPlay(name, e);
          }
          updateStatistic(words, 'clicks', name);
        }}
      className={style.card}
    >
      <div className={style.front} style={background}>
        <div style={{ display: !game ? 'block' : 'none' }} className={style.cardHeader}>{name}</div>
      </div>
      <div data-type="back" className={style.back} style={background}>
        <div style={{ display: !game ? 'block' : 'none' }} className={style.cardHeader}>{translation}</div>
      </div>
      <div
        aria-hidden="true"
        onClick={(event) => {
          const parent = (event.target as HTMLElement).parentElement;
          const back = (event.target as HTMLElement).previousElementSibling;
          if (parent && back) {
            parent.setAttribute('style', 'transform: rotateY(180deg)');
            back.addEventListener('mouseout', () => {
              parent.setAttribute('style', 'transform: rotateY(0deg)');
            });
          }
        }}
        className={style.rotate}
        data-type="rotate"
        style={{ display: !game ? 'block' : 'none' }}
      />
    </div>
  );
};

interface Props {
  data: StateInterface,
  statistics: StatisticsInterface
}

const mapStateToProps = ({ data, statistics }: Props) => ({
  game: getStatusGame(data),
  start: getStart(data),
  currentWord: getCurrentWord(data),
  words: getWords(statistics),
});
const mapDispatchToProps = {
  setNextWord: nextWord,
  setNewRating: changeRating,
  addMistake: setMistake,
  updateStatistic: updateStatistics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card as FunctionComponent);
