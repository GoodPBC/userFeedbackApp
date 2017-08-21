//this is our main view layer file
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const CreateLoor = () => <h2>Create Loor</h2>;
const ViewLoor = () => <h2>View Loor</h2>;
const Analytics = () => <h2>Analytics</h2>;
const Settings = () => <h2>Settings</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/loor/create" component={CreateLoor} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
