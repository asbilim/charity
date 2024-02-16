import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
import * as ImagePicker from "expo-image-picker";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const Create = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [category, setCategory] = useState("education");
  const [date, setDate] = useState(new Date(Date.now()));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const pickImage = async (number) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      switch (number) {
        case 0:
          setImage(result.assets[0].uri);
          break;
        case 1:
          setImage1(result.assets[0].uri);
          break;
        case 2:
          setImage2(result.assets[0].uri);
          break;
        case 3:
          setImage3(result.assets[0].uri);
          break;
        case 4:
          setImage4(result.assets[0].uri);
          break;
        case 5:
          setImage5(result.assets[0].uri);
          break;
        case 6:
          setImage6(result.assets[0].uri);
          break;
        default:
          break;
      }
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={{ paddingBottom: 150 }}>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 15,
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
                  Create new Fundraising
                </Text>
              );
            },
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />

        {/* dealing with images */}
        <View>
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: width * 0.95,
              height: height * 0.3,
              borderColor: COLORS.textColor,
              borderWidth: 1,
              borderStyle: "dashed",
              backgroundColor: "#f4f4f4",
              borderRadius: BORDER_RADIUS.small,
            }}
            onPress={() => {
              pickImage(0);
            }}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: width * 0.94,
                  height: height * 0.29,
                  resizeMode: "cover",
                  borderRadius: BORDER_RADIUS.small,
                }}
              />
            ) : (
              <>
                <Feather name="plus" size={30} color={COLORS.primary} />
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: 18,
                    color: COLORS.textColor,
                  }}
                >
                  Add Cover Picture
                </Text>
              </>
            )}
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SPACING.small,
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: width * 0.23,
                height: width * 0.23,
                borderColor: COLORS.textColor,
                borderWidth: 1,
                borderStyle: "dashed",
                backgroundColor: "#f4f4f4",
                borderRadius: BORDER_RADIUS.small,
              }}
              onPress={() => {
                pickImage(1);
              }}
            >
              {image1 ? (
                <Image
                  source={{ uri: image1 }}
                  style={{
                    width: width * 0.22,
                    height: width * 0.22,
                    resizeMode: "cover",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                />
              ) : (
                <Feather name="plus" size={30} color={COLORS.primary} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: width * 0.23,
                height: width * 0.23,
                borderColor: COLORS.textColor,
                borderWidth: 1,
                borderStyle: "dashed",
                backgroundColor: "#f4f4f4",
                borderRadius: BORDER_RADIUS.small,
              }}
              onPress={() => {
                pickImage(2);
              }}
            >
              {image2 ? (
                <Image
                  source={{ uri: image2 }}
                  style={{
                    width: width * 0.22,
                    height: width * 0.22,
                    resizeMode: "cover",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                />
              ) : (
                <Feather name="plus" size={30} color={COLORS.primary} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: width * 0.23,
                height: width * 0.23,
                borderColor: COLORS.textColor,
                borderWidth: 1,
                borderStyle: "dashed",
                backgroundColor: "#f4f4f4",
                borderRadius: BORDER_RADIUS.small,
              }}
              onPress={() => {
                pickImage(3);
              }}
            >
              {image3 ? (
                <Image
                  source={{ uri: image3 }}
                  style={{
                    width: width * 0.22,
                    height: width * 0.22,
                    resizeMode: "cover",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                />
              ) : (
                <Feather name="plus" size={30} color={COLORS.primary} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: width * 0.23,
                height: width * 0.23,
                borderColor: COLORS.textColor,
                borderWidth: 1,
                borderStyle: "dashed",
                backgroundColor: "#f4f4f4",
                borderRadius: BORDER_RADIUS.small,
              }}
              onPress={() => {
                pickImage(4);
              }}
            >
              {image4 ? (
                <Image
                  source={{ uri: image4 }}
                  style={{
                    width: width * 0.22,
                    height: width * 0.22,
                    resizeMode: "cover",
                    borderRadius: BORDER_RADIUS.small,
                  }}
                />
              ) : (
                <Feather name="plus" size={30} color={COLORS.primary} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* dealing with the form */}
        <KeyboardAwareScrollView>
          <View
            style={{
              marginHorizontal: width * 0.025,
              marginVertical: SPACING.medium,
              gap: 4,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontFamily: FONTS.bold,
                textAlign: "left",
              }}
            >
              Fundraising Details
            </Text>
          </View>
          <View
            style={{
              width: width,
              paddingHorizontal: 0,
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* title */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Title
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      width: width * 0.93,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderRadius: 12,
                    }}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="title"
                rules={{ required: "this field is required" }}
                defaultValue=""
              />
              {errors.title && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  {errors.title.message}
                </Text>
              )}
            </View>

            {/* category */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                category
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  width: width * 0.93,
                  borderRadius: 12,
                  paddingHorizontal: -15,
                  paddingVertical: -5,
                }}
              >
                <Picker
                  selectedValue={category}
                  value={category}
                  onValueChange={(itemValue, itemIndex) => {
                    setCategory(itemValue);
                  }}
                >
                  <Picker.Item label={"Education"} value={"education"} />
                  <Picker.Item label={"Environment"} value={"environment"} />
                  <Picker.Item label={"Medical"} value={"medical"} />
                  <Picker.Item
                    label={"Infrastructure"}
                    value={"infrastructure"}
                  />
                  <Picker.Item label={"Disaster"} value={"disaster"} />
                  <Picker.Item label={"Orphanages"} value={"orphanages"} />
                  <Picker.Item label={"Disable"} value={"disable"} />
                  <Picker.Item label={"Humanity"} value={"humanity"} />
                  <Picker.Item label={"Other"} value={"other"} />
                </Picker>
              </View>
            </View>

            {/* donation price */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Total donation required
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      width: width * 0.93,
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
                name="title"
                rules={{ required: "this field is required" }}
                defaultValue=""
              />
              {errors.title && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  {errors.title.message}
                </Text>
              )}
            </View>

            {/* expiration date */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Choose Donation expiration date
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  width: width * 0.93,
                  borderRadius: 12,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                }}
                onPress={() => {
                  showDatepicker();
                }}
              >
                <Text>{date.toLocaleString()}</Text>
              </TouchableOpacity>
            </View>

            {/* fund usage plan */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
                marginBottom: SPACING.large,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Fund usage plan
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      width: width * 0.93,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderRadius: 12,
                    }}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    numberOfLines={5}
                    multiline={true}
                  />
                )}
                name="usage"
                rules={{ required: "this field is required" }}
                defaultValue=""
              />
              {errors.usage && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  {errors.usage.message}
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              marginHorizontal: width * 0.025,
              marginVertical: SPACING.medium,
              borderTopColor: COLORS.gray,
              borderTopWidth: 1,
              paddingTop: SPACING.large,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontFamily: FONTS.bold,
                textAlign: "left",
              }}
            >
              Donation Recipient details
            </Text>
          </View>
          <View
            style={{
              width: width,
              paddingHorizontal: 0,
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* title */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Name of the recipient (peoples/organizations)
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      width: width * 0.93,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderRadius: 12,
                    }}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="name"
                rules={{ required: "this field is required" }}
                defaultValue=""
              />
              {errors.name && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  {errors.name.message}
                </Text>
              )}
            </View>
            {/* expiration date */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Upload donation proposal document
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  width: width * 0.93,
                  borderRadius: 12,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                }}
                onPress={() => {
                  pickImage(5);
                }}
              >
                <Text numberOfLines={1}>
                  {image5 ? image5.uri : "press to uploaded a file"}
                </Text>
              </TouchableOpacity>
            </View>
            {/* expiration date */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Upload medical document (optional)
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  width: width * 0.93,
                  borderRadius: 12,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                }}
                onPress={() => {
                  pickImage(6);
                }}
              >
                <Text numberOfLines={1}>
                  {image6 ? image6.uri : "press to uploaded a file"}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Story */}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                marginTop: SPACING.small,
                marginBottom: SPACING.small,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONTS.regular }}>
                Story
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      width: width * 0.93,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderRadius: 12,
                    }}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    numberOfLines={5}
                    multiline={true}
                  />
                )}
                name="story"
                rules={{ required: "this field is required" }}
                defaultValue=""
              />
              {errors.story && (
                <Text style={{ color: COLORS.error, fontFamily: FONTS.bold }}>
                  {errors.story.message}
                </Text>
              )}
            </View>

            {/* Submit Button */}
            <View
              style={{ width: width * 0.93, marginTop: 45 }}
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
};

export default Create;
