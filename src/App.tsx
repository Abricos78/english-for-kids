import { Switch, Route } from 'react-router';
import './App.css';

import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
import style from './style.module.css';

import Header from './components/Header';
import CategoryPage from './components/CategoryPage';
import MainPage from './components/MainPage';
import StatisticsPage from './components/StatisticsPage';
import { getModal } from './selectors';
import { closeModal, StateInterface } from './reducers/state';

interface MyInterface {
  modal: string,
  close: Function
}

const App = ({ modal, close }: MyInterface) => {
  function eventTarget(event: React.MouseEvent<Element, MouseEvent>) {
    const { target } = event;
    if (target) {
      if ((target as HTMLElement).localName !== 'ul') {
        close();
      }
    }
  }
  return (
    <div
      aria-hidden="true"
      onClick={modal ? (e: React.MouseEvent<Element, MouseEvent>) => eventTarget(e) : () => {}}
      className={style.app}
    >
      <Header />
      <Switch>
        <Route path="/category/:name" component={CategoryPage} />
        <Route path="/statistics" component={StatisticsPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ data }: Record<string, StateInterface>) => ({
  modal: getModal(data),
});
const mapDispatchToProps = {
  close: closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App as FunctionComponent);
