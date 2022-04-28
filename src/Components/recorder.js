import React, { useState, useEffect }  from 'react';
import { Text, Button } from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { Separator } from '../Styles';


//https://hackernoon.com/recording-audio-in-react-native-ca1d3uc8
const Recorder = () => {

    const audioRecorderPlayer = new AudioRecorderPlayer();


    const onStartRecorder = async () => {
        console.log('Start recording')
        const result = await audioRecorderPlayer.startRecorder()
    }

    const onStopRecorder = async () => {
        console.log('Stop recording')
        const result = await audioRecorderPlayer.stopRecorder();
    }
      
      
   return(
       <>
        <Button 
            title="START"
            onPress={()=>{onStartRecorder()}}
        />
        <Separator/>
        <Button 
            title="STOP"
            onPress={()=>{onStopRecorder()}}
        />
    </>
   )
}

module.exports = Recorder