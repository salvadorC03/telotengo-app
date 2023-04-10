import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";

export const Context = createContext({
  user: {},
  initializing: true,
  selectedShop: {},
  setSelectedShop: (shop) => {},
});

export default function ContextProvider(props) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [selectedShop, setSelectedShop] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const contextValue = {
    user,
    initializing,
    selectedShop,
    setSelectedShop,
  };

  if (initializing) {
    return null;
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}
