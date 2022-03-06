import React, { useState, useEffect,useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,Animated } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import logoImg from './assets/LOGO.jpg';
import Settings from './Settings.js'
import AboutUs from './AboutUs.js'
import House from './assets/House.png';
import settings from './assets/settings.png';
import info from './assets/info.png';
import LottieView from 'lottie-react-native';
import Unlocking from './assets/lock-unlocking.json';
import cpu from './assets/cpu.json';
const Manual=({navigation}) =>{

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
 
  // const [state, setState] = useState('close');
  // const clickHandler = () => {

  //   setState('open');
  // }
  // const clickClose = () => {
  //   setState('close');
  // }




const progress = useRef (new Animated.Value(0)).current;
   const [locking, setUnlocking] = useState('false');


const lockingAnimation=()=> {

  const newValue = Unlocking ? 0 : 1;
  Animated.timing(progress,{
    toValue:newValue,
    duration:1800,
    useNativeDriver:true,
    
      }
        
        ).start();
    
        setUnlocking(!locking);

};



const unlockAnimation = ()=> {
const newValue = Unlocking ? 0 : 1;
  Animated.timing(progress,{
toValue:1,
duration:3000,
useNativeDriver:true,

  }
    
    ).start();

    setUnlocking(!locking);
};



  return (

  

  <View style={styles.container} >
      
<LottieView 
progress={progress} source={Unlocking}/>

      {/* <Text
        style={{
          paddingTop: 20,
          paddingBottom: 13,
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: 10,

        }}

      >Door is {state}  </Text> */}

      <TouchableOpacity
      style={styles.buttonContainer}

        onPress={() => {unlockAnimation(); fetch('https://api.thingspeak.com/update?api_key=T21XZQ6NK8OQGJLI&field1=0') }}
      >
        <View style={styles.buttonContainer}>

          <Text style={styles.btnContainer}>Open</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity
           style={styles.buttonContainer2}
        onPress={() => {lockingAnimation(); fetch('https://api.thingspeak.com/update?api_key=T21XZQ6NK8OQGJLI&field1=1') }}
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
    backgroundColor:"#fff",
    paddingTop:210,
  
    
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
    backgroundColor: '#f7a923',
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

}
)

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
    }, 3000);
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
        <Stack.Screen name="Home"  component={MyTabs} />
        
      </Stack.Navigator>


   


    </NavigationContainer>




  );
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    
    <Tab.Navigator
    tabBarOptions={{
    
     style:{ 
 backgroundColor:'#fff',
 elevation:4,


     }
    }}
 
    >
     <Tab.Screen name="Task" component={Home} 
      options={{
        tabBarIcon:({focused})=>(
<View>
  <Image source={House}
resizeMode='contain'
style={{
  width:25,
  height:25,
  tintColor: focused ? '#6e34eb': '#8760fc',
}}
/>
</View>
        )
      }}/>
     
    
      <Tab.Screen name="Settings" component={Settings}
      
      options={{
        tabBarIcon:({focused})=>(
<View>
  <Image source={settings}
resizeMode='contain'
style={{
  width:30,
  height:30,
  tintColor: focused ? '#6e34eb': '#8760fc',
}}
/>
</View>
        )
      }}
      
      
      
      />
      <Tab.Screen name="AboutUs" component={AboutUs}
      
      
      
      
      options={{
        tabBarIcon:({focused})=>(
<View>
  <Image source={info}
resizeMode='contain'
style={{
  width:25,
  height:25,
  tintColor: focused ? '#6e34eb': '#8760fc',
}}
/>
</View>
        )
      }}
      
      
      
      
      />
    </Tab.Navigator>
  );
}


