import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking, Pressable, Image } from 'react-native';
import { ImageBackground } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import logoImg from './assets/LOGO.jpg';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Manual({navigation}) {

  return (


 
    <View style={styles.canvas}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >


        <View style={{ backgroundColor: "#ffff", elevation: 10, justifyContent: "center", height: '90%', width: '90%', borderRadius: 25, }}>
          <Text style={{
            color: '#6861f2', textAlign: 'center', textTransform: 'uppercase', fontSize: 18, fontWeight:'bold',
          }}>ECE</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
      >


        <View style={{ backgroundColor: "#ffff", elevation: 10, justifyContent: "center", height: '90%', width: '90%', borderRadius: 25, }}>
          <Text style={{
            color: '#6861f2', textAlign: 'center', textTransform: 'uppercase', fontSize: 18, fontWeight:'bold',
          }}>CSE</Text>
        </View>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.button}
      >


        <View style={{ backgroundColor: "#ffff", elevation: 10, justifyContent: "center", height: '90%', width: '90%', borderRadius: 25, }}>
          <Text style={{
            color: '#6861f2', textAlign: 'center', fontWeight:'bold', textTransform: 'uppercase', fontSize: 16 ,
          }}>Petrolium</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      >


        <View style={{ backgroundColor: "#ffff", elevation: 10, justifyContent: "center", height: '90%', width: '90%', borderRadius: 26, }}>
          <Text style={{
            color: '#6861f2', textAlign: 'center',  fontWeight:'bold',textTransform: 'uppercase', fontSize:16,
          }}>Mechanical</Text>
        </View>
      </TouchableOpacity>
      <Text
      style={{
        marginVertical:40,
        color: '#ff852e',
        fontSize: 23,
        textAlign: 'center',
        fontWeight:'bold',
       
      }}
      >Select your department</Text>
    </View>
    

  )
}




function Home({navigation}) {
  const [state, setState] = useState('close');
  const clickHandler = () => {

    setState('open');
  }
  const clickClose = () => {
    setState('close');
  }


  return (



    <View    style={styles.container} >


      <Text
        style={{
          paddingTop: 100,
          paddingBottom: 77,
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: 28,

        }}

      >Door is {state}  </Text>

      <TouchableOpacity
      style={styles.buttonContainer}

        onPress={() => { clickHandler(); fetch('https://api.thingspeak.com/update.json?api_key=M121UNYYIN5DQC09&field1=1') }}
      >
        <View style={styles.buttonContainer}>

          <Text style={styles.btnContainer}>Open</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity
           style={styles.buttonContainer2}
        onPress={() => { clickClose(); fetch('https://api.thingspeak.com/update.json?api_key=M121UNYYIN5DQC09&field1=0') }}
      >
        <View style={styles.buttonContainer2}>

          <Text style={styles.btnContainer}>Close</Text>
        </View>
      </TouchableOpacity>
    </View>


  );


};

const styles = StyleSheet.create({

  container: {

    width: "100%",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 10,

    justifyContent: 'center',


  },

  buttonContainer: {

    height: 48,
    marginHorizontal: 12,
    marginVertical: 30,

    alignItems: 'center',
    backgroundColor: '#66d0de',
    justifyContent: 'center',
    borderRadius: 50,
  },
  btnContainer: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',


  },
  buttonContainer2: {

    height: 48,
    marginHorizontal: 12,


    alignItems: 'center',
    backgroundColor: '#232421',
    justifyContent: 'center',
    borderRadius: 50,
  },


  canvas: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    paddingTop: 150,
    backgroundColor: '#e8faff',
    alignItems: 'center',
    justifyContent: 'center',

  },


  button: {
    height: 120,
    width: 130,
    marginHorizontal: 5,
    marginVertical: 8,

    alignItems: 'center',
    backgroundColor: '#b0ffee',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 10,
  },



});






function SplashSC() {

  return (

    <View style={{
      width: '100%', height: '100%'
    }} >
      <StatusBar hidden={true} />


      <Image source={logoImg}
        style={{
          height: '100%',
          width: '100%',




        }} />
    </View>

  );

}



const Stack = createNativeStackNavigator();




export default function Splashscreen() {
  const [isSplashScreenvisible, setIsSplashScreenvisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenvisible(false);
    }, 5000);
    return () => {

    };
  }, []);
  return (

    <NavigationContainer  >
      <Stack.Navigator initialRouteName='SplashSC' >
        {isSplashScreenvisible ? (
          <Stack.Screen name="SplashSC" component={SplashSC} options={{ headerShown: false }} />
        ) : null}
        <Stack.Screen name="Dibrugarh" component={Manual} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
