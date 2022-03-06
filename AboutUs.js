import React from 'react';
import {SafeAreaView, Text,View} from 'react-native';
import cpu from './assets/cpu.json';
import LottieView from 'lottie-react-native';
 export default function AboutUs() {
    return (


    
      <View>
<LottieView style={{ alignItems: 'center',width: '100%',height: '65%',marginHorizontal:65,paddingBottom:40}}
    autoPlay   source={cpu}/>

</View>

      
        )
}