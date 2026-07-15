import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let fruits = ["apple","orange","pineapple","lemon"]
  
  const students=[
    {id:1,name:"Nazeel",age:23},
    {id:2,name:"Rahul",age:24},
    {id:3,name:"Anu",age:25},
  ];
  return (
    <View style={styles.container}>

    {fruits.map((fruit)=>(
      <Text key={fruit}>{fruit}</Text>))} 
      
       {fruits.map((fruit,index)=>(
      <Text key={index}>{fruit}</Text>))} 

      <View>
        {students.map((student)=>(
          <Text key={student.id}>{student.name}-{student.age}</Text>
        ))}


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
