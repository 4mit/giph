export const setToLS = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};

export const debounce = (fn: Function, delay = 500) => {
  let ref: any;

  return function (...args: any) {
    clearTimeout(ref);

    ref = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
