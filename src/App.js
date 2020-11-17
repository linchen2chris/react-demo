import "antd/dist/antd.css";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import AntdForm from "./01-react-hook-form-antd/AntdForm";
import CheckboxExample from "./02-formik-antd/multipleSelectDemo";
import EventsForm from "./04-formik-array-modal/EventsForm";
import EventsListener from "./00-rxjs-events/EventsListener";
import FormikForm from "./02-formik-antd/FormikForm";
import RHFForm from "./01-react-hook-form-antd/RHFForm";
import AntSelect from "./03-testing-library/AntdSelect";

function App() {
  return (
    <Router>
      <div>
        <nav> <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">事件触发器调研</Link>
            </li>
            <li>
              <Link to="/rhf-form">RHF form</Link>
            </li>
            <li>
              <Link to="/checkbox">checkbox</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/events">
            <EventsListener />
          </Route>
          <Route path="/rhf-form">
            <RHFForm />
          </Route>
          <Route path="/ant-form">
            <AntdForm />
          </Route>
          <Route path="/formik-form">
            <FormikForm />
          </Route>
          <Route path="/formik-field-array">
            <EventsForm />
          </Route>
          <Route path="/checkbox">
            <CheckboxExample />
          </Route>
          <Route path="/select">
            <AntSelect onChange={console.log} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
