import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Right,
  Body,
  Title,
  StyleProvider,
} from 'native-base';
import {AppStyles} from '../native-base-theme/variables/AppStyles';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import Login from './Login';
import Register from './Register';
class Auth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header hasTabs>
            <Left />
            <Body>
              <Title> Register An Account</Title>
            </Body>
          </Header>
          <Tabs>
            <Tab heading="Login">
              <Login />
            </Tab>
            <Tab heading="Register">
              <Register />
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}

export default Auth;
