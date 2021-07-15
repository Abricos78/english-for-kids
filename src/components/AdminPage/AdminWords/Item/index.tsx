import React from 'react';
import { connect } from 'react-redux';
import {
  deleteWord, LoginInterface, setNewWord, setPrevData, toggleUpdate,
} from '../../../../reducers/login';
import { getCurrentCategory, getNewWord } from '../../../../selectors';
import UpdateItem from '../UpdateItem';
import style from './style.module.css';

interface AdminWordInterface {
  name: string,
  translation: string,
  logo: string,
  deleteWordD: Function,
  currentCategory: string,
  setPrevDataD: Function,
  setNewWordD: Function,
  newWord: string,
}

const AdminWord = ({
  name, translation, logo, deleteWordD, currentCategory, setPrevDataD, setNewWordD, newWord,
}: AdminWordInterface) => {
  if (newWord === name) {
    return <UpdateItem />;
  }
  return (
    <div className={style.card}>
      <button onClick={() => deleteWordD(currentCategory, name)} className={style.delete} type="button">×</button>
      <h2 className={style.field}>
        Word:
        <span>{name}</span>
      </h2>
      <h2 className={style.field}>
        Translation:
        <span>{translation}</span>
      </h2>
      <h2 className={style.field}>
        Sound file:
        <span>
          {name}
          .mp3
        </span>
      </h2>
      <h2 className={style.field}>Image:</h2>
      <img src={logo} alt={name} />
      <button
        onClick={() => { setPrevDataD({ name, translation, logo }); setNewWordD(name); }}
        className={style.change}
        type="button"
      >
        Change
      </button>
    </div>
  );
};

const mapStateToProps = ({ loginState }: Record<string, LoginInterface >) => ({
  currentCategory: getCurrentCategory(loginState),
  newWord: getNewWord(loginState),
});
const mapDispatchToProps = {
  deleteWordD: deleteWord,
  setPrevDataD: setPrevData,
  toggleUpdateD: toggleUpdate,
  setNewWordD: setNewWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWord);
