import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, Button } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [show, setShow] =  useState(false);  
  const [date, setDate] = useState(new Date());
  const [tanaan, setTanaan] = useState(new Date());

  //Function fow showing alert
  const showAlert = () =>{
    //if (setmyDate > tanaan) {
      Alert.alert(
        "Hahaa!",
        "Olet myöhässä!",
        [
          {
            text: "OK",
            onPress: () => setShow(true)
          },
          {
            text: 'Cancel',
            onPress: () => setShow(false)
          }
        ]
      )
  //}
}

  //Function for setting new date (onChange). 
  //You can check the date and initate the alert here also
  const setmyDate = (e, myDate)=>{
    setShow(false)
    const currentDate = myDate || date
    setDate(currentDate)
  };

  //You need DatePicker, button and textfield
  return (
    <View style={styles.container}>
    <Pressable
      onPress={setmyDate}>
        <Text>{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</Text>
      </Pressable>
    {Platform.OS === 'ios' && (
      <DateTimePicker
      style={{with:320}}
      mode={'date'}
      display='default'
      value={date}
      onChange={showAlert}
      />
    )}
    {Platform.OS === 'android' && (
      <DateTimePicker
      mode={'date'}
      display='default'
      value={date}
      onChange={showAlert}
      />
    )}
      {/* <Text>{tanaan}</Text> */}
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
