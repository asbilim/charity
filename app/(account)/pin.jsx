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
import user from "../../assets/images/kemal.jpg";
import axios from "axios";
import { Backend_url } from "../../constants/string";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encrypt } from "../../functions/crypto";
import ToastManager, { Toast } from "toastify-react-native";
import { sleep } from "../../functions/utils";

export default function FillProfile() {
  const { height, width } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [country, setCountry] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getElement = async () => {
      AsyncStorage.getItem("email").then((value) => {
        if (value !== null) setEmail(value);
      });

      AsyncStorage.getItem("password").then((value) => {
        if (value !== null) setPassword(value);
      });

      AsyncStorage.getItem("name").then((value) => {
        if (value !== null) setFullName(value);
      });

      AsyncStorage.getItem("number").then((value) => {
        if (value !== null) setPhone(value);
      });

      AsyncStorage.getItem("gender").then((value) => {
        if (value !== null) setGender(value);
      });

      AsyncStorage.getItem("location").then((value) => {
        if (value !== null) setLocation(value);
      });

      AsyncStorage.getItem("interest").then((value) => {
        if (value !== null) setInterest(JSON.parse(value));
      });

      AsyncStorage.getItem("country").then((value) => {
        if (value !== null) setCountry(value);
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
    const res = await axios
      .post(`${Backend_url}/auth/user`, {
        email: email,
        password: password,
        name: fullName,
        contact: phone,
        gender: gender,
        city: location,
        interest: interest,
        country: country,
        pin: parseInt(data.pin),
        gender: gender,
        facebook: false,
        gmail: false,
        gmail_password: true,
        apple: false,
      })
      .then(async (res) => {
        if (res.data) {
          await AsyncStorage.setItem("isLogin", JSON.stringify(true));
          await AsyncStorage.setItem("userId", res.data._id);
          Toast.success("Account successfully");
          await sleep(3);
          router.replace("../(home)/home");
        }
      })
      .catch((err) => {
        Toast.error("An Error Occur please try later");
        console.log(err);
      });
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
              Fill your profile
            </Text>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />

      <ToastManager width={width * 0.9} positionValue={10} />

      <KeyboardAwareScrollView>
        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontFamily: FONTS.regular,
            }}
          >
            Please remember this PIN because it will be used when you want to
            top up,withdraw, or donate
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
            Create Pin!
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
                  secureTextEntry
                  maxLength={6}
                />
              )}
              name="pin"
              rules={{ required: true, minLength: 6, pattern: /^[0-9]{6}$/ }}
              defaultValue=""
            />
            {errors.pin && (
              <Text style={{ color: "red" }}>
                Please enter a valid 6-digit pin.
              </Text>
            )}
          </View>

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
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
