import { Button, Modal, Pressable, ScrollView, Text, View } from "react-native";
import styles from "../../styles/LoginScreen/LoginScreen.styles";
import Logo1 from "../../assets/logo1.svg";
import Logo2 from "../../assets/logo2.svg";
import LoginForm from "../../components/LoginScreen/LoginForm";
import { useErrorMessage } from "../../hooks/useErrorMessage";
import { useLoading } from "../../hooks/useLoading";
import auth from "@react-native-firebase/auth";
import { useContext, useEffect, useState } from "react";
import RegisterForm from "../../components/LoginScreen/RegisterForm";
import GoogleAuth from "../../components/LoginScreen/GoogleAuth";
import Spinner from "react-native-loading-spinner-overlay";
import FacebookAuth from "../../components/LoginScreen/FacebookAuth";
import { Context } from "../../store/context";

export default function LoginScreen() {
  const context = useContext(Context);
  const getErrorMessage = useErrorMessage();
  const [isRegistering, setIsRegistering] = useState(false);
  const loadingState = useLoading();

  function handleError(message) {
    if (message === "Sign in action cancelled") return;
    loadingState.setMessage(getErrorMessage(message));
  }

  async function loginHandler(email, password) {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      handleError(error.message);
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
      loadingState.setMessage("Usuario creado exitosamente");
    } catch (error) {
      handleError(error.message);
    }
    loadingState.setIsLoading(false);
  }

  return (
    <>
      <Modal visible={loadingState.message !== null} transparent>
        <View
          style={{
            height: "100%",
            backgroundColor: "rgba(12,12,12,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 300,
              height: 300,
              borderRadius: 6,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {loadingState.message}
            </Text>
            <Button
              onPress={() => loadingState.setMessage(null)}
              title="Cerrar"
            />
          </View>
        </View>
      </Modal>
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
            <Pressable
              style={({ pressed }) => {
                return [pressed && { opacity: 0.7 }];
              }}
            >
              <Text style={{ ...styles["options-text"], marginTop: "5%" }}>
                ¿Olvidaste tu contraseña?
              </Text>
            </Pressable>
          )}
          <Pressable
            style={({ pressed }) => {
              return [pressed && { opacity: 0.7 }];
            }}
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
                width: "100%",
                marginTop: 30,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <GoogleAuth
                setIsLoading={loadingState.setIsLoading}
                onError={(error) => handleError(error.message)}
              />
              <FacebookAuth
                setIsLoading={loadingState.setIsLoading}
                onError={(error) => handleError(error.message)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}
