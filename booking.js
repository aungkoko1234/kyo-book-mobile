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
  DatePicker,
  ActionSheet,
  Form,
  Picker,
  CheckBox,
} from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import Right from './native-base-theme/components/Right';

export default class menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHomeActive: true,
      isBookingActive: false,
      isMoreActive: false,
      selected: undefined,
    };

    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
    //this.handleOnclikTab = this.handleOnclikTab.bind(this);
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
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

            <Separator bordered />
            <Body>
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                Numbers of customers
              </Text>
            </Body>

            <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{color: '#2874F0'}}
              note={false}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="One" value="key0" />
              <Picker.Item label="Two" value="key1" />
              <Picker.Item label="Three" value="key2" />
              <Picker.Item label="Four" value="key3" />
              <Picker.Item label="Five" value="key4" />
            </Picker>

            <Separator bordered />
            <Body>
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                Pick Dining Date
              </Text>
              <DatePicker
                defaultDate={new Date(2020, 4, 4)}
                minimumDate={new Date(2020, 1, 1)}
                maximumDate={new Date(2020, 12, 31)}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Select date"
                textStyle={{color: '#2E8B57'}}
                placeHolderTextStyle={{color: '#8FBC8F'}}
                onDateChange={this.setDate}
                disabled={false}
              />

              <Text style={{fontSize: 25, margin: 30}}>
                {' '}
                Booking Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </Body>
            <Separator bordered />

            <Body>
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontFamily: 'HelveticaNeue',
                  },
                ]}>
                Available TimeSlots
              </Text>
              <Button style={[{height: 2, color: 'transparent'}]} />
              <Card>
                <CardItem>
                  <CheckBox checked={false} color="#2E8B57" />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>10:00 am ~ 11:00 am</Text>
                </CardItem>
                <CardItem>
                  <CheckBox checked={true} color="#2E8B57" />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>12:00 am ~ 1:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox checked={false} color="#2E8B57" />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>2:00 pm ~ 3:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox checked={false} color="#2E8B57" />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>4:00 pm ~ 5:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox checked={false} color="#2E8B57" />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>6:00 pm ~ 7:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox checked={false} color="#2E8B57" />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>8:00 pm ~ 9:00 pm</Text>
                </CardItem>
              </Card>
              <Button style={[{height: 2, color: 'transparent'}]} />
              <Button
                bordered
                style={[
                  {
                    borderColor: '#2E8B57',
                  },
                ]}>
                <Text
                  style={[
                    {color: 'black', fontSize: 20, fontFamily: 'HelveticaNeue'},
                  ]}>
                  Book Now !
                </Text>
                <Icon name="arrow-forward" style={{color: '#2E8B57'}} />
              </Button>
              <Button style={[{height: 4, color: 'transparent'}]} />
            </Body>

            <Separator bordered />
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
