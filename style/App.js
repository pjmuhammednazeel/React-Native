import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <StatusBar style="auto" />
      <View style={styles.flexbox}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>

      </View>
      <View style={styles.flexbox2}>
        <Text>A</Text>
        <Text>B</Text>
        <Text>C</Text>
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
  title:{
    fontSize:24,
    color: "blue",
  },
  flexbox:{
    flexDirection:"coloumn"

  },
  flexbox2:{
    gap:15,
    flexDirection:"row",
  }
});
