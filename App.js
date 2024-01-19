import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

function Home() {
  return <h2>Home</h2>;
}

function LoginLogout() {
  return <h2>Login/Logout</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login-logout">Login/Logout</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login-logout" component={LoginLogout} />
          <Route path="/registration" component={RegistrationForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
