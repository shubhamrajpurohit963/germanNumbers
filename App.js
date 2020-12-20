import React from 'react'
import {Text,View,TouchableOpacity,ScrollView,Image,StyleSheet} from 'react-native'
import Sound from 'react-native-sound'

const soundList = [
  require('./assets/0.mp3'),
  require('./assets/1.mp3'),
  require('./assets/2.mp3'),
  require('./assets/3.mp3'),
  require('./assets/4.mp3'),
  require('./assets/5.mp3'),
  require('./assets/6.mp3'),
  require('./assets/7.mp3'),
  require('./assets/8.mp3'),
  require('./assets/9.mp3'),
  require('./assets/10.mp3')
];

const App = () => {

  const playSound = (sound) => {
      const soundObj = new Sound(sound,Sound.MAIN_BUNDLE, (err)=>{
        if(err){
          console.log("Failed to play");
        }
      });

      setTimeout(()=>{
        soundObj.play();
      },100);


      soundObj.release();
  }
  

  return(
    
    <ScrollView style={styles.container}>
      <Text style={styles.title}>German Numbers</Text>
        <View style={styles.gridContainer}>
          {soundList.map((sound)=>(
            <TouchableOpacity key={sound} style={styles.box} onPress={()=>{ playSound(sound) }}>
              <Text style={styles.text}>{sound-1}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 34,
    marginTop: 40,
    fontFamily: 'cursive'
  },
  container: { 
    flex: 1,
    backgroundColor: '#010166'
  },
  gridContainer: {
    flex: 1,
    margin:5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  box: {
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0F4c75',
    borderRadius: 10,
    shadowColor: '#393e46',
    elevation: 5

  },
  text: {
    fontSize: 40,
    color: '#FF4343'
  }
})

