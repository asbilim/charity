import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native";
import user from "../../assets/images/user.png";
import { COLORS } from "../../constants/colors";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { SPACING } from "../../constants/sizes";
import { FONTS } from "../../constants/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

function Profile() {
  const { width, height } = Dimensions.get("window");
  const router = useRouter();
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

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, alignItems: "center" }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
          position: "relative",
          // width: 150,
          // height: 150,
        }}
        onPress={() => {
          pickImage();
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            marginTop: 5,
            borderRadius: 15,
            width: 30,
            height: 30,
            backgroundColor: COLORS.primary,
            bottom: 5,
            right: 10,
            zIndex: 10,
          }}
        >
          <Feather name="edit" size={10} color={COLORS.white} />
        </View>
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
      <View
        style={{
          marginVertical: SPACING.small,
          borderTopColor: COLORS.gray,
          borderTopWidth: 1,
          paddingTop: SPACING.small,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: FONTS.bold,
            textAlign: "left",
          }}
        >
          John Deo
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: 15,
          alignContent: "center",
          justifyContent: "center",
          padding: 20,
          marginTop: 200,
        }}
        onPress={async () => {
          const confirm = Alert.alert(
            "Confirmation",
            "Are you sure you want to perform this action?",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "OK",
                onPress: async () => {
                  await AsyncStorage.removeItem("isLogin").then(() => {
                    console.log("logged out");
                    router.replace("/");
                  });
                },
              },
            ],
            { cancelable: false }
          );
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: FONTS.bold,
            textAlign: "left",
            color: COLORS.white,
          }}
        >
          Log out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Profile;
