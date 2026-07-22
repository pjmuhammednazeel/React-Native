import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import React,{useState} from "react";

export default function App() {

  const [users,setUsers]=useState([]);

  const getUsers=async()=>{
    
    const response=await fetch("https://jsonplaceholder.typicode.com/users"
    );
    const data=await response.json();
    console.log(data);
    setUsers(data);

  
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={getUsers}>
        <Text>Show Users</Text>
      </Pressable>

      {users.map((user)=>(
        <Text key={user.id}>{user.name}</Text>
      ))}

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
    backgroundColor:"cyan"
  },
});
