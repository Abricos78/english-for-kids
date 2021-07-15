import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router';
import { getAuth, getLogin } from '../../selectors';
import style from './style.module.css';
import { toggleLoginModal, LoginInterface } from '../../reducers/login';
import LoginModal from './LoginModal';

interface Props {
  login: boolean,
  toggleLoginModalD: Function,
  auth: boolean,
}

const Login = ({ login, toggleLoginModalD, auth }: Props) => {
  if (auth) {
    return <Redirect from="/" to="/admin" />;
  }
  if (login) {
    return (
      <div className={style.wrapper}>
        <button className={style.loginBtn} type="button" aria-hidden="true">Login</button>
        <LoginModal />
      </div>

    );
  }

  return (
    <button className={style.loginBtn} onClick={() => toggleLoginModalD()} type="button">Login</button>
  );
};

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  login: getLogin(loginState),
  auth: getAuth(loginState),
});
const mapDispatchToProps = {
  toggleLoginModalD: toggleLoginModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
