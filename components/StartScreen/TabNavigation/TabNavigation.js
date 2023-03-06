import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabScreen from "./HomeTabScreen/HomeTabScreen";
import OptionsTabScreen from "./OptionsTabScreen";
import HomeActiveIcon from "../../../assets/home-active-icon.svg";
import HomeInactiveIcon from "../../../assets/home-inactive-icon.svg";
import UserActiveIcon from "../../../assets/user-active-icon.svg";
import UserInactiveIcon from "../../../assets/user-inactive-icon.svg";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeActiveIcon /> : <HomeInactiveIcon />;
          },
        }}
        name="HomeTabScreen"
        component={HomeTabScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          headerTitle: "Opciones",
          title: "Opciones",
          tabBarIcon: ({ focused }) => {
            return focused ? <UserActiveIcon /> : <UserInactiveIcon />;
          },
        }}
        name="OptionsTabScreen"
        component={OptionsTabScreen}
      />
    </Tab.Navigator>
  );
}
