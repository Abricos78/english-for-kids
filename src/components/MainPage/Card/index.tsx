import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategory } from '../../../reducers/categories';
import { StateInterface } from '../../../reducers/state';
import { getWords } from '../../../reducers/words';
import { getStatusGame } from '../../../selectors';
import style from './style.module.css';

interface MyInterface {
    name: string,
    logo: string,
    game: boolean,
    setCategory: Function,
    getWordsD: Function,
}

const MainCard = ({
  name, logo, game, setCategory, getWordsD,
}: MyInterface) => {
  const background = {
    background: game ? 'linear-gradient(180deg,#fd6a63,#feb46b 40%,#fff 0,#fff)'
      : 'linear-gradient(180deg, #0099ae,#00bf82 40%, white 40%)',
  };
  return (
    <Link
      style={background}
      onClick={() => { setCategory(name); getWordsD(name); }}
      to={`/category/${name}`}
      className={style.card}
    >
      <img src={logo} alt={name} />
      {name}
    </Link>
  );
};

interface Props {
  data: StateInterface,
}

const mapStateToProps = ({ data }: Props) => ({
  game: getStatusGame(data),
});
const mapDispatchToProps = {
  setCategory: selectCategory,
  getWordsD: getWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
