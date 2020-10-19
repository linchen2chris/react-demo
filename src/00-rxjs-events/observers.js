import { filter } from 'rxjs/operators';
import { from } from "rxjs";

export const Mydispatch = (actions, callbacks) => {
  return (e) => {
    from(actions)
      .pipe(
        filter((action) => action.type === "openURL"),
      )
      .subscribe(openURLObserver);
    from(actions)
      .pipe(filter((action) => action.type === "refresh"))
      .subscribe(refreshObserver);
  };
};

const openURLObserver = {
  next: (action) => {
    console.log("Line 28", action);
    window.open(action.url);
  },
  error: (err) => console.error("open url failed", err),
  complete: () => console.log("111"),
};

const refreshObserver = {
  next: (action) => {
		console.log("Line 29", action.data.target);
  },
  error: (err) => console.log("Line 43 refresh failed"),
  complete: () => console.log("Line 44", "done"),
};
