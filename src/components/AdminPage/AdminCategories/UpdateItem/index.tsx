import React from 'react';
import { connect } from 'react-redux';
import {
  deleteNewCategory, LoginInterface, newCategory,
} from '../../../../reducers/login';
import { getCreate, getNewCategory, getUpdate } from '../../../../selectors';
import style from './style.module.css';

interface UpdateItemInterface {
  categoryName: string,
  newCategoryD: Function,
  deleteNewCategoryD: Function,
  updateDispatch: Function,
  name: string,
  update: boolean,
  create: boolean
}

const UpdateItem = ({
  name, categoryName, newCategoryD, deleteNewCategoryD, updateDispatch, update, create,
}: UpdateItemInterface) => (
  <div className={`${style.create} ${style.newCategory}`}>
    <p className={style.title}>Category Name:</p>
    <input
      onInput={(e) => newCategoryD((e.target as HTMLInputElement).value)}
      id="input"
      className={style.input}
      type="text"
      value={categoryName}
    />
    <div className={style.buttons}>
      <button onClick={() => deleteNewCategoryD()} className={style.button} type="button">Cancel</button>
      <button
        onClick={() => {
          if (create) {
            updateDispatch(categoryName);
          }
          if (update) {
            updateDispatch(name, categoryName);
          }
        }}
        className={style.button}
        type="button"
      >
        Create
      </button>
    </div>
  </div>
);

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  categoryName: getNewCategory(loginState),
  update: getUpdate(loginState),
  create: getCreate(loginState),
});
const mapDispatchToProps = {
  newCategoryD: newCategory,
  deleteNewCategoryD: deleteNewCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
