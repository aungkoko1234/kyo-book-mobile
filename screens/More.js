import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import FooterNavigation from './FooterNavigation';
import {AppStyles} from '../native-base-theme/variables/AppStyles';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import {Actions} from 'react-native-router-flux';
import {
  StyleProvider,
  Container,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  List,
  ListItem,
  Footer,
  FooterTab,
} from 'native-base';

export default class More extends Component {
  constructor() {
    super();
    this.state = {
      isHomeActive: false,
      isBookingActive: false,
      isMoreActive: true,
    };
    //this.handleOnclikTab = this.handleOnclikTab.bind(this);
  }
  handleOnclikTab(iconName) {
    console.log('here is ', iconName);
    switch (iconName) {
      case 'home':
        this.setState({
          isHomeActive: true,
          isBookingActive: false,
          isMoreActive: false,
        });
        Actions.replace('home');
        break;
      case 'booking':
        this.setState({
          isHomeActive: false,
          isBookingActive: true,
          isMoreActive: false,
        });
        Actions.replace('booking');
        break;
      case 'more':
        this.setState({
          isHomeActive: false,
          isBookingActive: false,
          isMoreActive: true,
        });
        Actions.replace('more');
        break;
    }
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <View style={styles.titleBar}>
            <Icon name="ios-arrow-back" size={24} color="#52575D" />
            <Icon name="md-more" size={24} color="#52575D" />
          </View>

          <View style={{alignSelf: 'center'}}>
            <View style={styles.profileImage}>
              <Image
                source={require('../assert/profileP.jpg')}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            <View style={styles.dm}>
              <Icon name="chat" size={18} color="#DFD8C8" />
            </View>
            <View style={styles.active} />
            {/* <View style={styles.add}>
              <Icon
                name="add"
                size={20}
                color="#DFD8C8"
                style={{marginTop: 3, marginLeft: 3}}
              />
            </View> */}

            <View style={styles.infoContainer}>
              <Text style={[styles.text, {fontWeight: '200', fontSize: 26}]}>
                Julie
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
                09450991607
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={[styles.statsBox]}>
                <Button bordered borderColor="#DFD8C8">
                  <Text style={[styles.text, styles.subText]}>
                    Edit Profile
                  </Text>
                </Button>
              </View>
            </View>
            <Content>
              <List>
                <ListItem>
                  <Left>
                    <Text>Invite friends</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>About Us</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Rate Our App</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Language</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Notification Setting</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Privacy Policy</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Frequently Asked Questions</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Legal Information</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Log Out</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </Content>
          </View>
          <FooterNavigation
            homeActive={this.state.isHomeActive}
            bookingActive={this.state.isBookingActive}
            moreActive={this.state.isMoreActive}
            handleOnclikTab={type => this.handleOnclikTab(type)}
          />
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 50,
    width: 50,
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
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },

  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  subText: {
    fontSize: 12,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});
