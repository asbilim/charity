import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Stack, useRouter } from "expo-router";
import {
  Text,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import {
  SIZES,
  SPACING,
  BORDER_RADIUS,
  ELEVATION,
} from "../../constants/sizes";
import user from "../../assets/images/kemal.jpg";
import ToastManager, { Toast } from "toastify-react-native";
import axios from "axios";
import { Backend_url } from "../../constants/string";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FillProfile() {
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [ResetInfo, setResetInfo] = useState("");

  useEffect(() => {
    const getElement = async () => {
      await AsyncStorage.getItem("email").then(async (value) => {
        setEmail(value);
        await axios.get(`${Backend_url}/auth/code/${value}`).then((user) => {
          console.log(user.data);
          setResetInfo(user.data);
        });
      });
    };

    getElement();
  }, []);

  const OTPFuction = (OTP) => {
    if (ResetInfo.expirationDate > Date.now()) {
      Toast.warn("Your OTP has expired");
    } else if (ResetInfo.code === OTP) {
      router.push("/reset");
    } else {
      Toast.error("Invalid OTP code");
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    OTPFuction(data.code);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: height,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 120,
        paddingTop: height * 0.15,
        gap: 15,
      }}
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
                <AntDesign name="arrowleft" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            );
          },
          headerTitle: () => (
            <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>
              confirmation code
            </Text>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />

      <ToastManager width={width * 0.9} positionValue={10} />

      <KeyboardAwareScrollView style={{ height: height }}>
        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontFamily: FONTS.regular,
            }}
          >
            A code have been seed to your email {email}
          </Text>
        </View>

        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: FONTS.bold,
              textAlign: "center",
            }}
          >
            Enter code
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            flex: 1,
          }}
        >
          <View
            style={{
              width: width,
              paddingHorizontal: 25,
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    borderWidth: 3,
                    borderColor: COLORS.primary,
                    width: width - 50,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 12,
                    fontSize: 24,
                    letterSpacing: 15,
                    textAlign: "center",
                  }}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="******"
                  keyboardType="numeric"
                  maxLength={6}
                />
              )}
              name="code"
              rules={{ required: true, minLength: 6 }}
              defaultValue=""
            />
            {errors.code && (
              <Text style={{ color: "red" }}>
                Please enter a valid 6-digit code.
              </Text>
            )}
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
              }}
            >
              Resent code in
            </Text>
            <TouchableOpacity
              onPress={async () => {
                await axios
                  .post(`${Backend_url}/auth/forgot-password-email`, {
                    email: email,
                  })
                  .then((user) => {
                    setResetInfo(user.data),
                      Toast.success("Your code have Been resend!");
                  });
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: FONTS.medium,
                  fontSize: 17,
                  marginHorizontal: 10,
                  marginTop: 10,
                  color: COLORS.primary,
                }}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>
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
    </SafeAreaView>
  );
}
