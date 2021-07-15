import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteCategory, LoginInterface, setCurrentCategory, toggleUpdate, updateCategory,
} from '../../../../reducers/login';
import { getCurrentCategory, getUpdate } from '../../../../selectors';
import UpdateItem from '../UpdateItem';
import style from './style.module.css';

interface ItemInterface {
  name: string,
  length: number,
  deleteCategoryD: Function,
  update: boolean,
  updateCategoryD: Function,
  toggleUpdateD: Function,
  setCurrentCategoryD: Function,
  currentCategory: string,
}

const Item = ({
  name, length, deleteCategoryD, update, updateCategoryD, toggleUpdateD, setCurrentCategoryD, currentCategory,
}: ItemInterface) => {
  if (update && currentCategory === name) {
    return <UpdateItem name={name} updateDispatch={updateCategoryD} />;
  }
  return (
    <div className={style.category}>
      <button onClick={() => deleteCategoryD(name)} className={style.delete} type="button">×</button>
      <h2 className={style.title}>{name}</h2>
      <h3 className={style.length}>
        Words:
        {length}
      </h3>
      <div className={style.buttons}>
        <button
          onClick={() => { setCurrentCategoryD(name); toggleUpdateD(name); }}
          className={style.button}
          type="button"
        >
          Update
        </button>
        <Link
          onClick={() => { setCurrentCategoryD(name); }}
          className={style.button}
          to={`/admin/categories/${name}`}
        >
          Add Word
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  update: getUpdate(loginState),
  currentCategory: getCurrentCategory(loginState),
});

const mapDispatchToProps = {
  deleteCategoryD: deleteCategory,
  updateCategoryD: updateCategory,
  toggleUpdateD: toggleUpdate,
  setCurrentCategoryD: setCurrentCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
