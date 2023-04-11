import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabScreen from "./HomeTabScreen/HomeTabScreen";
import HomeActiveIcon from "../../../assets/home-active-icon.svg";
import HomeInactiveIcon from "../../../assets/home-inactive-icon.svg";
import FolderActiveIcon from "../../../assets/folder-active-icon";
import FolderInactiveIcon from "../../../assets/folder-inactive-icon";
import BellActiveIcon from "../../../assets/bell-active-icon";
import BellInactiveIcon from "../../../assets/bell-inactive-icon";
import UserActiveIcon from "../../../assets/user-active-icon.svg";
import UserInactiveIcon from "../../../assets/user-inactive-icon.svg";
import AddButtonIcon from "../../../assets/add-button-icon.svg";
import { Button } from "react-native";
import React from "react";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  const DefaultComponent = () => {
    return <></>;
  };

  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeActiveIcon /> : <HomeInactiveIcon />;
          },
        }}
        name="HomeTabScreen"
        component={HomeTabScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <FolderActiveIcon /> : <FolderInactiveIcon />;
          },
        }}
        component={DefaultComponent}
        name="Folder"
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <AddButtonIcon />;
          },
        }}
        onPress={() => console.log("HI")}
        children={DefaultComponent}
        name="Add"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <BellActiveIcon /> : <BellInactiveIcon />;
          },
        }}
        component={DefaultComponent}
        name="Bell"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <UserActiveIcon /> : <UserInactiveIcon />;
          },
        }}
        name="User"
        component={DefaultComponent}
      />
    </Tab.Navigator>
  );
}
