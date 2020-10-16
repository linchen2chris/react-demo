import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";

import EventsListener from './00-rxjs-events/EventsListener';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">事件触发器调研</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/events">
          <EventsListener />
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App;
