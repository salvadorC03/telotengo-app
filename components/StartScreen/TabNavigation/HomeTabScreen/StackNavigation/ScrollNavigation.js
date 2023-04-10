import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView, Text } from "react-native";
import FolderIcon from "../../../../../assets/folder-icon.svg";
import styles from "../../../../../styles/StartScreen/TabNavigation/HomeTabScreen.styles";

export default function ScrollNavigation() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }} horizontal={true}>
      <Pressable
      onPress={() => navigation.navigate("ClothingScreen")}
        style={{ ...styles["scroll-item"], backgroundColor: "#026666" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>ROPA</Text>
      </Pressable>
      <Pressable
      onPress={() => navigation.navigate("FoodScreen")}
        style={{ ...styles["scroll-item"], backgroundColor: "#FF814B" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>COMIDA</Text>
      </Pressable>
      <Pressable
       onPress={() => navigation.navigate("JewelryScreen")}
        style={{ ...styles["scroll-item"], backgroundColor: "#05A2FF" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>ACCESORIOS</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("TravelScreen")}
        style={{ ...styles["scroll-item"], backgroundColor: "#E9027E" }}
      >
        <FolderIcon style={styles["folder-icon"]} />
        <Text style={styles["scroll-item-text"]}>VIAJES</Text>
      </Pressable>
    </ScrollView>
  );
}
