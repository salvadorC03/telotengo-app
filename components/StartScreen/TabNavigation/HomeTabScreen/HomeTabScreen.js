import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../../styles/StartScreen/TabNavigation/HomeTabScreen.styles";
import { useContext } from "react";
import { Context } from "../../../../store/context";
import SearchIcon from "../../../assets/search-icon.svg";
import ScrollNavigation from "./ScrollNavigation";

export default function HomeTabScreen() {
  const user = useContext(Context).user;

  return (
    <View style={styles.body}>
      <Image
        style={{ marginLeft: "80%", width: 60, height: 60, borderRadius: 30 }}
        source={{ uri: user.photoURL }}
      />
      <Text style={styles["header-text"]}>Hola!</Text>
      <Text style={styles["header-text"]}>{user.displayName}</Text>
      <TextInput
        right={<TextInput.Icon size={30} icon={SearchIcon} />}
        underlineColor="transparent"
        style={styles["search-input"]}
        placeholder="¿Qué estás buscando?"
      />
      <ScrollNavigation />
    </View>
  );
}
