import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import FooterNavigation from './FooterNavigation';
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  StyleProvider,
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Separator,
  ListItem,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import {Actions} from 'react-native-router-flux';
export default class RestaurantMenu extends Component {
  constructor() {
    super();
    this.state = {
      isHomeActive: false,
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
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require('../assert/res.jpg')}
                    scaleX={2.7}
                    scaleY={2.7}
                    style={{margin: 30}}
                  />
                  <Body>
                    <Text style={{fontSize: 30, margin: 30}}>Space Bakery</Text>
                    <Text style={{margin: 30}} note>
                      {' '}
                      <Icon style={{color: 'grey'}} name="ios-bus" /> Hlaing St.
                      Bahan
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Separator bordered>
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                Drinks
              </Text>
            </Separator>
            <ListItem>
              <Body>
                <Text>Mango Punch</Text>
                <Text note> 2000 mmk</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Rainbow Frappe</Text>
                <Text note> 4000 mmk</Text>
              </Body>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Iced Expresso</Text>
                <Text note> 1500 mmk</Text>
              </Body>
            </ListItem>
            <Separator bordered>
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                Soups
              </Text>
            </Separator>
            <ListItem>
              <Body>
                <Text>Ragù alla bolognese</Text>
                <Text note> 8000 mmk</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Ragù alla salsiccia</Text>
                <Text note> 6000 mmk</Text>
              </Body>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Risi e bisi</Text>
                <Text note> 8500 mmk</Text>
              </Body>
            </ListItem>
            <Separator bordered>
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                Dishes
              </Text>
            </Separator>
            <ListItem>
              <Body>
                <Text>Carbonara</Text>
                <Text note> 7000 mmk</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Lasagne</Text>
                <Text note> 6000 mmk</Text>
              </Body>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Fettuccine Alfredo</Text>
                <Text note> 5500 mmk</Text>
              </Body>
            </ListItem>
          </Content>
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
