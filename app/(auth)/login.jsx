import { SafeAreaView, Text } from "react-native";
import { loginStyles } from "../../styles/auth";
import { welcomeStyles } from "../../styles/welcome";

const index = () => {
  return (
    <SafeAreaView style={loginStyles.container}>
      <Text style={welcomeStyles.welcomeText1}>
        Happy Seeing you Again
      </Text>
    </SafeAreaView>
  );
};

export default index;
