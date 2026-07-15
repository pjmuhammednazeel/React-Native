import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from "react";

export default function App() {

  const[log,setLog]=useState(false);
  const[show,setShow]=useState(false);
  const [login,setLogin]=useState(false);
  const [news,setNews]=useState(false);

  let message;

  if(login){
    message="Welcome";
  }
  else{
    message="Please Login"
  }

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
    <View>
    <Text>{message}</Text>
    <Button

    title="Press"

    onPress={()=> setLogin(!login)}

/>


    </View>

    <View>
      {news?<Home/>:<Login/>}

      <Button

      title="Toggle"
      onPress={()=>setNews(!news)}

/>

    </View>
      
    </View>
  );
}


function Login(){
  return <Text>Login Screen</Text>
}

function Home()
{
  return <Text>Home Screen</Text>
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
