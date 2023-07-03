import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { welcomeStyles } from "../../styles/welcome";
import { forgotpass } from "../../constants/image";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import {
  SIZES,
  SPACING,
  BORDER_RADIUS,
  ELEVATION,
} from "../../constants/sizes";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import axios from "axios";
import ToastManager, { Toast } from "toastify-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sleep } from "../../functions/utils";
import { Backend_url } from "../../constants/string";

const ForgotPassword = () => {
  const { height, width } = Dimensions.get("window");

  const router = useRouter();

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
    if (userAlready.data.message === "no-user") {
      return Toast.error("Sorry this email don't exist");
    } else {
      await axios
        .post(`${Backend_url}/auth/forgot-password-email`, {
          email: data.email,
        })
        .then(async (user) => {
          await AsyncStorage.setItem("email", user.data.email);
          Toast.success("CODE send successfully");
          await sleep(3);
          router.push("confirmation");
        });
    }
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
                  Forgot password
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
            { backgroundColor: "transparent", height: height / 2.5 },
          ]}
        >
          <Image
            source={forgotpass}
            style={{ width: 250, height: 250, resizeMode: "contain" }}
          />
        </View>
        <View style={[welcomeStyles.welcomeText, { height: height / 2.5 }]}>
          <View style={welcomeStyles.welcomeTextBar}></View>
          <Text style={welcomeStyles.welcomeText1}>Enter your Email</Text>
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
