import React, {Component} from 'react';
import {FooterTab, Footer, Button, Icon, Text} from 'native-base';
class FooterNavigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => this.props.handleOnclikTab('home')}
            active={this.props.homeActive}>
            <Icon name="home" active={this.props.homeActive} />
            <Text>Home</Text>
          </Button>
          <Button
            active={this.props.bookingActive}
            vertical
            onPress={() => this.props.handleOnclikTab('booking')}>
            <Icon
              name="receipt"
              type="FontAwesome5"
              active={this.props.bookingActive}
            />
            <Text>Booking</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.handleOnclikTab('more')}
            active={this.props.moreActive}>
            <Icon name="menu" active={this.props.moreActive} />
            <Text>More</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterNavigation;
