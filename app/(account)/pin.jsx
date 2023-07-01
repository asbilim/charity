import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Stack } from "expo-router";
import { Text, Dimensions, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons';
import { FONTS } from '../../constants/fonts';
import {COLORS} from "../../constants/colors";
import user from "../../assets/images/kemal.jpg";

export default function FillProfile() {
    const { height, width } = Dimensions.get("window");
    const { control, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", height: height, flexDirection: "column", justifyContent: "space-between", alignItems: "center", paddingBottom: 120, gap: 15 }}>
            <Stack.Screen options={{
                
                headerTitle: () => (
                    <Text style={{ fontFamily: FONTS.bold, fontSize: 20 }}>
                        Fill your profile
                    </Text>
                ),
                headerShadowVisible: false
            }}
            />

            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ fontSize: 16, textAlign: "center", fontFamily: FONTS.regular }}>
                        Please remember this PIN because it will be used when you want to top up,withdraw, or donate
                    </Text>
                </View>

                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ fontSize: 24, fontFamily: FONTS.bold,textAlign:"center" }}>
                        Create Pin!
                    </Text>
                </View>

                <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: 40, flex: 1 }}>

                    <View style={{ width: width, paddingHorizontal: 25, flexDirection: "column", justifyContent: "space-around", alignItems: "center", gap: 4 }}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={{ borderWidth: 3, borderColor: COLORS.primary, width: width - 50, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12, fontSize: 24, letterSpacing: 15, textAlign: "center" }}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder="******"
                                    keyboardType="numeric"
                                    secureTextEntry
                                    maxLength={6}
                                />
                            )}
                            name="pin"
                            rules={{ required: true, minLength: 6, pattern: /^[0-9]{6}$/ }}
                            defaultValue=""
                        />
                        {errors && <Text style={{ color: 'red' }}>Please enter a valid 6-digit pin.</Text>}
                    </View>

                    <View style={{ width: width, paddingHorizontal: 25 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: COLORS.primary, borderRadius: 15, alignContent: "center", justifyContent: "center", padding: 12 }}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text style={{ textAlign: "center", fontFamily: FONTS.medium, color: "#fff", fontSize: 17 }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
