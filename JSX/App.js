import { View, Text } from "react-native";

export default function App(){
const lap="asus";
const user={
  name:"nazeel",
  age:23,
};
  return(
    
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Text>HAi</Text>
    <Curly/>
    <Exp/>
    <Info/>
    <Prop name="Nazeel"/>
    <Mulprop name="Nazeel"
              age="23"/>
    <Dprop name="Nazeel"
      age="23"/>
      <Pass tool={lap}/>
      <PassOb item={user}/>
      <Reuse name="NAzeel" age="23"/>
      <Reuse name="rishi" age="22"/>
      <Reuse name="eldho" age="25"/>
      
    </View>
    
      
   
  );
}

//use of curly

function Curly(){
  const name="Nazeel";

  return(
    <Text>Name:{name}</Text>
  );
}

//Use of Expression

function Exp(){
  const a = 10;
  const b = 20;
  return(
    <Text>{a+b}</Text>

  );
}

//Use of objects

function Info(){
  const users={
    name:"Nazeel",
    Roll:"46",
  };
  return(
    <Text>{users.name}</Text>
  );

}

//Props:Props (short for properties) are used to pass data from a parent component to a child component.

//Example:1

function Prop(props){

  return(
      <Text>Hello{props.name}</Text>
  );
}

//Example:2 

//Multiple Props

function Mulprop(props){
return(
    <View>
    <Text>Name={props.name}</Text>
    <Text>Age={props.age}</Text>
    </View>
);

}

//Destructuring Props

function Dprop({name,age})
{
return(
  <View>
  <Text>{name}</Text>
  <Text>{name,age}</Text>
  </View>
);

}

function Pass({tool})
{
  return(
    <Text>{tool}</Text>
  );
}


function PassOb({item}){

return(
<Text>{item.name}</Text>
);
}


//Reuse Components

function Reuse({name,age}){

  return(
    <View>
    <Text>Name:{name}</Text>
    <Text>Age:{age}</Text>
    </View>
  );
}