import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  getAllWords, getCategories, getCurrentCategory, getModal, getStatusGame,
} from '../../selectors';
import {
  finishGame, selectCategory, showModal, StateInterface, toggleGame,
} from '../../reducers/state';
import style from './style.module.css';
import { createData } from '../../reducers/statistics';

interface MyInterface {
    game: boolean,
    toggle: Function,
    openModal: Function,
    modal: boolean,
    categories: Array<Record<string, string>>,
    currentCategory: string,
    setCategory: Function,
    finish: Function,
    create: Function,
    allWords: Record<string, Record<string, Record<string, string>>>
}

const Header = ({
  game,
  toggle,
  openModal, modal, categories, currentCategory, setCategory, finish, create, allWords,
}: MyInterface) => {
  const show = `${style.burger} ${style.show}`;
  const background = {
    background: game ? 'linear-gradient(180deg,#fd6a63,#feb46b)' : 'linear-gradient(180deg, #0099ae,#00bf82)',
  };
  return (
    <header className={style.header}>
      <div aria-hidden="true" onClick={() => openModal()} className={modal ? show : style.burger}>
        <div className={style.first} />
        <div className={style.second} />
        <div className={style.third} />
      </div>
      <ul style={background} className={modal ? `${style.menu} ${style.show}` : style.menu}>
        <Link onClick={() => finish()} to="/" className={!currentCategory ? style.active : ''}>main page</Link>
        {categories.map(({ category }) => (
          <Link
            key={category}
            onClick={() => { setCategory(category); finish(); create(allWords); }}
            to={`/category/${category}`}
            className={currentCategory === category ? style.active : ''}
          >
            {category}
          </Link>
        ))}
        <Link
          onClick={() => { setCategory('statistics'); finish(); create(allWords); }}
          to="/statistics"
          className={currentCategory === 'statistics' ? style.active : ''}
        >
          statistics page
        </Link>
      </ul>
      <label htmlFor="button" className={style.button}>
        <input
          id="button"
          onChange={game ? () => toggle() : () => { toggle(); finishGame(); }}
          type="checkbox"
          className={style.input}
          checked={game}
        />
        <span className={style.buttonBack} data-game={game ? 'Play' : 'Train'} />
        <span className={style.slider} />
      </label>
    </header>
  );
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  game: getStatusGame(data),
  modal: getModal(data),
  categories: getCategories(data),
  currentCategory: getCurrentCategory(data),
  allWords: getAllWords(data),
});
const mapDispatchToProps = {
  toggle: toggleGame,
  openModal: showModal,
  setCategory: selectCategory,
  finish: finishGame,
  create: createData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
