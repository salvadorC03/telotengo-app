import { LoginButton } from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { Button } from "react-native";

export default function FacebookAuth(props) {
  async function onFacebookButtonPress(error, result) {
    try {
      // Attempt login with permissions
      /*const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);*/
      if (error) throw new Error(error.message);
      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining access token";
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      // Sign-in the user with the credential
      props.setIsLoading(true);
      await auth().signInWithCredential(facebookCredential);
    } catch (error) {
      props.onError(error);
    }
    props.setIsLoading(false);
  }

  return (
    //<LoginButton />
    <LoginButton style={{height: 31, width: 155}} onLoginFinished={onFacebookButtonPress} />
  );
}
