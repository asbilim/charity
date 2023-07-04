import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS } from "../../constants/sizes";
import Category from "../../components/home/category";
import { useState } from "react";
import Activity from "../../components/Funraising/activity";
import FunraisingFrac from "../../components/Funraising/fundraising";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

function Fundraising() {
  const router = useRouter();

  const { height, width } = Dimensions.get("window");
  const [Avtivity, setAvtivity] = useState(false);
  const [Fundraising, setFundraising] = useState(true);
  const NavigateFundraising = () => {
    setFundraising(true);
    setAvtivity(false);
  };

  const NavigateAvtivity = () => {
    setFundraising(false);
    setAvtivity(true);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{ position: "absolute", bottom: 15, right: 5, zIndex: 5 }}
        onPress={() => {
          router.push("../(fundraising)/create");
        }}
      >
        <View
          style={{
            height: width * 0.15,
            width: width * 0.15,
            backgroundColor: COLORS.boxbg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: BORDER_RADIUS.large,
            marginRight: 10,
          }}
        >
          <Feather name="plus" size={30} color={COLORS.primary} />
        </View>
      </TouchableOpacity>
      <View style={{ width: width * 0.9 }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
            }}
            onPress={NavigateFundraising}
          >
            <Text
              style={{
                color: COLORS.black,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Fundraising
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
            }}
            onPress={NavigateAvtivity}
          >
            <Text
              style={{
                color: COLORS.black,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Activity
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: width * 0.9 }}>
        <View
          style={{
            height: 5,
            width: "100%",
            backgroundColor: COLORS.gray,
            borderRadius: BORDER_RADIUS.small,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <View
            style={{
              height: 5,
              width: "50%",
              backgroundColor: Fundraising ? COLORS.primary : COLORS.gray,
              borderRadius: BORDER_RADIUS.small,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              height: 5,
              width: "50%",
              backgroundColor: Avtivity ? COLORS.primary : COLORS.gray,
              borderRadius: BORDER_RADIUS.small,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          ></View>
        </View>
      </View>
      {Fundraising && (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
              marginTop: 10,
              height: height * 0.12,
            }}
          >
            <Category current={true} text={"All(10)"} />
            <Category current={false} text={"Ongoing(3)"} />
            <Category current={false} text={"Past(5)"} />
            <Category current={false} text={"Pending(2)"} />
          </View>
        </ScrollView>
      )}
      {Avtivity && <Activity />}
      {Fundraising && <FunraisingFrac />}
    </SafeAreaView>
  );
}

export default Fundraising;
