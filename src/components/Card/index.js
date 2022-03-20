import React from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
const Card = (props) =>{
    const {name, image, bio} = props.user;

    return(      
    <View style={styles.card}>
        <ImageBackground source={{
          uri:image
          }}
          style={styles.image}
        >
          <View style={styles.innerImage}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </ImageBackground>
    </View>)
}
const styles = StyleSheet.create({
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
export default Card;