import "./App.css";

import { Spin } from "antd";
import { fromEvent } from "rxjs";
import React from "react";
import { LoadingOutlined } from '@ant-design/icons';


function App() {
  const [showSpinner, setShowSpinner] = React.useState(false);
  const events = [
    {
      id: "linchen",
      type: "click",
      action: [{ type: "openURL", url: "http://www.baidu.com" }],
    },
    { id: "refresh", type: "click", action: [{ type: "spinner" }] },
    {
      id: "submit",
      type: "click",
      action: [{ type: "submit" }, { type: "spinner" }],
    },
  ];
  const openUrlObserver = (url) => ({
    next: () => {
      console.log("Line 21", url);
      window.open(url);
    },
    error: (err) => console.error("open url error", err),
    complete: () => console.log("open url done"),
  });
  const submitObserver = {
    next: () => console.log("submiting"),
    error: (err) => console.error("submit error", err),
    complete: () => console.log("submit done"),
  };

  const spinnerObserver = {
    next: () => {
      console.log("Line 32");
      setShowSpinner(true);
    },
    error: (err) => console.error("loading error", err),
    complete: () => {console.log("loaded done"); setShowSpinner(false)}
  };
  const dispatch = (action) => {
    console.log("Line 33", action);
    switch (action.type) {
      case "openURL":
        return openUrlObserver(action.url);
      case "submit":
        return submitObserver;
      case "spinner":
        return spinnerObserver;
    }
  };

  React.useEffect(() => {
    events.map((event) => {
      event.action.map((action) => {
        fromEvent(document.getElementById(event.id), event.type).subscribe(
          dispatch(action)
        );
      });
    });
  }, [
    events,
    openUrlObserver,
    submitObserver,
    spinnerObserver,
    setShowSpinner,
  ]);

  // const [linchenCallback] = useEventCallback((event$) =>
  //   event$.pipe(
  //     filter(e => e.target.id === 'linchen' && e.type === 'click'),
  //     map(e => window.open('www.baicu.com')),
  //   ));

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="App">
      <Spin size={"large"} indicator={antIcon} spinning={showSpinner} tip="Loading...">
        <header className="App-header">
          <button id="linchen">openbaidu</button>
          <button id="refresh">refresh</button>
          <button id="submit">submit</button>
        </header>
      </Spin>
    </div>
  );
}

export default App;
