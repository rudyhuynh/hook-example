export const slowLogic = (delay = 100) => {
  let nextXms = Date.now() + 100;
  while (nextXms - Date.now() > 0) {
    // do nothing for X milliseconds
  }
};

export const slowHandleFilterLogic = (filterOptions: any[]) => {
  slowLogic();
  return filterOptions;
};
