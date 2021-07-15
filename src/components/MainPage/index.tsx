import React, { useEffect, FunctionComponent } from 'react';

import { connect } from 'react-redux';
import { resetCurrentCategory } from '../../reducers/state';
import { getCategories as getCategoriesSelector, getLoading } from '../../selectors';
import style from './style.module.css';
import MainCard from './Card';
import { Categories, getCategories } from '../../reducers/categories';
import Preloader from '../common/Preloader';
import { getAllWords } from '../../reducers/statistics';

export interface MainInterface {
    categories: Array<Record<string, string>>,
    resetCategory: Function,
    getCategoriesD: Function,
    loading: boolean,
    getAllWordsD: Function
}

const MainPage = ({
  categories, resetCategory, getCategoriesD, loading, getAllWordsD,
}: MainInterface) => {
  useEffect(() => { resetCategory(); getCategoriesD(); getAllWordsD(); }, []);
  if (loading) {
    return <Preloader />;
  }
  return (
    <main>
      <div className={style.cards}>
        {categories.map((category) => <MainCard key={category.name} name={category.name} logo={category.logo} />)}
      </div>
    </main>
  );
};

const mapStateToProps = ({ categories }: Record<string, Categories>) => ({
  categories: getCategoriesSelector(categories),
  loading: getLoading(categories),
});
const mapDispatchToProps = {
  resetCategory: resetCurrentCategory,
  getCategoriesD: getCategories,
  getAllWordsD: getAllWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage as FunctionComponent);
