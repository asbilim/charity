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
import {
  SIZES,
  SPACING,
  BORDER_RADIUS,
  ELEVATION,
} from "../../constants/sizes";
import { Dimensions } from "react-native";
import { icon } from "../../constants/image";
import { facebook, google, apple } from "../../constants/icon";
import { Backend_url } from "../../constants/string";
import Social from "../../components/login/social";
import { Controller, useForm } from "react-hook-form";
import ToastManager, { Toast } from "toastify-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

const { width, height } = Dimensions.get("window");

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const getElement = async () => {
      await AsyncStorage.getItem("email").then((value) => {
        setEmail(value);
      });
    };

    getElement();
  }, []);

  console.log(email);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const userAlready = await axios.post(`${Backend_url}/auth/verify-email`, {
      email: data.email,
    });

    if (userAlready.data.error) {
      return Toast.error("Sorry this Email is already used");
    } else {
      await AsyncStorage.setItem("email", data.email);
      await AsyncStorage.setItem("password", data.password);
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={[loginStyles.container]}>
        <ToastManager width={width * 0.9} positionValue={10} />
        <Text style={welcomeStyles.welcomeText1}>Welcome to CharitEase</Text>

        <View style={{}}>
          <Image
            source={icon}
            style={{ width: 80, height: 80, resizeMode: "contain" }}
          />
        </View>

        <Text
          style={[
            welcomeStyles.welcomeText2,
            { fontSize: SIZES.large, marginTop: SPACING.small },
          ]}
        >
          Create Account
        </Text>

        <KeyboardAwareScrollView>
          {/* email */}
          <View style={{ flexDirection: "column", gap: 4 }}>
            <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
              Email
            </Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    borderWidth: 3,
                    borderColor: COLORS.primary,
                    width: width - 50,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 12,
                  }}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  defaultValue={email ? email : ""}
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.email && (
              <Text
                style={{
                  color: COLORS.error,
                  fontFamily: FONTS.bold,
                }}
              >
                This is required.
              </Text>
            )}
          </View>

          {/* password */}
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              marginTop: SPACING.small,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
              password
            </Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    borderWidth: 3,
                    borderColor: COLORS.primary,
                    width: width - 50,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 12,
                  }}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry={true}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.password && (
              <Text
                style={{
                  color: COLORS.error,
                  fontFamily: FONTS.bold,
                }}
              >
                This is required.
              </Text>
            )}
          </View>

          {/* password */}
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              marginTop: SPACING.small,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
              Confirm password
            </Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    borderWidth: 3,
                    borderColor: COLORS.primary,
                    width: width - 50,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 12,
                  }}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry={true}
                />
              )}
              name="confirmpassword"
              rules={{
                // required: "Please confirm your password",
                validate: (value, { password }) =>
                  value === password || "Passwords do not match",
              }}
              defaultValue=""
            />
            {errors.confirmpassword && (
              <Text
                style={{
                  color: COLORS.error,
                  fontFamily: FONTS.bold,
                }}
              >
                Passwords don't match!
              </Text>
            )}
          </View>
        </KeyboardAwareScrollView>

        <View style={{ width: width, paddingHorizontal: 25 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 25,
              alignContent: "center",
              justifyContent: "center",
              padding: 12,
              marginTop: SPACING.medium,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                color: "#fff",
                fontSize: 17,
              }}
            >
              Register
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
              color: COLORS.primary,
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
