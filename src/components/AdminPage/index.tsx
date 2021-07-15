import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { LoginInterface } from '../../reducers/login';
import { getAuth } from '../../selectors';
import AdminCategories from './AdminCategories';
import AdminHeader from './AdminHeader';
import AdminWords from './AdminWords';

const AdminPage = ({ auth }: Record<string, boolean>) => {
  if (!auth) {
    return <Redirect from="/admin" to="/" />;
  }
  return (
    <div>
      <AdminHeader />
      <Switch>
        <Route exact path="/admin" component={AdminCategories} />
        <Route exact path="/admin/categories/:name" component={AdminWords} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ loginState }: Record<string, LoginInterface>) => ({
  auth: getAuth(loginState),
});

export default connect(mapStateToProps)(AdminPage as FunctionComponent);
