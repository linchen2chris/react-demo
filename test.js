var { from, Subject, AsyncSubject, BehaviorSubject } = require('rxjs');
var {concatMap} = require('rxjs/operators');
const sub = new Subject();

// sub.next(1);
// sub.subscribe(x => {
//   console.log('Subscriber A', x);
// });
// sub.next(2); // OUTPUT => Subscriber A 2
// sub.subscribe(x => {
//   console.log('Subscriber B', x);
// });
// sub.next(3); // O


// const subA = new AsyncSubject();

// subA.subscribe(x => console.log('first', x));

// subA.next(123); //nothing logged

// subA.complete(); //456, 456 logged by both subscribers
// subA.subscribe(x =>console.log('second', x));

// subA.next(456); //nothing logged
// // subA.complete(); //456, 456 logged by both subscribers

// const bsubject = new BehaviorSubject(123);

// // two new subscribers will get initial value => output: 123, 123
// bsubject.subscribe(console.log);
// bsubject.subscribe(console.log);

// // two subscribers will get new value => output: 456, 456
// bsubject.next(456);

// // new subscriber will get latest value (456) => output: 456
// bsubject.subscribe(console.log);

// // all three subscribers will get new value => output: 789, 789, 789
// bsubject.next(789);

var a = [1,2,3,4];

const todoAsync = (x) => new Promise((resolve) => setTimeout(() => {console.log(11111, x); resolve("done")}, 3000));
from(a).pipe(concatMap(todoAsync)).subscribe(console.log);
