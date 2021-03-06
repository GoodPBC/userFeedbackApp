//this is our main view layer file
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import all action creators from index.js and assign to actions object
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
const Dashboard = () => <h2>Dashboard</h2>;
const CreateLoor = () => <h2>Create Loor</h2>;
const ViewLoor = () => <h2>View Loor</h2>;
const Analytics = () => <h2>Analytics</h2>;
const Settings = () => <h2>Settings</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/loor/create" component={CreateLoor} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
