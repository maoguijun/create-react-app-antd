// src/App.js
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import routes from './routes'
import './App.less';
import {routePath} from './config';

class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect exact path={routePath.base} to={routePath.excel2json}/>
            <BaseLayout>
              {routes.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))}
            </BaseLayout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;