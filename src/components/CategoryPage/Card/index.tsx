import React from 'react';
import { connect } from 'react-redux';
import {
  changeRating, nextWord, setMistake, StateInterface,
} from '../../../reducers/state';
import { updateStatistics } from '../../../reducers/statistics';
import { getCurrentWord, getStart, getStatusGame } from '../../../selectors';
import { sound } from '../../../utills';
import style from './style.module.css';

interface MyInterface {
    translation: string,
    logo: string,
    word: string,
    game: boolean,
    start: boolean,
    currentWord: string,
    setNextWord: Function,
    setNewRating: Function,
    addMistake: Function,
    updateStatistic: Function
}

const Card = ({
  translation,
  logo, word, game, start, currentWord, setNextWord, setNewRating, addMistake, updateStatistic,
}: MyInterface) => {
  function checkWord(event: React.MouseEvent<Element, MouseEvent>) {
    if (!(event.target as HTMLElement).classList.contains(style.inactive)) {
      if (currentWord === word) {
        setNextWord();
        updateStatistic('correct', currentWord);
        setNewRating('success');
        (event.target as HTMLElement).classList.add(style.inactive);
        sound('SUCCESS');
      } else {
        updateStatistic('wrong', currentWord);
        setNewRating('error');
        addMistake();
        sound('ERROR');
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
        : (e: React.MouseEvent<Element, MouseEvent>) => { sound(word, e); updateStatistic('clicks', word); }}
      className={style.card}
    >
      <div className={style.front} style={background}>
        <div style={{ display: !game ? 'block' : 'none' }} className={style.cardHeader}>{word}</div>
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

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  game: getStatusGame(data),
  start: getStart(data),
  currentWord: getCurrentWord(data),
});
const mapDispatchToProps = {
  setNextWord: nextWord,
  setNewRating: changeRating,
  addMistake: setMistake,
  updateStatistic: updateStatistics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
