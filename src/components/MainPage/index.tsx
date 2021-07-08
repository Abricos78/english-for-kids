import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { resetCurrentCategory, StateInterface } from '../../reducers/state';
import { getCategories } from '../../selectors';
import style from './style.module.css';
import MainCard from './Card';

interface MyInterface {
    categories: Array<Record<string, string>>,
    resetCategory: Function
}

const MainPage = ({ categories, resetCategory }: MyInterface) => {
  useEffect(() => resetCategory());

  return (
    <main>
      <div className={style.cards}>
        {categories.map((category) => <MainCard key={category.category} category="" logo="" {...category} />)}
      </div>
    </main>
  );
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  categories: getCategories(data),
});
const mapDispatchToProps = {
  resetCategory: resetCurrentCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
