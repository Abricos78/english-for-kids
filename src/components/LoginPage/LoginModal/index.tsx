import { connect } from 'react-redux';
import React from 'react';
// import { Redirect } from 'react-router';
import style from './style.module.css';
import {
  checkAdmin,
  closeLoginModal, LoginInterface, setName, setPassword,
} from '../../../reducers/login';
import {
  getLoading, getName, getPassword,
} from '../../../selectors';

interface LoginModalInterface {
  closeLoginModalD: Function,
  seNameD: Function,
  setPasswordD: Function,
  name: string,
  password: string,
  loading: boolean,
  checkAdminD: Function,
}

const LoginModal = ({
  closeLoginModalD, seNameD, setPasswordD, name, password, loading, checkAdminD,
}: LoginModalInterface) => (
  <section className={style.modal}>
    <div className={style.window}>
      <div className={style.login}>
        <h2>Login</h2>
        <form>
          <input onInput={(e) => seNameD((e.target as HTMLInputElement).value)} type="text" placeholder="Login" value={name} />
          <input
            onInput={(e) => setPasswordD((e.target as HTMLInputElement).value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </form>
      </div>
      <div className={style.buttons}>
        <button disabled={loading} onClick={() => closeLoginModalD()} type="button" className={style.cancel}>Cancel</button>
        <button
          disabled={loading}
          onClick={() => checkAdminD(name, password)}
          type="button"
          className={style.autorisation}
        >
          Login
        </button>
      </div>
    </div>
  </section>
);

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  name: getName(loginState),
  password: getPassword(loginState),
  loading: getLoading(loginState),
});
const mapDispatchToProps = {
  closeLoginModalD: closeLoginModal,
  seNameD: setName,
  setPasswordD: setPassword,
  checkAdminD: checkAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
