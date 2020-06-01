import React, {Component} from 'react';

import { Text, View, StyleSheet, ImageBackground } from "react-native";
import {AppStyles} from './native-base-theme/variables/AppStyles';
import { Button,Icon } from 'native-base';




export default class welcome extends Component {
 

  render() {
  

    return (
      
     
      <ImageBackground source={require("./wc.jpg")} style={styles.container} >

 <View style={styles.ButtonContainer}>
          <Button  style={{backgroundColor:"transparent"}}>
            <Text style={{ fontWeight: "200", fontSize: 36 ,fontFamily: "sans-serif-condensed", paddingLeft:30,
    paddingRight: 0,
    color: "white",}}>Let's Go </Text>
            <Icon name="arrow-forward" style={{color: 'white'}} />
          </Button>
        </View>
     
        </ImageBackground>
     
    
    );
  }

}
     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0
  },
  ButtonContainer: {
    width: AppStyles.textInputWidth.white,
    marginTop: 600,
    marginBottom:0,
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15
  },
  signupText: {
    color: AppStyles.color.tint
  },

  spinner: {
    marginTop: 200
  }
});

