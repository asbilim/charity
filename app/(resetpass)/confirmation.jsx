import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Stack } from "expo-router";
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
import {FONTS} from "../../constants/fonts";
import {COLORS} from "../../constants/colors";
import {SIZES, SPACING, BORDER_RADIUS, ELEVATION} from "../../constants/sizes";
import user from "../../assets/images/kemal.jpg";

export default function FillProfile() {
  const { height, width } = Dimensions.get("window");
  const [countDown, setCountDown] = useState(60)
  const [time, setTime] = useState(60)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

//   useEffect(() => {
//     setTimeout(() => {
//         setCountDown((prev)=> (prev - 1))
//         if(countDown === 0){
//             setCountDown(time + 60)
//             setTime((prev)=>{prev + 60})
//         }
//     }, 1000);
//   }, [countDown])
  

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
          headerLeft: () => (
            <View style={{ marginRight: 21 }}>
              <AntDesign
                name="arrowleft"
                size={24}
                color={colors.COLORS.primary}
              />
            </View>
          ),
          headerTitle: () => (
            <Text style={{ fontFamily: fonts.FONTS.bold, fontSize: 20 }}>
              confirmation code
            </Text>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />

      <KeyboardAwareScrollView style={{ height: height }}>
        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontFamily: fonts.FONTS.regular,
            }}
          >
            A code have been seed to your email {"jonhdoe@gmail.com"}
          </Text>
        </View>

        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: fonts.FONTS.bold,
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
                    borderColor: colors.COLORS.primary,
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
                  placeholder="****"
                  keyboardType="numeric"
                  maxLength={4}
                />
              )}
              name="code"
              rules={{ minLength: 4 }}
              defaultValue=""
            />
            {errors.code && (
              <Text style={{ color: "red" }}>
                Please enter a valid 4-digit code.
              </Text>
            )}
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: fonts.FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
              }}
            >
              Resent code in
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: fonts.FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                color: colors.COLORS.primary,
              }}
            >
              {countDown}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={{ width: width, paddingHorizontal: 25 }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.COLORS.primary,
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
              fontFamily: fonts.FONTS.medium,
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
