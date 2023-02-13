import { Noop } from './utils';

export type Observer<T> = {
  next: (value: T) => void;
};

export type Subscription = {
  unsubscribe: Noop;
};

export type Subject<T> = {
  readonly observers: Observer<T>[];
  subscribe: (value: Observer<T>) => Subscription;
  unsubscribe: Noop;
} & Observer<T>;
