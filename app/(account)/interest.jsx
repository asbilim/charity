import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";
import { useForm } from "react-hook-form";
import {
  AntDesign,
  MaterialCommunityIcons,
  Foundation,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { Stack, useRouter } from "expo-router";
import ToastManager, { Toast } from "toastify-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sleep } from "../../functions/utils";

const interests = [
  {
    name: "education",
    icon: <MaterialCommunityIcons name="book-education" size={35} />,
  },
  { name: "environment", icon: <FontAwesome name="envira" size={35} /> },
  {
    name: "medical",
    icon: <MaterialIcons name="medical-services" size={35} />,
  },
  { name: "infrastructure", icon: <FontAwesome name="building" size={35} /> },
  { name: "orphanage", icon: <FontAwesome5 name="warehouse" size={35} /> },
  { name: "humanity", icon: <Ionicons name="people" size={35} /> },
  {
    name: "diphable",
    icon: <MaterialIcons name="hearing-disabled" size={35} />,
  },
  { name: "social", icon: <Foundation name="social-skillshare" size={35} /> },
  { name: "others", icon: <FontAwesome5 name="gift" size={35} /> },
];

export default function FillProfile() {
  const { height, width } = Dimensions.get("window");
  const { handleSubmit } = useForm();
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleSelect = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const onSubmit = async () => {
    console.log("Selected Interests: ", selectedInterests);
    await AsyncStorage.setItem("interest", JSON.stringify(selectedInterests));
    Toast.success("Interests saved successfully");
    await sleep(3);
    router.push("/pin");
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
          headerTitle: () => {
            return (
              <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>
                Select your interest
              </Text>
            );
          },
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
        <ToastManager width={width * 0.9} positionValue={10} />

      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: 14,
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      >
        Choose your interest to donate. Don't worry, you can always change it
        later.
      </Text>
      <FlatList
        data={interests}
        renderItem={({ item }) => {
          const isSelected = selectedInterests.includes(item.name);
          const iconWithNewColor = React.cloneElement(item.icon, {
            color: isSelected ? "#fff" : COLORS.primary,
          });

          return (
            <TouchableOpacity onPress={() => handleSelect(item.name)}>
              <CreateCard selected={isSelected}>
                {iconWithNewColor}
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: 13,
                    textAlign: "center",
                    color: isSelected ? "#fff" : COLORS.primary,
                  }}
                >
                  {item.name}
                </Text>
              </CreateCard>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        numColumns={3}
      />

      <View style={{ width: width, paddingHorizontal: 15 }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            height: 50,
            display: "flex",
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
              fontSize: 15,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const CreateCard = ({ children, selected }) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        margin: 15,
        borderColor: selected ? COLORS.primary : "#000",
        backgroundColor: selected ? COLORS.primary : "#fff",
        borderWidth: 0.5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 10,
      }}
    >
      {children}
    </View>
  );
};
