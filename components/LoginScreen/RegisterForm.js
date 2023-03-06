import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import useInput from "../../hooks/useInput";
import styles from "../../styles/LoginScreen/LoginScreen.styles";
import EmailIcon from "../../assets/email-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import TextIcon from "../../assets/text-icon.svg";

export default function RegisterForm(props) {
  const validateFunc = (value) => value.trim().length !== 0;

  const firstName = useInput(validateFunc);
  const lastName = useInput(validateFunc);
  const email = useInput(validateFunc);
  const password = useInput(validateFunc);
  const phoneNumber = useInput(validateFunc);

  let formIsValid =
    firstName.isValid &&
    lastName.isValid &&
    email.isValid &&
    password.isValid &&
    phoneNumber.isValid;

  function submitHandler() {
    if (!formIsValid) return;

    props.onRegister(
      firstName.value,
      lastName.value,
      email.value,
      password.value,
      phoneNumber.value
    );
  }

  const buttonStyles = formIsValid
    ? { ...styles.button, ...styles["enabled-button"] }
    : { ...styles.button, ...styles["disabled-button"] };

  return (
    <>
      <TextInput
        underlineColor="transparent"
        value={firstName.value}
        onChangeText={firstName.changeHandler}
        style={firstName.inputStyles(styles)}
        placeholder="Nombre"
      />
      <TextInput
        underlineColor="transparent"
        value={lastName.value}
        onChangeText={lastName.changeHandler}
        style={lastName.inputStyles(styles)}
        placeholder="Apellido"
      />
      <TextInput
        keyboardType="email-address"
        left={<TextInput.Icon icon={EmailIcon} />}
        underlineColor="transparent"
        value={email.value}
        onChangeText={email.changeHandler}
        style={email.inputStyles(styles)}
        placeholder="Correo electrónico"
      />
      <TextInput
        left={<TextInput.Icon icon={TextIcon} />}
        underlineColor="transparent"
        value={password.value}
        onChangeText={password.changeHandler}
        style={password.inputStyles(styles)}
        placeholder="Contraseña"
      />
      <TextInput
        keyboardType="phone-pad"
        left={<TextInput.Icon icon={PhoneIcon} />}
        underlineColor="transparent"
        value={phoneNumber.value}
        onChangeText={phoneNumber.changeHandler}
        style={phoneNumber.inputStyles(styles)}
        placeholder="Teléfono"
      />
      {props.message && <View style={styles.message}>{props.message}</View>}
      <Pressable
        disabled={!formIsValid}
        style={buttonStyles}
        onPress={submitHandler}
      >
        <Text style={styles["button-text"]}>REGISTRAR</Text>
      </Pressable>
    </>
  );
}
