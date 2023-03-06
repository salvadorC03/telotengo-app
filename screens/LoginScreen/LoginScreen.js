import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../../styles/LoginScreen/LoginScreen.styles";
import Logo1 from "../../assets/logo1.svg";
import Logo2 from "../../assets/logo2.svg";
import LoginForm from "../../components/LoginScreen/LoginForm";
import { useErrorMessage } from "../../hooks/useErrorMessage";
import { useLoading } from "../../hooks/useLoading";
import auth from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import RegisterForm from "../../components/LoginScreen/RegisterForm";
import GoogleAuth from "../../components/LoginScreen/GoogleAuth";
import { ActivityIndicator } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

export default function LoginScreen() {
  const getErrorMessage = useErrorMessage();
  const [isRegistering, setIsRegistering] = useState(false);
  const loadingState = useLoading();

  useEffect(loadingState.cleanup, [loadingState.message]);

  async function loginHandler(email, password) {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      loadingState.setMessage(<Text>{getErrorMessage(error.message)}</Text>);
    }
    loadingState.setIsLoading(false);
  }

  async function registerHandler(
    firstName,
    lastName,
    email,
    password,
    phoneNumber
  ) {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({
        displayName: `${firstName + " " + lastName}`,
        phoneNumber,
      });
      loadingState.setMessage(<Text>Usuario creado exitosamente.</Text>);
    } catch (error) {
      loadingState.setMessage(<Text>{getErrorMessage(error.message)}</Text>);
    }
    loadingState.setIsLoading(false);
  }

  return (
    <>
      <Spinner color="purple" size={60} visible={loadingState.isLoading} />
      <View style={styles.body} />
      <View style={styles.logo}>{!isRegistering ? <Logo1 /> : <Logo2 />}</View>
      <Text style={styles["header-text"]}>TE LO TENGO</Text>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles["welcome-text"]}>BIENVENIDX</Text>
          {!isRegistering ? (
            <>
              <LoginForm
                message={loadingState.message}
                onLogin={loginHandler}
              />
            </>
          ) : (
            <RegisterForm
              message={loadingState.message}
              onRegister={registerHandler}
            />
          )}
          {!isRegistering && (
            <Text style={{ ...styles["options-text"], marginTop: "5%" }}>
              ¿Olvidaste tu contraseña?
            </Text>
          )}
          <Pressable
            disabled={loadingState.isLoading}
            onPress={() => {
              loadingState.setIsLoading(true);
              setTimeout(() => {
                setIsRegistering((prevState) => !prevState);
                loadingState.setIsLoading(false);
              }, 500);
            }}
          >
            <Text
              style={{
                ...styles["options-text"],
                marginTop: !isRegistering ? "5%" : "6%",
              }}
            >
              {!isRegistering ? "¿No tienes cuenta?" : "¿Ya tienes una cuenta?"}
            </Text>
            <Text
              style={{
                ...styles["options-text"],
                marginBottom: isRegistering ? "3%" : 0,
              }}
            >
              {!isRegistering ? "REGÍSTRATE" : "INICIAR SESIÓN"}
            </Text>
          </Pressable>
          {!isRegistering && (
            <View
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
              }}
            >
              <GoogleAuth
                setIsLoading={loadingState.setIsLoading}
                onError={(error) =>
                  loadingState.setMessage(<Text>{error.message}</Text>)
                }
              />
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}
