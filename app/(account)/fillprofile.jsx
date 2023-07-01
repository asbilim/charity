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
                                Fill your profile
                            </Text>
                        )
                    },
                    headerShadowVisible:false
                }}
            />

            <View>
                <Image source={user} style={{width:150,height:150,borderRadius:75}} />
            </View>

            <View
                style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center",gap:40,flex:1}}
            >
                {/* form */}
                <View
                    style={{width:width,paddingHorizontal:25,flexDirection:"column",justifyContent:"space-around",alignItems:"center",gap:4}}
                >
                  

                  <KeyboardAwareScrollView>
                        <View style={{flexDirection:"column",gap:6}}>
                            <Text style={{fontSize:14,fontFamily:fonts.FONTS.regular}}>Full Name</Text>
                            <TextInput style={{borderWidth:3,borderColor:colors.COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}  />
                        </View>
                  </KeyboardAwareScrollView>
                  
                  <KeyboardAwareScrollView>
                        <View style={{flexDirection:"column",gap:6}}>
                            <Text style={{fontSize:14,fontFamily:fonts.FONTS.regular}}>Email</Text>
                            <TextInput style={{borderWidth:3,borderColor:colors.COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}  />
                        </View>
                  </KeyboardAwareScrollView>

                  <KeyboardAwareScrollView>
                        <View style={{flexDirection:"column",gap:6}}>
                            <Text style={{fontSize:14,fontFamily:fonts.FONTS.regular}}>Phone number</Text>
                            <TextInput style={{borderWidth:3,borderColor:colors.COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}  />
                        </View>
                  </KeyboardAwareScrollView>

                  <KeyboardAwareScrollView>
                        <View style={{flexDirection:"column",gap:6}}>
                            <Text style={{fontSize:14,fontFamily:fonts.FONTS.regular}}>Gender</Text>
                            <TextInput style={{borderWidth:3,borderColor:colors.COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}  />
                        </View>
                  </KeyboardAwareScrollView>

                  <KeyboardAwareScrollView>
                        <View style={{flexDirection:"column",gap:6}}>
                            <Text style={{fontSize:14,fontFamily:fonts.FONTS.regular}}>Location</Text>
                            <TextInput style={{borderWidth:3,borderColor:colors.COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}  />
                        </View>
                  </KeyboardAwareScrollView>


                </View>

                {/* submit button */}

                <View
                    style={{width:width,paddingHorizontal:25}}
                >
                    <TouchableOpacity
                        style={{backgroundColor:colors.COLORS.primary,borderRadius:15,alignContent:"center",justifyContent:"center",padding:12}}
                    >
                        <Text
                            style={{textAlign:"center",fontFamily:fonts.FONTS.medium,color:"#fff",fontSize:17}}
                        >Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

            {/* this view is for the form and the submit button */}

            
            

        </SafeAreaView>
    )
}