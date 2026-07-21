import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,TextInput } from 'react-native';
import React,{useState} from "react";

export default function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [confirm,setConfirm]=useState("");
  const [phone,setPhone]=useState("");
  const handleLogin=()=>{
    
    if  (email===""||password===""){
      alert("Please fill all fields")
      return;
    }
    console.log(name);
    console.log(email);
    console.log(phone)
    console.log(password);
   
  }
  return (
    <View style={styles.container}>
      <Text>FacePay Login</Text>

      <TextInput
        placeholder="name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"

      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button}
      onPress={handleLogin}
      >
        <Text style={styles.buttontext}>Submit</Text>
      </Pressable>
      
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
  button:{

      backgroundColor:"blue",
      padding:15,
      borderRadius:8,
  },
  buttontext:{
      color:"white",
  },
});
