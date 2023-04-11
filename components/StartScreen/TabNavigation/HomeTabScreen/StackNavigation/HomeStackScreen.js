import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Modal,
  Button,
} from "react-native";
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
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useLoading } from "../../../../../hooks/useLoading";
import Spinner from "react-native-loading-spinner-overlay";
import { LoginManager } from "react-native-fbsdk-next";

export default function HomeStackScreen() {
  GoogleSignin.configure({
    webClientId:
      "1019675343968-87dlsgtp50oouvsgjrp18aaherp9kil0.apps.googleusercontent.com",
  });

  const errorHandler = (error) => console.log(error.message);
  const loadingState = useLoading();

  async function logoutHandler() {
    loadingState.setIsLoading(true);
    GoogleSignin.revokeAccess().catch(errorHandler);
    LoginManager.logOut();
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
    loadingState.setIsLoading(false);
  }

  const [pickedInterest, setPickedInterest] = useState("medicine");
  const [showModal, setShowModal] = useState(false);
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
      <Spinner
        color="purple"
        size={60}
        visible={loadingState.isLoading || !auth().currentUser}
      />
      <Modal visible={showModal} transparent>
        <View
          style={{
            height: "100%",
            backgroundColor: "rgba(12,12,12,0.5)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 320,
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: auth().currentUser?.photoURL }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
              }}
            ></Image>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Información del usuario
            </Text>
            <View style={{ width: "80%" }}>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ fontWeight: "bold" }}>Nombre:</Text>
                <Text>{auth().currentUser?.displayName}</Text>
              </View>
              <View style={{ marginBottom: 25 }}>
                <Text style={{ fontWeight: "bold" }}>Correo Electrónico:</Text>
                <Text>{auth().currentUser?.email}</Text>
              </View>
            </View>
            <View>
              <View>
                <Button title="Cerrar sesión" onPress={logoutHandler} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Button onPress={() => setShowModal(false)} title="Cerrar" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "3%",
        }}
      >
        <View style={{ width: "10%" }}>
          <Pressable
            style={({ pressed }) => [
              { borderRadius: 2 },
              pressed && { opacity: 0.2, backgroundColor: "gray" },
            ]}
            onPress={() => setShowModal(true)}
          >
            <MenuIcon width={25} height={25} />
          </Pressable>
        </View>
        <View
          style={{
            width: "90%",
            display: "flex",
            alignItems: "flex-end",
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
