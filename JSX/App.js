import { View, Text } from "react-native";

export default function App(){

  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Text>HAi</Text>
    <Curly/>
    </View>
  );
}

//use of curly

function Curly(){
  const name="Nazeel";

  return(
    <Text>Name:{name}</Text>
  );
}
