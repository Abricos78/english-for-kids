import React from 'react';
import { connect } from 'react-redux';
import {
  createWord,
  LoginInterface, setImage, setNewWord, setSound, setTranslation, setWord, updateWord,
} from '../../../../reducers/login';
import {
  getCreate,
  getCurrentCategory, getData, getTranslation, getWord,
} from '../../../../selectors';
import { encodeImageFileAsURL } from '../../../../utills';
import style from './style.module.css';

interface UpdateItemInterface {
  word: string,
  translation: string,
  setWordD: Function,
  setTranslationD: Function,
  setNewWordD: Function,
  data: Record<string, string>,
  currentCategory: string,
  updateWordD: Function,
  create: boolean,
  createWordD: Function,
  setImageD: Function,
  setSoundD: Function
}

const UpdateItem = ({
  word,
  translation,
  setWordD, setTranslationD, setNewWordD, data, currentCategory, updateWordD, create, createWordD, setImageD, setSoundD,
}: UpdateItemInterface) => (
  <div className={style.create}>
    <div>
      <p className={style.title}>Word:</p>
      <input
        onInput={(e) => setWordD((e.target as HTMLInputElement).value)}
        id="input"
        className={style.input}
        type="text"
        value={word}
      />
    </div>
    <div>
      <p className={style.title}>Translation:</p>
      <input
        onInput={(e) => setTranslationD((e.target as HTMLInputElement).value)}
        id="input"
        className={style.input}
        type="text"
        value={translation}
      />
    </div>
    <div className={style.buttons}>
      <div className={style.button}>
        <span>Sound:</span>
        <label className={style.label} htmlFor="sound">
          <input
            onChange={(e) => {
              encodeImageFileAsURL(e.target, setSoundD);
            }}
            type="file"
            accept="audio/*"
            id="sound"
          />
          Select Category
        </label>
      </div>
      <div className={style.button}>
        <span>Image:</span>
        <label className={style.label} htmlFor="image">
          <input
            type="file"
            onChange={(e) => {
              encodeImageFileAsURL(e.target, setImageD);
            }}
            id="image"
            accept="image/*"
          />
          Select Category
        </label>
      </div>
    </div>
    <div className={style.controls}>
      <button onClick={() => setNewWordD('')} className={style.control} type="button">Cancel</button>
      <button
        onClick={() => {
          if (create) {
            createWordD(currentCategory, data);
          } else {
            updateWordD(currentCategory, data);
          }
        }}
        className={style.control}
        type="button"
      >
        Create
      </button>
    </div>
  </div>
);

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  word: getWord(loginState),
  translation: getTranslation(loginState),
  data: getData(loginState),
  currentCategory: getCurrentCategory(loginState),
  create: getCreate(loginState),
});
const mapDispatchToProps = {
  setWordD: setWord,
  setTranslationD: setTranslation,
  setNewWordD: setNewWord,
  updateWordD: updateWord,
  createWordD: createWord,
  setImageD: setImage,
  setSoundD: setSound,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
