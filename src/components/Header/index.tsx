import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import {
  getCategories, getCurrentCategory, getModal, getStatusGame,
} from '../../selectors';
import {
  finishGame, showModal, StateInterface, toggleGame,
} from '../../reducers/state';
import style from './style.module.css';
import { Categories, selectCategory } from '../../reducers/categories';
import { getWords } from '../../reducers/words';
import LoginPage from '../LoginPage';

export interface HeaderInterface {
    game: boolean,
    toggle: Function,
    openModal: Function,
    modal: boolean,
    categories: Array<Record<string, string>>,
    currentCategory: string,
    setCategory: Function,
    finish: Function,
    getWordsD: Function,
}

const Header = ({
  game,
  toggle,
  openModal, modal, categories, currentCategory, setCategory, finish, getWordsD,
}: HeaderInterface) => {
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
        <Link
          onClick={() => { finish(); setCategory(''); }}
          to="/"
          className={!currentCategory ? style.active : ''}
        >
          main page
        </Link>
        {categories.map(({ name }) => (
          <Link
            key={name}
            onClick={() => { setCategory(name); finish(); getWordsD(name); }}
            to={`/category/${name}`}
            className={currentCategory === name ? style.active : ''}
          >
            {name}
          </Link>
        ))}
        <Link
          onClick={() => { setCategory('statistics'); finish(); }}
          to="/statistics"
          className={currentCategory === 'statistics' ? style.active : ''}
        >
          statistics page
        </Link>
        <LoginPage />
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

interface Props {
  data: StateInterface,
  categories: Categories
}

const mapStateToProps = ({ data, categories }: Props) => ({
  game: getStatusGame(data),
  modal: getModal(data),
  categories: getCategories(categories),
  currentCategory: getCurrentCategory(categories),
});
const mapDispatchToProps = {
  toggle: toggleGame,
  openModal: showModal,
  setCategory: selectCategory,
  finish: finishGame,
  getWordsD: getWords,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header as FunctionComponent);
