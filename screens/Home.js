import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Image} from 'react-native';
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
  Item,
  Input,
  List,
  ListItem,
  Left,
  Right,
  Grid,
  Col,
  transparent,
  Fab,
  Badge,
  Row,
  Card,
  CardItem,
  Thumbnail,
  Body,
  View,
  Separator,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import FooterNavigation from './FooterNavigation';
import {Actions} from 'react-native-router-flux';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isHomeActive: true,
      isBookingActive: false,
      isMoreActive: false,
    };
    //this.handleOnclikTab = this.handleOnclikTab.bind(this);
  }
  handleBookNow() {
    Actions.replace('booknow');
  }

  handleViewMenu() {
    Actions.replace('showmenu');
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
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="navigate" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <Text
            style={[
              {fontWeight: '200', fontSize: 40, fontFamily: 'HelveticaNeue'},
            ]}>
            Cuisine
          </Text>
          <Content>
            <Grid>
              <Col
                style={{backgroundColor: transparent, height: 115, width: 330}}>
                <List>
                  <ListItem>
                    <Left>
                      <Text>Asian</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </Left>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Text>Desserts</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </Left>
                  </ListItem>
                </List>
              </Col>
              <Col style={{backgroundColor: transparent, height: 50}}>
                <Button
                  transparent
                  style={{paddingTop: 53, height: 70, width: 78}}>
                  <Text>More</Text>
                </Button>
              </Col>
            </Grid>
            <Separator bordered>
              <Text
                style={[
                  {
                    fontWeight: '200',
                    fontSize: 30,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                MOST POPULAR
              </Text>
            </Separator>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assert/res.jpg')} />
                  <Body>
                    <Text>Space Bakery</Text>
                    <Text note>Bahan</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={require('../assert/res.jpg')}
                  style={{height: 150, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={this.handleBookNow}>
                    <Icon style={{color: 'black'}} name="ios-heart" />
                    <Text style={{color: 'black'}}>Book Now</Text>
                  </Button>
                </Left>

                <Right>
                  <Button transparent onPress={this.handleViewMenu}>
                    <Icon style={{color: 'black'}} name="ios-book" />
                    <Text style={{color: 'black'}}>View Menu</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assert/ress.jpg')} />
                  <Body>
                    <Text>LE CELLIER</Text>
                    <Text note>Sule</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={require('../assert/ress.jpg')}
                  style={{height: 150, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={this.handleBookNow}>
                    <Icon style={{color: 'black'}} name="ios-heart" />
                    <Text style={{color: 'black'}}>Book Now</Text>
                  </Button>
                </Left>

                <Right>
                  <Button transparent onPress={this.handleViewMenu}>
                    <Icon style={{color: 'black'}} name="ios-book" />
                    <Text style={{color: 'black'}}>View Menu</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assert/resss.jpg')} />
                  <Body>
                    <Text>Diamond Chinese Cuisine</Text>
                    <Text note>Yankin</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={require('../assert/resss.jpg')}
                  style={{height: 150, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={this.handleBookNow}>
                    <Icon style={{color: 'black'}} name="ios-heart" />
                    <Text style={{color: 'black'}}>Book Now</Text>
                  </Button>
                </Left>

                <Right>
                  <Button transparent onPress={this.handleViewMenu}>
                    <Icon style={{color: 'black'}} name="ios-book" />
                    <Text style={{color: 'black'}}>View Menu</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
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

const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
