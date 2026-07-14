import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from "react";

export default function App() {

  const[log,setLog]=useState(false);
  const[show,setShow]=useState(false);

  return (
    <View style={styles.container}>
      <Text>
        {log?"Welcom":"Please Login"}
      </Text>
      <Button
      title="Login"
      onPress={()=>setLog(!log)}

/>
    <View style={styles.button}> 
    <Button
    title="Show"
    onPress={()=>setShow(!show)}
    />
    
      {show&& <Text>Showed</Text>}
    


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
