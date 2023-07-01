import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { loginStyles } from "../../styles/auth";
import { welcomeStyles } from "../../styles/welcome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { Dimensions } from "react-native";
import {
  SIZES,
  SPACING,
  ELEVATION,
  BORDER_RADIUS,
} from "../../constants/sizes";
import { icon } from "../../constants/image";
import { facebook, google, apple } from "../../constants/icon";
import Social from "../../components/login/social";

const { width, height } = Dimensions.get("window");

const index = () => {
  return (
    <ScrollView>
      <SafeAreaView style={loginStyles.container}>
        <Text style={welcomeStyles.welcomeText1}>Happy Seeing you Again</Text>

        <View style={{}}>
          <Image
            source={icon}
            style={{ width: 80, height: 80, resizeMode: "contain" }}
          />
        </View>

        <Text
          style={[
            welcomeStyles.welcomeText2,
            { fontSize: SIZES.large, marginTop: SPACING.medium },
          ]}
        >
          Free Login
        </Text>

        <KeyboardAwareScrollView>
          <View style={{ flexDirection: "column", gap: 6 }}>
            <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
              Email
            </Text>
            <TextInput
              style={{
                borderWidth: 3,
                borderColor: COLORS.primary,
                width: width - 50,
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 12,
              }}
            />
          </View>
        </KeyboardAwareScrollView>

        <KeyboardAwareScrollView>
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              marginTop: SPACING.medium,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
              Password
            </Text>
            <TextInput
              style={{
                borderWidth: 3,
                borderColor: COLORS.primary,
                width: width - 50,
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 12,
              }}
              secureTextEntry={true}
            />
          </View>
        </KeyboardAwareScrollView>
        <Text
          style={[
            welcomeStyles.welcomeText2,
            {
              fontSize: SIZES.medium,
              marginTop: SPACING.medium,
              color: COLORS.secondary,
            },
          ]}
        >
          Forgot password
        </Text>

        <View style={{ width: width, paddingHorizontal: 25 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 25,
              alignContent: "center",
              justifyContent: "center",
              padding: 12,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                color: "#fff",
                fontSize: 17,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[loginStyles.loginOrBarContainer]}>
          <View style={[loginStyles.loginOrBar]}></View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: FONTS.medium,
              fontSize: 17,
              marginHorizontal: 10,
            }}
          >
            OR
          </Text>
          <View style={[loginStyles.loginOrBar]}></View>
        </View>

        <View style={[loginStyles.loginOrBarContainer]}>
          <Social image={facebook} />
          <Social image={google} />
          <Social image={apple} />
        </View>

        <View style={[loginStyles.loginOrBarContainer]}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: FONTS.medium,
              fontSize: 17,
              marginHorizontal: 10,
            }}
          >
            Don't have and Account?
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: FONTS.medium,
              fontSize: 17,
              marginHorizontal: 10,
              color: COLORS.primary
            }}
          >
            Sing Up
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;
