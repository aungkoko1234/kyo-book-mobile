import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Right,
  Button,
  Body,
} from 'native-base';
class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Icon active name="user" type="FontAwesome5" />
              </Body>
            </CardItem>
            <CardItem>
              <Item floatingLabel last>
                <Label>Username</Label>
                <Input />
              </Item>
            </CardItem>
            <CardItem>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
            </CardItem>
            {/* <CardItem> */}
            <Button block primary>
              <Text>Login</Text>
            </Button>
            {/* </CardItem> */}
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Login;
