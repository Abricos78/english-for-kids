import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import React, { FunctionComponent, useEffect } from 'react';
import {
  getButtons, getOrder, getSortType, getStatusGame, getWordsForStatistics,
} from '../../selectors';
import style from './style.module.css';
import { getAllWords, resetWords, StatisticsInterface } from '../../reducers/statistics';
import { StateInterface } from '../../reducers/state';
import StatisticRow from './StatisticRow';
import StatisticHeader from './StatisticHeader';
import { selectCategory } from '../../reducers/categories';
import { getDifficultWords } from '../../reducers/words';

export interface StatInterface {
    words: Array<Record<string, string | number>>,
    buttons: Array<string>,
    game: boolean,
    reset: Function,
    getDifficultWordsD: Function,
    setCategory: Function,
    getAllWordsD: Function,
    sortType: string,
    order: string,
}

const StatisticsPage = ({
  words, buttons, game, reset, getDifficultWordsD, setCategory, getAllWordsD, sortType, order,
}: StatInterface) => {
  useEffect(() => getAllWordsD(), []);
  const background = {
    background: game ? 'linear-gradient(-90deg,#fd6a63,#feb46b)' : 'linear-gradient(-90deg, #0099ae,#00bf82)',
    boxShadow: game ? '3px 3px 15px 2px rgb(138 83 0 / 25%), -3px -3px 15px 2px rgb(138 83 0 / 22%)'
      : '3px 3px 15px 2px rgb(0 169 130 / 25%), -3px -3px 15px 2px rgb(0 169 130 / 25%)',
  };
  if (words.length === 0) {
    return <Redirect from="/statistics" to="/" />;
  }
  return (
    <div className={style.wrapper}>
      <div className={style.buttons}>
        <Link
          onClick={() => { getDifficultWordsD(); setCategory('Difficult Words'); }}
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
            {buttons.map((button) => <StatisticHeader key={button} name={button} sortType={sortType} order={order} />)}
          </tr>
        </thead>
        <tbody>
          {words.map((word) => <StatisticRow key={word.translation} {...word} />)}
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
  order: getOrder(statistics),
  sortType: getSortType(statistics),
});
const mapDispatchToProps = {
  reset: resetWords,
  getDifficultWordsD: getDifficultWords,
  setCategory: selectCategory,
  getAllWordsD: getAllWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage as FunctionComponent);
