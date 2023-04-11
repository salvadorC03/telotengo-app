import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import useInput from "../../hooks/useInput";
import styles from "../../styles/LoginScreen/LoginScreen.styles";
import TextIcon from "../../assets/text-icon.svg";
import EmailIcon from "../../assets/email-icon.svg";

export default function LoginForm(props) {
  const validateFunc = (value) => value.trim().length !== 0;

  const email = useInput(validateFunc);
  const password = useInput(validateFunc);
  let formIsValid = email.isValid && password.isValid;

  function submitHandler() {
    if (!formIsValid) return;

    props.onLogin(email.value, password.value);
  }

  const buttonStyles = formIsValid
    ? { ...styles.button, ...styles["enabled-button"] }
    : { ...styles.button, ...styles["disabled-button"] };

  return (
    <>
      <TextInput
        left={<TextInput.Icon icon={EmailIcon} />}
        underlineColor="transparent"
        value={email.value}
        onChangeText={email.changeHandler}
        style={email.inputStyles(styles)}
        placeholder="Correo electrónico"
      />
      <TextInput
        underlineColor="transparent"
        left={<TextInput.Icon icon={TextIcon} />}
        value={password.value}
        onChangeText={password.changeHandler}
        style={password.inputStyles(styles)}
        placeholder="Contraseña"
      />
      <Pressable
        disabled={!formIsValid}
        style={({pressed}) => {
          return [
            buttonStyles,
            pressed && {opacity: 0.7}
          ]
        }}
        onPress={submitHandler}
      >
        <Text style={styles["button-text"]}>ENTRAR</Text>
      </Pressable>
    </>
  );
}
