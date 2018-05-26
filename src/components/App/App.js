import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import Understand from './Understand/Understand';
import Feels from '../Feels/Feels';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import FeedbackComplete from '../FeedbackComplete/FeedbackComplete';
import Admin from '../Admin/Admin';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Last reminder of every day!!</i></h4>
          </header>
          <br />
          <Route exact path='/feels' component={Feels} />
          <Route exact path='/understand' component={Understand} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/feedbackComplete' component={FeedbackComplete} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
