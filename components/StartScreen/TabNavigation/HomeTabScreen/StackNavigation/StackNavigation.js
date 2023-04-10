import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClothingScreen from "./ClothingScreen";
import FoodScreen from "./FoodScreen";
import HomeStackScreen from "./HomeStackScreen";
import JewelryScreen from "./JewelryScreen";
import TravelScreen from "./TravelScreen";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: "",
      }}
      initialRouteName="StartScreen"
    >
      <Stack.Screen
        name="StartScreen"
        options={{ headerShown: false }}
        component={HomeStackScreen}
      />
      <Stack.Screen name="TravelScreen" component={TravelScreen} />
      <Stack.Screen name="FoodScreen" component={FoodScreen} />
      <Stack.Screen name="ClothingScreen" component={ClothingScreen} />
      <Stack.Screen name="JewelryScreen" component={JewelryScreen} />
    </Stack.Navigator>
  );
}
