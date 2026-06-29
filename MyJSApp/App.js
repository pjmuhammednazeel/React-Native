import { View, Text } from "react-native";

function Name(){
  return(
    <Text>P J Muhammed Nazeel</Text>
  );
}
function About(){
  return(
    <Text>I am Learning React Native</Text>
  );
}
function Student(){
  return(
    <Text>Student:Nazeel</Text>
  );
}
function Course(){
  return(
    <Text>Course:Mca</Text>
  );
}
function College(){
  return(
    <Text>College:Muthoot Institute Of Technology And Sciences</Text>
  )
}
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black" }}>
        Hello
      </Text>
      <Name/>
      <About/>
      <Student/>
      <Course/>
      <College/>
    </View>
  );
}