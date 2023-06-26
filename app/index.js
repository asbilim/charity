import { Stack } from "expo-router"
import { Text } from "react-native-web"
export default function Index(){
    return (
        <Stack
            screenOptions={{
                headerLeft:()=>{
                    return(
                        <Text>hello</Text>
                    )
                }
            }}
        />
    )
}