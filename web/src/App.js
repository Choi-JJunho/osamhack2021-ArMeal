import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavContainer from 'containers/NavContainer';
import HeaderContainer from 'containers/HeaderContainer';

import HomePage from 'pages/HomePage';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';
import DashboardPage from 'pages/DashboardPage';
import SatisfyPage from 'pages/SatisfyPage';
import DatePage from 'pages/DatePage';
import SidedishPage from 'pages/SidedishPage';
import MenuPage from 'pages/MenuPage';
import SelfPage from 'pages/SelfPage';
import ManagementPage from 'pages/ManagementPage';
import SidedishSpecPage from 'pages/SidedishSpecPage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavContainer />
        <div className="Wrapper">
          <HeaderContainer />
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/satisfy" component={SatisfyPage} />
          <Route path="/date" component={DatePage} />
          <Route exact path="/sidedish" component={SidedishPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/self" component={SelfPage} />
          <Route path="/management" component={ManagementPage} />
          <Route path="/sidedish/:id" component={SidedishSpecPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
