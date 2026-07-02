import { View, Text } from "react-native";

export default function App(){

  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Text>HAi</Text>
    <Curly/>
    <Exp/>
    <Info/>
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

//Use of Expression

function Exp(){
  const a = 10;
  const b = 20;
  return(
    <Text>{a+b}</Text>

  );
}

//Use of objects

function Info(){
  const users={
    name:"Nazeel",
    Roll:"46",
  };
  return(
    <Text>{users.name}</Text>
  );

}