import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import LottiesAnimation from './animation3.json';
import LottiesAnimation1 from './animation.json';

import {Skottie} from 'react-native-skottie';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Text style={{textAlign: 'center', fontSize: 30}}>
          React Native Skottie
        </Text>
        <Skottie
          style={{width: 350, height: 350}}
          source={LottiesAnimation}
          autoPlay={true}
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          React Native Lottie
        </Text>

        <LottieView
          source={LottiesAnimation}
          style={{width: 350, height: 350}}
          autoPlay
          loop
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          React Native Skottie
        </Text>
        <Skottie
          style={{width: 350, height: 350}}
          source={LottiesAnimation1}
          autoPlay={true}
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          React Native Lottie
        </Text>

        <LottieView
          source={LottiesAnimation1}
          style={{width: 350, height: 350}}
          autoPlay
          loop
        />
      </ScrollView>
    </View>
  );
};

export default App;
