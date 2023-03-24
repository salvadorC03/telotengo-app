import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { useContext, useState } from "react";
import { Context } from "../../../../../store/context";
import SearchIcon from "../../../../../assets/search-icon.svg";
import ScrollNavigation from "./ScrollNavigation";
import styles from "../../../../../styles/StartScreen/TabNavigation/HomeTabScreen.styles";
import SearchIconSecondary from "../../../../../assets/search-icon-secondary.svg";
import LocationIconSecondary from "../../../../../assets/location-icon-secondary.svg";
import MenuIcon from "../../../../../assets/menu-icon.svg";
import PersonIconActive from "../../../../../assets/person-icon-active.svg";
import PersonIconInactive from "../../../../../assets/person-icon-inactive.svg";
import PetIconInactive from "../../../../../assets/pet-icon-inactive.svg";
import PetIconActive from "../../../../../assets/pet-icon-active.svg";

export default function HomeStackScreen() {
  const [pickedInterest, setPickedInterest] = useState("medicine");
  const user = useContext(Context).user;

  const interestButtonStyles = (interestName) => {
    return interestName === pickedInterest
      ? styles["active-button-secondary"]
      : styles["inactive-button-secondary"];
  };

  const interestButtonTextStyles = (interestName) => {
    return interestName === pickedInterest
      ? styles["button-text-secondary"]
      : styles["inactive-button-text-secondary"];
  };

  const getDisplayName = () => {
    const nameSplit = user.displayName.split(" ");
    const firstName = nameSplit[0];
    const lastNameAbbr = nameSplit[1].substring(0, 1);
    return firstName + " " + lastNameAbbr + ".";
  };

  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "3%",
        }}
      >
        <View style={{ width: "50%" }}>
          <Pressable>
            <MenuIcon width={25} height={25} />
          </Pressable>
        </View>
        <View
          style={{
            width: "50%",
            flexDirection: "row-reverse",
          }}
        >
          <Image
            style={{
              width: 55,
              height: 55,
              borderRadius: 30,
            }}
            source={{ uri: user.photoURL }}
          />
        </View>
      </View>
      <View style={{ marginBottom: "5%" }}>
        <Text style={styles["header-text"]}>Hola!</Text>
        <Text style={styles["header-text"]}>{getDisplayName()}</Text>
      </View>
      <ScrollView>
        <View style={{ marginBottom: "5%" }}>
          <TextInput
            placeholderTextColor="#B3B3B3"
            right={<TextInput.Icon size={30} icon={SearchIcon} />}
            underlineColor="transparent"
            style={styles["search-input-primary"]}
            placeholder="¿Qué estás buscando?"
          />
        </View>
        <ScrollNavigation />
        <Text
          style={{
            ...styles["header-text"],
            fontSize: 28,
            marginTop: "7%",
            marginBottom: "5%",
          }}
        >
          Tus intereses
        </Text>
        <View
          style={{
            marginLeft: "5%",
            marginBottom: "3%",
            flexDirection: "row",
          }}
        >
          <Pressable
            onPress={() => setPickedInterest("medicine")}
            style={{
              ...styles["button-secondary"],
              ...interestButtonStyles("medicine"),
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {pickedInterest === "medicine" ? (
                <PersonIconActive width={20} height={20} />
              ) : (
                <PersonIconInactive width={20} height={20} />
              )}
              <Text style={interestButtonTextStyles("medicine")}>Medicina</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setPickedInterest("pets")}
            style={{
              ...styles["button-secondary"],
              ...interestButtonStyles("pets"),
              marginLeft: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {pickedInterest === "pets" ? (
                <PetIconActive width={20} height={20} />
              ) : (
                <PetIconInactive width={20} height={20} />
              )}
              <Text style={interestButtonTextStyles("pets")}>Mascotas</Text>
            </View>
          </Pressable>
        </View>
        <View style={{ marginBottom: "3%" }}>
          <TextInput
            left={<TextInput.Icon icon={SearchIconSecondary} size={30} />}
            placeholderTextColor="#B3B3B3"
            placeholder="Medicina General, Pediatría."
            style={styles["search-input-secondary"]}
            underlineColor="transparent"
          />
        </View>
        <View style={{ marginBottom: "3%" }}>
          <TextInput
            left={<TextInput.Icon icon={LocationIconSecondary} size={30} />}
            placeholderTextColor="#B3B3B3"
            placeholder="Caracas, San José"
            style={styles["search-input-secondary"]}
            underlineColor="transparent"
          />
        </View>
        <Pressable
          style={{
            ...styles.button,
            ...styles["enabled-button"],
            marginBottom: "10%",
          }}
        >
          <Text style={styles["button-text"]}>BUSCAR</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
