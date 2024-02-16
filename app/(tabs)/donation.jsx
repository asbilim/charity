import { Text, View, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/colors";
import FundraisingDo from "../../components/home/fundraisingdo";
import Category from "../../components/home/category";
import { SPACING } from "../../constants/sizes";

function Donation() {

  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
          <Category current={true} text={"All"} />
          <Category current={false} text={"Education"} />
          <Category current={false} text={"Environment"} />
          <Category current={false} text={"Medical"} />
          <Category current={false} text={"Infrastructure"} />
          <Category current={false} text={"Disaster"} />
          <Category current={false} text={"Orphanages"} />
          <Category current={false} text={"Disable"} />
          <Category current={false} text={"Humanity"} />
          <Category current={false} text={"Others"} />
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: SPACING.medium,
            marginBottom: SPACING.xxLarge,
            paddingBottom: SPACING.xxLarge,
            gap: 15,
          }}
        >
          <FundraisingDo/>
          <FundraisingDo/>
          <FundraisingDo/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Donation;
