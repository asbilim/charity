import { View, Text, Image } from "react-native";
import { Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import {
  SIZES,
  SPACING,
  BORDER_RADIUS,
  ELEVATION,
} from "../../constants/sizes";
import { forgotpass } from "../../constants/image";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const FundraisingSm = ({ FundraisingSm, bookmark }) => {
  return (
    <View
      style={[
        {
          height: height * 0.18,
          width: width * 0.95,
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderRadius: BORDER_RADIUS.medium,
          shadowColor: COLORS.textColor,
          shadowOffset: { width: 5, height: 5 },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
    >
      <View
        style={{
          position: "relative",
          height: height * 0.18,
          width: width * 0.3,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            height: width * 0.06,
            width: width * 0.06,
            backgroundColor: COLORS.boxbg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: BORDER_RADIUS.small,
            zIndex: 10
          }}
        >
          <Ionicons name="bookmark" size={15} color={"#FFF"} />
        </View>
        <View
          style={[
            {
              height: height * 0.18,
              width: width * 0.3,
              borderBottomColor: COLORS.gray,
              borderBottomWidth: 0.5,
            },
          ]}
        >
          <Image
            source={forgotpass}
            style={{
              height: height * 0.18,
              width: width * 0.3,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: width * 0.65,
        }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adip djkssldkdlsk
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.light,
                fontSize: 10,
                color: COLORS.primary,
                marginRight: 5,
              }}
            >
              20,000XFA
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONTS.light,
                fontSize: 10,
              }}
            >
              fund raised from 400,000XFA
            </Text>
          </View>

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
                backgroundColor: COLORS.primary,
                borderRadius: BORDER_RADIUS.small,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            ></View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 0,
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: FONTS.light,
                  fontSize: 12,
                  color: COLORS.primary,
                  marginRight: 10,
                }}
              >
                20
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: FONTS.light,
                  fontSize: 12,
                }}
              >
                Donations
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: FONTS.light,
                  fontSize: 12,
                  color: COLORS.primary,
                  marginRight: 10,
                }}
              >
                3
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: FONTS.light,
                  fontSize: 12,
                }}
              >
                days left
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FundraisingSm;
