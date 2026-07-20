import {View,Text,Button} from "react-native";

export default function HomeScreen({navigation}){
    return(
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Profile"
                onPress={()=> navigation.navigate("Profile")}
            />
            <Button
                title="Back"
                onPress={()=>navigation.goBack()}
            />
        </View>
    );
}