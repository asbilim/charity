import React from 'react';
import { Stack } from "expo-router";
import { Text, Dimensions, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {FONTS} from "../../constants/fonts";
import {COLORS} from "../../constants/colors";
import user from "../../assets/images/kemal.jpg";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from "react-native-gesture-handler"

export default function FillProfile(){
    const {height,width} = Dimensions.get("window");
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        // Handle the submission of the form here
        console.log(data);
    };

    return (
        <ScrollView
            style={{paddingBottom:150}}
        >
        <SafeAreaView
            style={{backgroundColor:"#fff",flexDirection:"column",justifyContent:"space-between",alignItems:"center",paddingBottom:120,gap:15}}
        >
            <Stack.Screen
                options={{

                    headerTitle:()=>{
                        return (
                            <Text
                                style={{fontFamily:FONTS.bold,fontSize:20}}
                            >
                                Fill your profile
                            </Text>
                        )
                    },
                    headerShadowVisible:false
                }}
            />
            <View 
                style={{justifyContent:"center",alignItems:"center",marginVertical:20}}
            >
                <Image source={user} style={{width:150,height:150,borderRadius:75}} />
            </View>
            <KeyboardAwareScrollView>
                <View
                    style={{width:width,paddingHorizontal:25,flexDirection:"column",justifyContent:"space-around",alignItems:"center",gap:4}}
                >
                    {/* Full Name */}
                    <View style={{flexDirection:"column",gap:6}}>
                        <Text style={{fontSize:14,fontFamily:FONTS.regular}}>Full Name</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={{borderWidth:3,borderColor:COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="fullName"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.fullName && <Text style={{color:COLORS.error,fontFamily:FONTS.bold}}>This is required.</Text>}
                    </View>

                    {/* Email */}
                    <View style={{flexDirection:"column",gap:6}}>
                        <Text style={{fontSize:14,fontFamily:FONTS.regular}}>Email</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={{borderWidth:3,borderColor:COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="email"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.email && <Text style={{color:COLORS.error,fontFamily:FONTS.bold}}>This is required.</Text>}
                    </View>

                    {/* Phone Number */}
                    <View style={{flexDirection:"column",gap:6}}>
                        <Text style={{fontSize:14,fontFamily:FONTS.regular}}>Phone Number</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={{borderWidth:3,borderColor:COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="phone"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.phone && <Text style={{color:COLORS.error,fontFamily:FONTS.bold}}>This is required.</Text>}
                    </View>

                    {/* Gender */}
                    <View style={{flexDirection:"column",gap:6}}>
                        <Text style={{fontSize:14,fontFamily:FONTS.regular}}>Gender</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={{borderWidth:3,borderColor:COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="gender"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.gender && <Text style={{color:COLORS.error,fontFamily:FONTS.bold}}>This is required.</Text>}
                    </View>

                    {/* Location */}
                    <View style={{flexDirection:"column",gap:6}}>
                        <Text style={{fontSize:14,fontFamily:FONTS.regular}}>Location</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={{borderWidth:3,borderColor:COLORS.primary,width:width-50,paddingHorizontal:15,paddingVertical:5,borderRadius:12}}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="location"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.location && <Text style={{color:COLORS.error,fontFamily:FONTS.bold}}>This is required.</Text>}
                    </View>

                    {/* Submit Button */}
                    <View
                        style={{width:width,paddingHorizontal:25,marginTop:45}}
                    >
                        <TouchableOpacity
                            style={{backgroundColor:COLORS.primary,borderRadius:15,alignContent:"center",justifyContent:"center",padding:12}}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text
                                style={{textAlign:"center",fontFamily:FONTS.medium,color:"#fff",fontSize:17}}
                            >Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
            </ScrollView>
    )
}
