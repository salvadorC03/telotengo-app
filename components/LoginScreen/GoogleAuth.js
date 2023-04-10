import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

export default function GoogleAuth(props) {
  GoogleSignin.configure({
    webClientId:
      "1019675343968-87dlsgtp50oouvsgjrp18aaherp9kil0.apps.googleusercontent.com",
  });

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      props.setIsLoading(true);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      props.onError(error);
    }
    props.setIsLoading(false);
  }
  return (
    <GoogleSigninButton
      disabled={props.isLoading}
      style={{ width: 60, height: 60 }}
      onPress={onGoogleButtonPress}
    />
  );
}
