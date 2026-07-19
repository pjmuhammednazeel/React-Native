import {View,Text,Button} from "react-native";

export default funtion LoginScreen({navigation}){

    return (
        <View>
        <Text>Login Screen</Text>
        <Button
            title="Login"
            onPress={()=>navigation.navigate("Home")}
        />
        
        </View>
    );

}