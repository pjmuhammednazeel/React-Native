import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Pressable,Image,ScrollView,FlatList } from 'react-native';
import React, {useState} from "react";

export default function App() {

  const [name,setName]=useState("");
  const users=[
    {id:"1",name:"Nazeel"},
    {id:"2",name:"John"},
    {id:"3",name:"alice"},
  ]
  return (
    <View style={styles.container}>

      <Image
        source={require("./assets/salman.jpg")}
        style={{
          width:20,
          height:120
        }}
      />
      
      <Text>Your Name:</Text>

      <TextInput

      placeholder="Enter your name"
      value={name}

      onChangeText={setName}
      
       />

       <TextInput
        placeholder="Password"
        secureTextEntry={true}
      />

      <TextInput
        placeholder="Number"
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
      />


      <Text>You typed:{name}</Text>
      
      <ScrollView>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
        <Text>Item 5</Text>
        <Text>Item 6</Text>
      </ScrollView>
      <FlatList
        data={users}
        keyExtractoor={(item)=>item.id}
        renderItem={({item})=>(
          <Text>{item.name}</Text>
        )}
      />
      <Pressable
      
      onPress={()=>alert("Pressed")}
      style={({pressed})=>({
        backgroundColor: pressed? "gray":"blue",
        padding:25,
        borderRadius:18
      })}
      >
        <Text style={{color:"white",textAlign:"center"}}>
          Submit</Text>
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
});
