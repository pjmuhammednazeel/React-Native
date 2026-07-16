import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Pressable,TextInput } from 'react-native';
import React, {useState} from "react";

export default function App() {
  const [count,setCount]=useState(0);
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [subject,setSubject]=useState("");
  return (

//Onpress
//Pressable
//TextInput
//Multiple Input

    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={()=> alert("Button Pressed")}
      />
      
      
    
    <Pressable onPress={()=>alert("Pressed")}>
      <Text>Press Me</Text>

    </Pressable>

    <Pressable 
    style={{backgroundColor:"blue",
      padding:15,
      borderRadius:8,
    }}
    onPress={()=>alert("Pressed")}>
      <Text style={{color:"white"}}>Press</Text>
    </Pressable>

    <View>
      <TextInput
        placeholder="Enter name"
        onChangeText={setName}
      />

      <Text>Hello {name}</Text>
    </View>

    <View>

    <TextInput
      placeholder="age"
      value={age}
      onChangeText={setAge}
    />

    <TextInput

    placeholder="subject"
    value={subject}
    onChangeText={setSubject}


/>

<Text>Age: {age}</Text>
<Text>subject: {subject}</Text>

    </View>


    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
