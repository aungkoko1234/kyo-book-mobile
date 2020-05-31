import React, {Component} from 'react';
import {
  StyleProvider,
  Container,
  Header,
  Content,
  Accordion,
} from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
export default class AccordionIconExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header />
          <Content padder>
            <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
