import { Alert } from 'react-native';


export const pocFunction = () => {
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "firstButton",
            onPress: () => console.log("do some Action"),
            style: "cancel"
          },
          { text: "SecondButton", onPress: () => console.log("do some action") }
        ]
      );
    }


export function pocFunctionWithParams (param) {
    Alert.alert(`params: ${param}`)
}