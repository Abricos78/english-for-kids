import React from 'react';
import { connect } from 'react-redux';
import { setSortType, StatisticsInterface } from '../../../reducers/statistics';
import { getOrder, getSortType } from '../../../selectors';
import style from './style.module.css';

interface MyInterface {
    button: string,
    order: string,
    setType: Function,
    sortType: string
}

const StatisticHeader = ({
  button, order, setType, sortType,
}: MyInterface) => {
  let header = button;
  if (button === 'percent') {
    header = '% errors';
  }
  const text = order === 'ASC' ? `↓ ${header}` : `↑ ${header}`;
  return (
    <td aria-hidden="true" className={style.sort} onClick={() => setType(button)}>{sortType === button ? text : header}</td>
  );
};

const mapStateToProps = ({ statistics }: Record<string, StatisticsInterface>) => ({
  order: getOrder(statistics),
  sortType: getSortType(statistics),
});
const mapDispatchToProps = {
  setType: setSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticHeader);
