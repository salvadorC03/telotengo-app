import { View } from "react-native";
import { styles } from "./styles";

export default function WrapperView(props) {
  return <View style={styles.container}>{props.children}</View>;
}
