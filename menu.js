import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
  View,
  Image,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Separator,
  ListItem,

} from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import Right from './native-base-theme/components/Right';

export default class menu extends Component {
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
          <Header>
            <View
              style={{
                flexDirection: 'row',

                marginTop: 12,

                marginRight: 350,
              }}>
              <Icon name="ios-arrow-back" size={24} color="#52575D" />
            </View>
          </Header>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require('./res.jpg')}
                    scaleX={2.7} scaleY={2.7} style={{margin: 30}} 
                  />
                  <Body>
                    <Text style={{fontSize: 30,margin: 30 }} >Space Bakery</Text>
                    <Text style={{margin: 30 }} note> <Icon style={{color:"grey"}}  name="ios-bus"></Icon>  Hlaing St. Bahan</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Separator bordered>
            <Text   style={[
                  {
                 
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>Drinks</Text>
          

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
            <Text   style={[
                  {
                 
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>Soups</Text>
          

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
            <Text   style={[
                  {
                 
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>Dishes</Text>
          

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
        </Container>
      </StyleProvider>
    );
  }
}
