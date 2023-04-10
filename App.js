import { useContext } from "react";
import StartScreen from "./screens/StartScreen/StartScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ContextProvider, { Context } from "./store/context";
import { NavigationContainer } from "@react-navigation/native";

export default function AppRoot() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </ContextProvider>
  );
}

function App() {
  const context = useContext(Context);

  return <>{context.user ? <StartScreen /> : <LoginScreen />}</>;
}
