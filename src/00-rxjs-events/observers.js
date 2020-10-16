import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

export const dispatch = (actions, callbacks) => {
  return (e) => {
    from(actions)
      .pipe(
        filter((action) => action.type === "openURL"),
        map((action) => action.data.url)
      )
      .subscribe(openURLObserver);
    from(actions)
      .pipe(filter((action) => action.type === "submit"))
      .subscribe(() => {
        console.log("Line 41");
      });
    from(actions)
      .pipe(filter((action) => action.type === "showSpinner"))
      .subscribe(() => {
        callbacks.setShowSpinner(true);
      });
  };
};


const openURLObserver = {
	next: (url) => window.open(url),
	error: err => console.error('open url failed', err),
	complete: () => console.log('open url done'),
};
