import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {AppStyles} from '../native-base-theme/variables/AppStyles';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
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
  Segment,
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class login extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header hasSegment style={{backgroundColor: 'grey'}}>
            <Left>
              <Button
                transparent
                onPress={() => {
                  Actions.pop();
                }}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Login to your Account</Title>
            </Body>
            <Right />
          </Header>

          <Segment style={{backgroundColor: 'grey'}}>
            <Button
              bordered
              style={{borderColor: '#77e686'}}
              first
              onPress={() => {
                Actions.replace('newregister');
              }}>
              <Text style={{color: 'black'}}>SignUp</Text>
            </Button>
            <Button bordered style={{borderColor: '#77e686'}}>
              <Text style={{color: 'black'}}>Login</Text>
            </Button>
          </Segment>

          <Content padder>
            <View style={styles.container}>
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
                  secureTextEntry={true}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={styles.ButtonContainer}>
                <Button
                  bordered
                  onPress={() => Actions.replace('home')}
                  style={{borderColor: '#77e686', backgroundColor: 'grey'}}>
                  <Text style={styles.Text}>Login</Text>
                  <Icon name="arrow-forward" style={{color: '#77e686'}} />
                </Button>
              </View>
            </View>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: AppStyles.color.green,
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
    width: AppStyles.textInputWidth.white,
    marginTop: 50,
    marginBottom: 60,
  },
  Text: {
    paddingLeft: 30,
    paddingRight: 0,
    color: AppStyles.color.white,
  },

  facebookText: {
    color: AppStyles.color.white,
  },
});
