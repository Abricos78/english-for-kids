import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { getButtons, getStatusGame, getWordsForStatistics } from '../../selectors';
import style from './style.module.css';
import { resetWords, StatisticsInterface } from '../../reducers/statistics';
import { createDifficultWords, selectCategory, StateInterface } from '../../reducers/state';
import StatisticRow from './StatisticRow';
import StatisticHeader from './StatisticHeader';

interface MyInterface {
    words: Array<Record<string, string | number>>,
    buttons: Array<string>,
    game: boolean,
    reset: Function,
    createWords: Function,
    setCategory: Function
}

const StatisticsPage = ({
  words, buttons, game, reset, createWords, setCategory,
}: MyInterface) => {
  const background = {
    background: game ? 'linear-gradient(-90deg,#fd6a63,#feb46b)' : 'linear-gradient(-90deg, #0099ae,#00bf82)',
    boxShadow: game ? '3px 3px 15px 2px rgb(138 83 0 / 25%), -3px -3px 15px 2px rgb(138 83 0 / 22%)'
      : '3px 3px 15px 2px rgb(0 169 130 / 25%), -3px -3px 15px 2px rgb(0 169 130 / 25%)',
  };
  if (words.length === 0) {
    return <Redirect to="/" />;
  }
  return (
    <div className={style.wrapper}>
      <div className={style.buttons}>
        <Link
          onClick={() => { createWords(words); setCategory('Difficult Words'); }}
          to="/category/Difficult Words"
          style={background}
          className={style.repeat}
        >
          repeat difficult words
        </Link>
        <button type="button" onClick={() => reset()} style={background} className={style.reset}>reset</button>
      </div>
      <table style={{ boxShadow: background.boxShadow }} className={style.statistics}>
        <caption style={background}>Cards</caption>
        <thead>
          <tr className={style.row}>
            {buttons.map((button) => <StatisticHeader key={button} button={button} />)}
          </tr>
        </thead>
        <tbody>
          {words.map((item) => <StatisticRow key={item.word} {...item} />)}
        </tbody>
      </table>
    </div>
  );
};

interface Props {
  data: StateInterface,
  statistics: StatisticsInterface
}

const mapStateToProps = ({ data, statistics }: Props) => ({
  words: getWordsForStatistics(statistics),
  buttons: getButtons(statistics),
  game: getStatusGame(data),
});
const mapDispatchToProps = {
  reset: resetWords,
  createWords: createDifficultWords,
  setCategory: selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage as FunctionComponent);
