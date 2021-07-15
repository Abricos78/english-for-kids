import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Word } from '../../../api/interface';
import { createCategory, LoginInterface, setWords } from '../../../reducers/login';
import { getCreate, getCurrentCategory, getWordsForAdmin } from '../../../selectors';
import Item from './Item';
import style from './style.module.css';
import UpdateItem from './UpdateItem';

interface AdminWordsInterface {
  words: Word[],
  currentCategory: string,
  create: string,
  createCategoryD: Function,
  setWordsD: Function
}

const AdminWords = ({
  words, currentCategory, create, createCategoryD, setWordsD,
}: AdminWordsInterface) => {
  if (currentCategory === '') {
    return <Redirect from="admin/api/categories" to="/admin" />;
  }
  useEffect(() => setWordsD(currentCategory), []);
  return (
    <div>
      <h2>
        Category:
        <span className={style.category}>{currentCategory}</span>
      </h2>
      <div className={style.words}>
        {words.map((word) => <Item key={word.name} {...word} />)}
        {create ? <UpdateItem /> : ''}
        <div aria-hidden="true" onClick={() => createCategoryD()} className={style.create}>
          <h2 className={style.field}>Add new Word</h2>
          <div className={style.plus}>+</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  words: getWordsForAdmin(loginState),
  currentCategory: getCurrentCategory(loginState),
  create: getCreate(loginState),
});
const mapDispatchToProps = {
  createCategoryD: createCategory,
  setWordsD: setWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWords as FunctionComponent);
