import React from 'react';
import { connect } from 'react-redux';
import { setSortType } from '../../../reducers/statistics';
import style from './style.module.css';

interface MyInterface {
    name: string,
    order: string,
    setType: Function,
    sortType: string
}

const StatisticHeader = ({
  name, order, setType, sortType,
}: MyInterface) => {
  let header = name;
  switch (name) {
    case 'percent':
      header = '% errors';
      break;
    case 'name':
      header = 'word';
      break;
    default:
      break;
  }
  const text = order === 'ASC' ? `↓ ${header}` : `↑ ${header}`;
  return (
    <td aria-hidden="true" className={style.sort} onClick={() => setType(name)}>{sortType === name ? text : header}</td>
  );
};

const mapStateToProps = () => ({

});
const mapDispatchToProps = {
  setType: setSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticHeader);
