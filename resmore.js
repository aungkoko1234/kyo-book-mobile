import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {AppStyles} from './native-base-theme/variables/AppStyles';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

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

export default class profile extends Component {
  constructor() {
    super();
    this.state = {
      isHomeActive: true,
      isBookingActive: false,
      isMoreActive: false,
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
        break;
      case 'booking':
        this.setState({
          isHomeActive: false,
          isBookingActive: true,
          isMoreActive: false,
        });
        break;
      case 'more':
        this.setState({
          isHomeActive: false,
          isBookingActive: false,
          isMoreActive: true,
        });
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
                source={require('./res.jpg')}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            <View style={styles.dm}>
              <Icon name="chat" size={18} color="#DFD8C8" />
            </View>
            <View style={styles.active} />
            <View style={styles.add}>
              <Icon
                name="ios-add"
                size={48}
                color="#DFD8C8"
                style={{marginTop: 6, marginLeft: 2}}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
                Space Bakery
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
                    <Text>About Us</Text>
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

            <Footer>
              <FooterTab>
                <Button
                  vertical
                  onPress={() => this.handleOnclikTab('home')}
                  active={this.state.isHomeActive}>
                  <Icon name="home" active={this.state.isHomeActive} />
                  <Text>Home</Text>
                </Button>
                <Button
                  active={this.state.isBookingActive}
                  vertical
                  onPress={() => this.handleOnclikTab('booking')}>
                  <Icon
                    name="receipt"
                    type="FontAwesome5"
                    active={this.state.isBookingActive}
                  />
                  <Text>Booking</Text>
                </Button>
                <Button
                  vertical
                  onPress={() => this.handleOnclikTab('more')}
                  active={this.state.isMoreActive}>
                  <Icon name="menu" active={this.state.isMoreActive} />
                  <Text>More</Text>
                </Button>
              </FooterTab>
            </Footer>
          </View>
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
