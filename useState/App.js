import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from "react";

export default function App() {

  const [count,setCount]=useState(0);
  const [name,setName]=useState("Nazeel");

  return (
    <View style={styles.container}>
      <Text>Count={count}</Text>
      <Text>Name={name}</Text>
      <View style={styles.button}>
      <Button  
      title="Increase"
      onPress={()=> setCount(count+1)}
      />
    </View>
    <View  style={styles.button}>
      <Button
      title="Decrease"
      onPress={()=> setCount(count-1)}
      />
      </View>

    <View style={styles.button}>
    <Button 
    title="Reset"
    onPress={()=>setCount(0)}
    />
    </View>
    <View style={styles.button}>
    <Button
    title="Change Name"
    onPress={()=>setName("John")}
    />

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
  button:{
      marginBottom:10,

  },
});

//State is data that belongs to a component and can change over time.
