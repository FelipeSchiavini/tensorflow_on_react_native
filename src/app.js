import React, { useState } from 'react';
import { Button, View, SafeAreaView, Text } from 'react-native';
import { styles, Separator } from './Styles';
import * as tf from '@tensorflow/tfjs';
import  { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import RNFS from 'react-native-fs';
import Papa from 'papaparse';
import Recorder from './Components/recorder'
import Constants from 'expo-constants';

const App = () =>  {
  
  console.log(Constants.systemFonts);
  const [prediction, setPredicition] = useState('Not Predict Yet')

  const model = async () => {
    console.log("[+] Loading custom snoring model")
    const tfReady = await tf.ready(); 
    const modelJson = await require('../src/Assets/model.json');
    const modelWeights = await require('../src/Assets/group.bin');
    const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights))
    // console.log("🚀 ~ file: app.js ~ line 21 ~ model ~ model", model)


    // usemodelEncoder()
    // const model = await tf.loadLayersModel(bundleResourceIO(modelJson,modelWeight));
    const res = model.predict(
      tf.tensor(
      [-208.3402, 89.01153, -1.805011, 42.36235,
      -35.381466  ,   37.702522  ,   -9.982837  ,    3.8195863 ,
        8.739976  ,    2.045938  ,  -32.849846  ,    7.1250577 ,
      -16.325867  ,   -3.4849517 ,  -19.663229  ,    1.6758095 ,
      -19.964882  ,  -15.923611  ,  -17.67897   ,  -16.511545  ,
      -15.340615  ,  -12.562949  ,   -9.22409   ,  -10.634009  ,
        -6.8426547 ,   -0.33885616,  -11.62439   ,   -1.6321721 ,
        -2.6162214 ,   -4.9904995 ,   -2.1966019 ,   -2.2225428 ,
        -5.8220596 ,    1.8881551 ,   -4.402332  ,    0.55386394,
        -4.001767  ,   -1.9566058 ,   -4.5461855 ,   -4.95463   ], [1, 40]
      )
            )
    console.log("🚀 ~ file: app.js ~ line 41 ~ model ~ res", res)
    // const data = await res.data();
    // console.log(JSON.stringify(data));   
  }

  const getSnoringPredict = async() => {

    const path = RNFS.DocumentDirectoryPath + '/felipe.csv'
    const csvFile = await RNFS.readFile(path) 
    var results = Papa.parse(csvFile, {
      header: true
    });

    console.log(results.data[0][0])

    setPredicition('predicting...')
    setTimeout(() => {
      setPredicition('aaaa')
    }, 1500);
  }


    return(
      <SafeAreaView style={styles.container}>
        <Recorder/>
        <Separator />
        <View>
          <Button 
            title="Predict"
            onPress={()=>{getSnoringPredict()}}
          />
        </View>
        <Separator />
        <View>
          <Button
            title="RUN MODEL"
            onPress={() => model()}
          />
        </View>
        <Text style={styles.prediction}>
        {prediction}
      </Text>
      </SafeAreaView>
    )
  }



export default App;