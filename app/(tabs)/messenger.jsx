import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/colors";
import Conversation from "../../components/home/conversation";
import { useRouter } from "expo-router";

function Messenger() {

  const router = useRouter()

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, alignItems: "center" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "../(messages)/message",
              params: { user: "current name" },
            });
          }}
        >
          <Conversation />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "../(messages)/message",
              params: { user: "current name2" },
            });
          }}
        >
          <Conversation />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "../(messages)/message",
              params: { user: "current name3" },
            });
          }}
        >
          <Conversation />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "../(messages)/message",
              params: { user: "current name4" },
            });
          }}
        >
          <Conversation />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "../(messages)/message",
              params: { user: "current name5" },
            });
          }}
        >
          <Conversation />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "../(messages)/message",
              params: { user: "current name" },
            });
          }}
        >
          <Conversation />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Messenger;
