import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginInterface, logOut, setCurrentCategory } from '../../../reducers/login';
import { getCurrentCategory } from '../../../selectors';
import style from './style.module.css';

interface AdminHeaderInterface {
  currentCategory: string,
  setCurrentCategoryD: Function,
  logOutD: Function,
}

const AdminHeader = ({ currentCategory, setCurrentCategoryD, logOutD }: AdminHeaderInterface) => (
  <div className={style.header}>
    <div className={style.buttons}>
      <Link
        onClick={() => setCurrentCategoryD('')}
        className={currentCategory === '' ? `${style.link} ${style.active}` : style.link}
        to="/admin"
      >
        Categories
      </Link>
      <h2
        className={currentCategory !== '' ? `${style.link} ${style.active}` : style.link}
      >
        Words
      </h2>
    </div>
    <Link onClick={() => logOutD()} to="/" className={style.logOut}>Log Out</Link>
  </div>
);

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  currentCategory: getCurrentCategory(loginState),
});
const mapDispatchToProps = {
  setCurrentCategoryD: setCurrentCategory,
  logOutD: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);
