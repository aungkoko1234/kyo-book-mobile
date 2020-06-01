import React, {Component} from 'react';
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
  Radio,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import FooterNavigation from './FooterNavigation';
import {Actions} from 'react-native-router-flux';

class BookingDetail extends Component {
  constructor() {
    super();
    this.state = {
      isHomeActive: false,
      isBookingActive: true,
      isMoreActive: false,
      selected: undefined,
      check10: false,
      check12: false,
      check2: false,
      check4: false,
      check6: false,
      check8: false,
    };
    //this.handleOnclikTab = this.handleOnclikTab.bind(this);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  handleCheckChange(name) {
    this.setState({
      [name]: true,
    });
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
  onValueChange(value) {
    this.setState({
      selected: value,
    });
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

              <Text style={{fontSize: 18, margin: 30}}>
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
                  <CheckBox
                    onPress={() => this.handleCheckChange('check10')}
                    checked={this.state.check10}
                    color="#2E8B57"
                  />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>10:00 am ~ 11:00 am</Text>
                </CardItem>
                <CardItem>
                  <CheckBox
                    onPress={() => this.handleCheckChange('check12')}
                    checked={this.state.check12}
                    color="#2E8B57"
                  />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>12:00 am ~ 1:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox
                    onPress={() => this.handleCheckChange('check2')}
                    checked={this.state.check2}
                    color="#2E8B57"
                  />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>2:00 pm ~ 3:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox
                    onPress={() => this.handleCheckChange('check4')}
                    checked={this.state.check4}
                    color="#2E8B57"
                  />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>4:00 pm ~ 5:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox
                    onPress={() => this.handleCheckChange('check6')}
                    checked={this.state.check6}
                    color="#2E8B57"
                  />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>6:00 pm ~ 7:00 pm</Text>
                </CardItem>
                <CardItem>
                  <CheckBox
                    onPress={() => this.handleCheckChange('check8')}
                    checked={this.state.check8}
                    color="#2E8B57"
                  />

                  <Icon style={[{marginLeft: 20}]} name="ios-clock" />
                  <Text>8:00 pm ~ 9:00 pm</Text>
                </CardItem>
              </Card>
              <Button style={[{height: 2, color: 'transparent'}]} />
              <Button
                bordered
                onPress={() => Actions.replace('booked')}
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

export default BookingDetail;
