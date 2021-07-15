import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Category } from '../../../api/interface';
import {
  createCategory, createNewCategory, getCategoriesAdmin, LoginInterface,
} from '../../../reducers/login';
import { getCategories, getCreate } from '../../../selectors';
import Item from './Item';
import style from './style.module.css';
import UpdateItem from './UpdateItem';

interface AdminCategoriesInterface {
  categories: Category[],
  getCategoriesD: Function,
  createCategoryD: Function,
  create: boolean,
  createNewCategoryD: Function
}

const AdminCategories = ({
  categories, getCategoriesD, createCategoryD, create, createNewCategoryD,
}: AdminCategoriesInterface) => {
  useEffect(() => getCategoriesD(), []);
  return (
    <div className={style.categories}>
      {categories.map((category) => <Item key={category.name} {...category} />)}
      {create ? <UpdateItem name="" updateDispatch={createNewCategoryD} /> : ''}
      <div aria-hidden="true" onClick={() => createCategoryD()} className={style.create}>
        <h2 className={style.field}>Create new Category</h2>
        <div className={style.plus}>+</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  categories: getCategories(loginState),
  create: getCreate(loginState),
});
const mapDispatchToProps = {
  getCategoriesD: getCategoriesAdmin,
  createCategoryD: createCategory,
  createNewCategoryD: createNewCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);
