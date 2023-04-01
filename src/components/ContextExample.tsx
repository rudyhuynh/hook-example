import React, { createContext, useState } from "react";

type AppContextType = {};

const AppContext = createContext<AppContextType>({});

export const App = () => {
  const [app, setApp] = useState<AppContextType>();
  return <AppContext.Provider value={app}></AppContext.Provider>;
};
