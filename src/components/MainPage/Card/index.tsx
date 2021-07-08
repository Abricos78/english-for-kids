import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategory, StateInterface } from '../../../reducers/state';
import { createData } from '../../../reducers/statistics';
import { getAllWords, getStatusGame } from '../../../selectors';
import style from './style.module.css';

interface MyInterface {
    category: string,
    logo: string,
    game: boolean,
    setCategory: Function,
    create: Function,
    allWords: Record<string, Record<string, Record<string, string>>>
}

const MainCard = ({
  category, logo, game, setCategory, create,
  allWords,
}: MyInterface) => {
  const background = {
    background: game ? 'linear-gradient(180deg,#fd6a63,#feb46b 40%,#fff 0,#fff)'
      : 'linear-gradient(180deg, #0099ae,#00bf82 40%, white 40%)',
  };
  return (
    <Link
      style={background}
      onClick={() => { setCategory(category); create(allWords); }}
      to={`/category/${category}`}
      className={style.card}
    >
      <img src={logo} alt={category} />
      {category}
    </Link>
  );
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  game: getStatusGame(data),
  allWords: getAllWords(data),
});
const mapDispatchToProps = {
  setCategory: selectCategory,
  create: createData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
