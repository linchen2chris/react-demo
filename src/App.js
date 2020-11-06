import 'antd/dist/antd.css';

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";

import AntdForm from './01-react-hook-form-antd/AntdForm';
import EventsListener from './00-rxjs-events/EventsListener';
import FormikArrayForm from './02-formik-antd/FormikArrayForm';
import FormikForm from './02-formik-antd/FormikForm';
import RHFForm from './01-react-hook-form-antd/RHFForm';

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
            <Link to="/rhf-form">RHF form</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/events">
          <EventsListener />
        </Route>
        <Route path="/rhf-form"><RHFForm/></Route>
        <Route path="/ant-form"><AntdForm/></Route>
        <Route path="/formik-form"><FormikForm/></Route>
        <Route path="/formik-field-array"><FormikArrayForm/></Route>
      </Switch>
    </div>
  </Router>
}

export default App;
