import { Observable } from "rxjs/Observable";

const onSubscrible = observer => {
  observer.next(1);
  observer.error("Something wrong");
  observer.complete();
};
const source$ = new Observable(onSubscrible);
const theObserver = {
  next: item => console.log(item),
  error: err => console.log(err),
  complete: () => console.log("no more data")
};

source$.subscribe(theObserver);
