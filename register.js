import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {AppStyles} from './native-base-theme/variables/AppStyles';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import {
  StyleProvider,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Row,
  Grid,
  Col,
  transparent,
} from 'native-base';

export default class register extends Component {
    
  render() {
    return (
      <View style={styles.container}>


        <Grid>
          <Col style={{backgroundColor: transparent, height: 50, width: 70}}>
            <Button transparent style={{paddingTop: 13, height: 70, width: 70}}>
              <Icon style={{color: 'black'}} name="arrow-back" />
            </Button>
          </Col>
          <Col style={{backgroundColor: transparent, height: 50}}>
            <Text style={[styles.title]}>Create new account</Text>
          </Col>
        </Grid>

        
       
        <Grid>
          <Col style={{ backgroundColor: '#b5b5b5', height: 45 }}>
          <Button bordered borderColor="white">
            <Text style={{color: 'black'}}>Sign Up</Text>
          </Button>
          </Col>
          <Col style={{ backgroundColor: '#b5b5b5', height: 45 }}>
          <Button bordered borderColor="white">
            <Text style={{color: 'black'}}> Login </Text>
          </Button>
          </Col>
        </Grid>
          

         
    
   




        <Icon
          ios="ios-image"
          android="ios-image"
          style={{fontSize: 50, color: 'black'}}
        />
        <Text>Edit Profile Picture</Text>

        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Full Name"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Email"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Password"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Mobile Number"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Gender"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button light>
            <Text style={styles.Text}>Sign Up</Text>
            <Icon name="arrow-forward" style={{color: 'black'}} />
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.title,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  ButtonContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 50,
    marginBottom:60,
  },
  Text: {
    paddingLeft: 130,
    paddingRight: 0,
    color: AppStyles.color.title,
  },



  facebookText: {
    color: AppStyles.color.white,
  },
});
