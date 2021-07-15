import { Switch, Route } from 'react-router';
import './App.css';

import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
import style from './style.module.css';

import Header from './components/Header';
import CategoryPage from './components/CategoryPage';
import MainPage from './components/MainPage';
import StatisticsPage from './components/StatisticsPage';
import { getLogin, getModal } from './selectors';
import { closeModal, StateInterface } from './reducers/state';
import { closeLoginModal, LoginInterface } from './reducers/login';
import AdminPage from './components/AdminPage';

interface MyInterface {
  modal: string,
  close: Function,
  closeLoginModalD: Function,
  login: boolean,
}

const App = ({
  modal, close, closeLoginModalD, login,
}: MyInterface) => {
  function eventTarget(event: React.MouseEvent<Element, MouseEvent>) {
    const { target } = event;
    if (target) {
      if (!login) {
        if ((target as HTMLElement).localName !== 'ul' && (target as HTMLElement).localName !== 'button') {
          close();
        }
      } else if ((target as HTMLElement).localName === 'section') {
        closeLoginModalD();
      }
    }
  }
  return (
    <div
      aria-hidden="true"
      onClick={modal ? (e: React.MouseEvent<Element, MouseEvent>) => eventTarget(e) : () => {}}
      className={style.app}
    >
      <Switch>
        <Route path="/category/:name" component={Header} />
        <Route path="/statistics" component={Header} />
        <Route exact path="/" component={Header} />
      </Switch>
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/category/:name" component={CategoryPage} />
        <Route path="/statistics" component={StatisticsPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

interface Props {
  data: StateInterface,
  loginState: LoginInterface
}

const mapStateToProps = ({ data, loginState }: Props) => ({
  modal: getModal(data),
  login: getLogin(loginState),
});
const mapDispatchToProps = {
  close: closeModal,
  closeLoginModalD: closeLoginModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App as FunctionComponent);
