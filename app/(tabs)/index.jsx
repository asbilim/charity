import {
    Text,
    SafeAreaView,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Stack, useRouter } from "expo-router";
  import { icon, welcome } from "../../constants/image";
  import { FONTS } from "../../constants/fonts";
  import { BORDER_RADIUS, SPACING } from "../../constants/sizes";
  import { Feather, Ionicons } from "@expo/vector-icons";
  import { COLORS } from "../../constants/colors";
  import Category from "../../components/home/category";
  import Fundraising from "../../components/home/fundraising";
  import Impact from "../../components/home/impact";
  import Prayers from "../../components/home/prayer";
  
  const Home = () => {
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
          paddingBottom: SPACING.large,
          position: "relative",
        }}
      >
        <TouchableOpacity
        style={{position:"absolute", bottom: 30, right: 10, zIndex:5}}
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
            <Feather name="box" size={30} color={COLORS.primary} />
          </View>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: COLORS.gray,
              borderWidth: 1,
              borderRadius: BORDER_RADIUS.small,
              marginTop: SPACING.medium,
              marginHorizontal: SPACING.small,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 0,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: width * 0.12,
                  width: width * 0.12,
                  backgroundColor: COLORS.boxbg,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: BORDER_RADIUS.large,
                  marginRight: 10,
                }}
              >
                <Ionicons name="wallet" size={25} color={COLORS.primary} />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: 20,
                    color: COLORS.textColor,
                  }}
                >
                  50,000 XFA
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.extralight,
                    fontSize: 14,
                    color: COLORS.gray,
                  }}
                >
                  My wallet balance
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.3,
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                padding: 10,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  borderRadius: 15,
                  alignContent: "center",
                  justifyContent: "center",
                  padding: 10,
                  marginBottom: SPACING.small,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: FONTS.medium,
                    color: COLORS.primary,
                    fontSize: 15,
                  }}
                >
                  Top up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
            <Image
              source={welcome}
              style={{ width: width - 20, height: 250, resizeMode: "contain" }}
            />
          </View>
  
          {/* urgent fundraising */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                maxWidth: width * 0.8,
              }}
              numberOfLines={1}
            >
              Urgent fundraising
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                color: COLORS.primary,
              }}
            >
              See All
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: 10,
                alignItems: "center",
                marginTop: 10,
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: SPACING.medium,
                alignItems: "center",
                gap: SPACING.large,
              }}
            >
              <Fundraising />
              <Fundraising />
              <Fundraising />
            </View>
          </ScrollView>
  
          {/* Coming to an end */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 0,
              alignItems: "center",
              marginTop: SPACING.large,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                maxWidth: width * 0.8,
              }}
              numberOfLines={1}
            >
              Coming to an end
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                color: COLORS.primary,
              }}
            >
              See All
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: SPACING.medium,
                alignItems: "center",
                marginTop: 10,
                gap: SPACING.large,
              }}
            >
              <Fundraising />
              <Fundraising />
              <Fundraising />
            </View>
          </ScrollView>
  
          {/* watch your impact */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 0,
              alignItems: "center",
              marginTop: SPACING.large,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                maxWidth: width * 0.8,
              }}
              numberOfLines={1}
            >
              Watch the impact of your donation
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                color: COLORS.primary,
              }}
            >
              See All
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: SPACING.medium,
                alignItems: "center",
                marginTop: 10,
                gap: SPACING.large,
              }}
            >
              <Impact />
              <Impact />
              <Impact />
            </View>
          </ScrollView>
  
          {/* Prayers from good peoples */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 0,
              alignItems: "center",
              marginTop: SPACING.large,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                maxWidth: width * 0.8,
              }}
              numberOfLines={1}
            >
              Prayers from good peoples
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 17,
                marginHorizontal: 10,
                color: COLORS.primary,
              }}
            >
              See All
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: SPACING.medium,
                alignItems: "center",
                marginTop: 10,
                gap: SPACING.large,
              }}
            >
              <Prayers />
              <Prayers />
              <Prayers />
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Home;
  