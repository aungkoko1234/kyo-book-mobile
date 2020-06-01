import React, {Component} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import {AppStyles} from './native-base-theme/variables/AppStyles';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import {

  Content,

  Text,
  Button,
  Icon,
  Left,

  Body,
 Card,
 CardItem,
 Separator,
 StyleProvider,
 Container,
 FooterTab,
 Footer,


} from 'native-base';

export default class resapprove extends Component {
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
                    <Icon name="ios-arrow-back" size={24} color="#52575D"></Icon>
         
                </View>


        

                
                <Content >
                <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
                <Image source={require("./res.jpg")} style={{height: 200, width: 370, flex: 1}}/>
                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>AA001</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Space Bakery</Text>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 ,color:"#B22222"}]}>3/6/2020</Text>
                        <Text style={[styles.text, styles.subText]}>Date</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 ,color:"#B22222"}]}>4 person</Text>
                        <Text style={[styles.text, styles.subText]}>Number</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 ,color:"#B22222"}]}>12:00 pm</Text>
                        <Text style={[styles.text, styles.subText]}>Time</Text>
                    </View>
                </View>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
               
                </Button>
              </Left>
            </CardItem>
          </Card>
         
 
          <Separator bordered />
       
             <Body>
             <View style={styles.statsContainer}>
                   
                   <Button style={{backgroundColor:"green" }}>
           <Text>Accept</Text>
         </Button>
                   </View>
                   <View style={styles.statsContainer}>
                   
                   <Button style={{backgroundColor:"red"}}>
           <Text>Decline</Text>
         </Button>
                   </View>
                   
           
             </Body>
       
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







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },


  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal:16
},
text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
},





infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
},
statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
},
statsBox: {
    alignItems: "center",
    flex: 1
},

subText: {
    fontSize: 12,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500"
},
 
});
