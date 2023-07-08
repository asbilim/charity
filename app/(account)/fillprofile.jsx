import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import user from "../../assets/images/user.png";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
import city from "../../constants/town.json";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToastManager, { Toast } from "toastify-react-native";
import { sleep } from "../../functions/utils";
import * as ImagePicker from "expo-image-picker";

export default function FillProfile() {
  const router = useRouter();
  const { height, width } = Dimensions.get("window");
  const [country, setCountry] = useState("Cameroon");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("male");

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle the submission of the form here
    await AsyncStorage.setItem("name", data.fullName);
    await AsyncStorage.setItem("number", data.phone);
    await AsyncStorage.setItem("country", country);
    await AsyncStorage.setItem("location", location);
    await AsyncStorage.setItem("gender", gender);
    Toast.success("Infos saved successfully");
    await sleep(2);
    router.push("/interest");
  };

  return (
    <ScrollView style={{ paddingBottom: 150 }}>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
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
                  Fill your profile
                </Text>
              );
            },
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <ToastManager width={width * 0.9} positionValue={10} />

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
          onPress={() => {
            pickImage();
          }}
        >
          <Image
            source={image ? { uri: image } : user}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
        <KeyboardAwareScrollView>
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
            {/* Full Name */}
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Full Name
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
                name="fullName"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.fullName && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  This is required.
                </Text>
              )}
            </View>

            {/* Phone Number */}
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Phone Number
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
                    keyboardType="number-pad"
                  />
                )}
                name="phone"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.phone && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  This is required.
                </Text>
              )}
            </View>

            {/* Gender */}
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Gender
              </Text>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: COLORS.primary,
                  width: width - 50,
                  borderRadius: 12,
                }}
              >
                <Picker
                  selectedValue={gender}
                  value={gender}
                  onValueChange={(itemValue, itemIndex) => {
                    setGender(itemValue);
                  }}
                >
                  <Picker.Item key={"male"} label={"Male"} value={"male"} />
                  <Picker.Item
                    key={"female"}
                    label={"Female"}
                    value={"female"}
                  />
                  <Picker.Item key={"other"} label={"Other"} value={"other"} />
                </Picker>
              </View>
            </View>

            {/* country */}
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Country
              </Text>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: COLORS.primary,
                  width: width - 50,
                  borderRadius: 12,
                  paddingHorizontal: -15,
                  paddingVertical: -5,
                }}
              >
                <Picker
                  selectedValue={country}
                  value={country}
                  onValueChange={(itemValue, itemIndex) => {
                    setCountry(itemValue);
                  }}
                >
                  {Object.keys(city).map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
                </Picker>
              </View>
            </View>

            {/* location */}
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Town
              </Text>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: COLORS.primary,
                  width: width - 50,
                  borderRadius: 12,
                  paddingHorizontal: -15,
                  paddingVertical: -5,
                }}
              >
                <Picker
                  selectedValue={location}
                  value={location}
                  onValueChange={(itemValue, itemIndex) => {
                    setLocation(itemValue);
                  }}
                >
                  <Picker.Item
                    key={city[country][0]}
                    label={city[country][0]}
                    value={city[country][0]}
                  />
                  {city[country].slice(1).map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
                </Picker>
              </View>
            </View>

            {/* Submit Button */}
            <View
              style={{ width: width, paddingHorizontal: 25, marginTop: 45 }}
            >
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
    </ScrollView>
  );
}
