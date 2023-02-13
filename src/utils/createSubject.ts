import { Observer, Subject, Subscription } from '../types/subjects';

export default function createSubject<T>(): Subject<T> {
  let _observers: Observer<T>[] = [];

  const next = (value: T) => {
    for (const observer of _observers) {
      observer.next(value);
    }
  };

  const subscribe = (observer: Observer<T>): Subscription => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      },
    };
  };

  const unsubscribe = () => {
    _observers = [];
  };

  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe,
  };
}
