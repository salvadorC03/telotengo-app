import { Button, Image, Text, View } from "react-native";
import WrapperView from "../../../WrapperView";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useLoading } from "../../../hooks/useLoading";
import Spinner from "react-native-loading-spinner-overlay";

export default function OptionsTabScreen() {
  const errorHandler = (error) => console.log(error.message);
  const loadingState = useLoading();

  async function logoutHandler() {
    loadingState.setIsLoading(true);
    GoogleSignin.revokeAccess().catch(errorHandler);
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
    loadingState.setIsLoading(false);
  }

  return (
    <WrapperView>
      <Spinner
        color="purple"
        size={60}
        visible={loadingState.isLoading || !auth().currentUser}
      />
      <Image
        source={{ uri: auth().currentUser?.photoURL }}
        style={{ width: 150, height: 150, borderRadius: 150, marginBottom: 50 }}
      ></Image>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Información del usuario
      </Text>
      <View style={{ width: "80%" }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold" }}>Nombre:</Text>
          <Text>{auth().currentUser?.displayName}</Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold" }}>Correo Electrónico:</Text>
          <Text>{auth().currentUser?.email}</Text>
        </View>
      </View>
      <View style={{ marginTop: 60 }}>
        <Button title="Cerrar sesión" onPress={logoutHandler} />
      </View>
    </WrapperView>
  );
}
