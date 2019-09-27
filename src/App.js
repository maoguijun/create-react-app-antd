// src/App.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import routes from './routes';
import './App.less';
import { routePath } from './config';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <BaseLayout>
            </BaseLayout> */}
            {routes.map(({ path, component }, index) => (
              <Route
                exact
                key={path || index}
                path={path}
                component={component}
              />
            ))}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
