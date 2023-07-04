import { Text, View, ActivityIndicator, Dimensions } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/colors";

function Messenger() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white }}
    ></SafeAreaView>
  );
}

export default Messenger;