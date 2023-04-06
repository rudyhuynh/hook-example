export const slowLogic = () => {
  let nextXms = Date.now() + 100;
  while (nextXms - Date.now() > 0) {
    // do nothing for X milliseconds
  }
};
