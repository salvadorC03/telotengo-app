import { Pressable, ScrollView, Text } from "react-native";
import FolderIcon from "../../../../assets/folder-icon.svg";
import styles from "../../../../styles/StartScreen/TabNavigation/HomeTabScreen.styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function NavigationRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="FoodScreen"/>
    </Stack.Navigator>
  );
}

export default function ScrollNavigation() {
  return (
    <ScrollView style={{ flex: 1 }} horizontal={true}>
      <Pressable
        style={{ ...styles["scroll-item"], backgroundColor: "#026666" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>ROPA</Text>
      </Pressable>
      <Pressable
        style={{ ...styles["scroll-item"], backgroundColor: "#FF814B" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>COMIDA</Text>
      </Pressable>
      <Pressable
        style={{ ...styles["scroll-item"], backgroundColor: "#05A2FF" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>ACCESORIOS</Text>
      </Pressable>

      <Pressable
        style={{ ...styles["scroll-item"], backgroundColor: "#E9027E" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>VIAJES</Text>
      </Pressable>
    </ScrollView>
  );
}
