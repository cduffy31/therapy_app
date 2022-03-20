import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import Card from 'src/components/Card'

const App = () =>{
  return (
    <View style={styles.pageContainer}>
      <Card/>
      <View style={styles.card}>
        <ImageBackground source={{
          uri:'https://www.tortilla.co.uk/wp-content/uploads/2017/11/505-x-404-Images_0011_Russell-Square-.png'
          }}
          style={styles.image}
        >
          <View style={styles.innerImage}>
            <Text style={styles.name}>Tortilla Camden</Text>
            <Text style={styles.bio}>Nothing goes better with arts and crafts than a good ol' burrito! </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
    flex:1,
  },
  card:{
    width:'95%',
    height:'70%',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:5,
    },
    shadowOpacity:0.36,
    shadowRadius:6.63,
    elevation:11,
  },
  image: {
    width:'100%',
    height:'100%',
    borderRadius:10,
    overflow: 'hidden',
    justifyContent:'flex-end',
  },
  innerImage:{
    padding:10
  },
  name:{
    fontSize:30,
    color:'white',
    fontWeight:'bold',
  },
  bio:{
    fontSize:20,
    color:'white',
    lineHeight:25
  },
});

export default App;