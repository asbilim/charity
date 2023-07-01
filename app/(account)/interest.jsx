import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";
import fonts from "../../constants/fonts"
import colors from "../../constants/colors";
import { Dimensions } from "react-native";
import user from "../../assets/images/kemal.jpg"
import { Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons,Foundation,MaterialIcons,Ionicons } from '@expo/vector-icons';
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';

export default function FillProfile(){

    const {height,width} = Dimensions.get("window")
    const { control, handleSubmit, errors } = useForm();

    return (
        <SafeAreaView
            style={{backgroundColor:"#fff",height:height,flexDirection:"column",justifyContent:"space-between",alignItems:"center",paddingBottom:120,gap:15}}
        >

            <Stack.Screen
                options={{
                    headerLeft:()=>{
                        return (
                            <View style={{marginRight:21}}>
                                <AntDesign name="arrowleft" size={24} color={colors.COLORS.primary} />
                            </View>
                        )
                    },
                    headerTitle:()=>{
                        return (
                            <Text
                                style={{fontFamily:fonts.FONTS.bold,fontSize:20}}
                            >
                                Select your interest
                            </Text>
                        )
                    },
                    headerShadowVisible:false
                }}
            />

            <View
                style={{marginHorizontal:15}}
            >
                <Text
                    style={{fontFamily:fonts.FONTS.regular,fontSize:14}}
                >
                    Choose your interest to donate. Don't worry, you can always change it later.

                </Text>
            </View>

            <View
                style={{flexDirection:"column",justifyContent:"space-around",alignItems:"center",gap:5,flex:1}}
            >
                {/* form */}
                <View
                    style={{width:width,paddingHorizontal:25,marginTop:15,flexDirection:"row",justifyContent:"space-around",alignItems:"center",gap:4}}
                >
                   <CreateCard>
                        <MaterialCommunityIcons name="book-education" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>education</Text>
                   </CreateCard>
                   <CreateCard>
                        <FontAwesome name="envira" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>environment</Text>
                   </CreateCard>
                   <CreateCard>
                        <MaterialIcons name="medical-services" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>Medical</Text>
                   </CreateCard>

                </View>

                <View
                    style={{width:width,paddingHorizontal:25,marginTop:5,flexDirection:"row",justifyContent:"space-around",alignItems:"center",gap:4}}
                >
                   <CreateCard>
                        <FontAwesome name="building" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>infrastructure</Text>
                   </CreateCard>
                   <CreateCard>
                        <FontAwesome5 name="warehouse" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>orphanage</Text>
                   </CreateCard>
                   <CreateCard>
                        <Ionicons name="people" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>humanity</Text>
                   </CreateCard>

                </View>

                <View
                    style={{width:width,paddingHorizontal:25,marginTop:5,flexDirection:"row",justifyContent:"space-around",alignItems:"center",gap:4}}
                >
                   <CreateCard>
                        <MaterialIcons name="hearing-disabled" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>diphable</Text>
                   </CreateCard>
                   <CreateCard>
                        <Foundation name="social-skillshare" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>social</Text>
                   </CreateCard>
                   <CreateCard>
                        <FontAwesome5 name="gift" size={35} color={colors.COLORS.primary} />
                        <Text style={{fontFamily:fonts.FONTS.medium,fontSize:13,textAlign:"center"}}>others</Text>
                   </CreateCard>

                </View>

            


                

                {/* submit button */}

                <View
                    style={{width:width,paddingHorizontal:25}}
                >
                    <TouchableOpacity
                        style={{backgroundColor:colors.COLORS.primary,borderRadius:15,alignContent:"center",justifyContent:"center",padding:12}}
                    >
                        <Text
                            style={{textAlign:"center",fontFamily:fonts.FONTS.medium,color:"#fff",fontSize:15}}
                        >Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

            {/* this view is for the form and the submit button */}

            
            

        </SafeAreaView>
    )
}

const CreateCard = ({children})=>{
    return (
        <TouchableOpacity
            style={{
                width:100,
                height:100,
                borderColor:"#000",
                borderWidth:0.5,
                borderRadius:15
                ,
                justifyContent:"center",
                alignItems:"center",
                gap:10,
                padding:10
            }}
        >
            {children}
        </TouchableOpacity>
    )
}