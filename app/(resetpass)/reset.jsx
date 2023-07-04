import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { welcomeStyles } from "../../styles/welcome";
import { resetpass } from "../../constants/image";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { SPACING } from "../../constants/sizes";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToastManager, { Toast } from "toastify-react-native";
import { Backend_url } from "../../constants/string";
import { sleep } from "../../functions/utils";

const ForgotPassword = () => {
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const getElement = async () => {
      await AsyncStorage.getItem("email").then((value) => {
        setEmail(value);
      });
    };

    getElement();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post(`${Backend_url}/auth/reset-password`, {
        email: email,
        password: data.password,
      })
      .then(async (user) => {
        await AsyncStorage.setItem("isLogin", JSON.stringify(true));
        await AsyncStorage.setItem("userId", user.data._id);
        await AsyncStorage.removeItem("email");
        Toast.success("Password reset successful");
        await sleep(3);
        router.replace("../(tabs)/");
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={[welcomeStyles.container, { fontFamily: FONTS.regular }]}
      >
        <Stack.Screen
          options={{
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    router.back();
                  }}
                  style={{
                    marginRight: 21,
                  }}
                >
                  <AntDesign
                    name="arrowleft"
                    size={24}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              );
            },
            headerTitle: () => {
              return (
                <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>
                  Reset password
                </Text>
              );
            },
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <ToastManager width={width * 0.9} positionValue={10} />

        <View
          style={[
            welcomeStyles.welcomeImage,
            { backgroundColor: "transparent", height: height * 0.35 },
          ]}
        >
          <Image
            source={resetpass}
            style={{ width: 250, height: 250, resizeMode: "contain" }}
          />
        </View>
        <View style={[welcomeStyles.welcomeText, { height: height * 0.5 }]}>
          <View style={welcomeStyles.welcomeTextBar}></View>
          <Text
            style={[welcomeStyles.welcomeText1, { marginTop: SPACING.small }]}
          >
            Enter new password
          </Text>
          <KeyboardAwareScrollView>
            {/* password */}
            <View style={{ flexDirection: "column", gap: 4 }}>
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Password
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
                    secureTextEntry
                  />
                )}
                name="password"
                rules={{
                  required: "This is required.",
                  minLength: {
                    value: 8,
                    message: "Enter at least 8 characters",
                  },
                }}
                defaultValue=""
              />
              {errors.password && (
                <Text
                  style={{
                    color: COLORS.error,
                    fontFamily: FONTS.bold,
                  }}
                >
                  {errors.password.message}
                </Text>
              )}
            </View>

            {/* confirm password */}
            <View style={{ flexDirection: "column", gap: 4 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: FONTS.regular,
                  marginTop: SPACING.small,
                }}
              >
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
                    secureTextEntry

                  />
                )}
                name="confirmation"
                rules={{
                  validate: (value, { password }) =>
                    value === password || "Passwords do not match",
                }}
                defaultValue=""
              />
              {errors.confirmation && (
                <Text
                  style={{
                    color: COLORS.error,
                    fontFamily: FONTS.bold,
                  }}
                >
                  password don't match.
                </Text>
              )}
            </View>
          </KeyboardAwareScrollView>

          <View style={{ width: width, paddingHorizontal: 25 }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 15,
                alignContent: "center",
                justifyContent: "center",
                padding: 12,
                marginBottom: SPACING.large,
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
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPassword;
