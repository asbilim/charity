
import { Stack } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native"
import fonts from "../constants/fonts"
import { useRouter } from "expo-router"
import { useEffect } from "react"


export default function Index(){

    const router = useRouter()
    useEffect(()=>router.replace("/(account)/interest/"),[router])
    
    return (
        <SafeAreaView
            style={{fontFamily:fonts.FONTS.regular}}
        >

            <Stack
                screenOptions={{
                    headerLeft:()=>{
                        return(
                            <Text>hello</Text>
                        )
                    },
                    headerTitle:()=>{
                        return <Text>charity</Text>
                    },
                }}
            />

            <Text style={{fontFamily:fonts.FONTS.regular, fontSize:18}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam voluptate pariatur quas magni voluptatem, voluptatibus nostrum laudantium reiciendis tempora, molestias odio. Numquam nulla sequi ex explicabo? Explicabo, minima aut?</Text>
        </SafeAreaView>
    )
}
