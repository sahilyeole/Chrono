import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

const [time, setTime] = useState(0)
const [isRunning, setIsRunning] = useState(false)

let startTime
let intervalId
useEffect(() => {
  if(isRunning){
  
intervalId = setInterval(() => {
setTime(Date.now() - startTime)
},1) 
}
else if (!isRunning && time !== 0){
clearInterval(intervalId)
}
return () => clearInterval(intervalId)
}, [isRunning, time])

const handleStartStop = () => {
  startTime = Date.now()
setIsRunning(prev=>!prev)}

const handleReset = () => {
setTime(0)
setIsRunning(false)
}

// const displayTime = () => {
//   let hours = Math.floor(time / 3600000);
//   let minutes = Math.floor((time - (hours * 3600000)) / 60000);
//   let seconds = Math.floor((time - (hours * 3600000) - (minutes * 60000)) / 1000);
//   let milliseconds = time % 1000;
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
// }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.time}>{displayTime()}</Text> */}
      <Text style={styles.time}>{time}</Text>
      <Button title={isRunning?'Stop':'Start'} onPress={handleStartStop}/>
      <Button title={'Reset'} onPress={handleReset}/>
      <StatusBar style="auto" />
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
  time:{
    fontSize: 50,
  }
});
