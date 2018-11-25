// src/App.js
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Counter from './containers/counter/container'
import './App.less';

class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/counter" component={Counter}/>
            <Redirect path="/" to="/counter"/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;