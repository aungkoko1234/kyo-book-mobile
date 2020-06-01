import React, {Component} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import {AppStyles} from './native-base-theme/variables/AppStyles';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import {
  StyleProvider,
  Container,

  Content,

  Text,
  Button,
  Icon,
  Left,
  Right,

  List,
  ListItem,
  Footer,
  FooterTab,
  Body,
  

} from 'native-base';


export default class invite extends Component {
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
      <Content >
      <View style={styles.titleBar}>
                    <Icon name="ios-arrow-back" size={24} color="#52575D"></Icon>
                   
                </View>


                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("./friends.png")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    
                </View>
        

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 45 }]}>INVITE</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Let's Invite Your Friends</Text>
                </View>
                <View style={styles.container}>
                <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Through Email"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Through SMS"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        </View>
        
        <Body>
             
                   <View style={styles.statsContainer}>
                   
                   <Button full style={{backgroundColor:"grey"}}>
           <Text>Next</Text>
           <Icon name="arrow-forward" style={{color: 'black'}} />
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
profileImage: {
    width: 300,
    height: 300,
    borderRadius: 100,
    overflow: "hidden"
},
image: {
  flex: 1,
  height: undefined,
  width: undefined
},
InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
},
dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
},
active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
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
infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
},
body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
subText: {
    fontSize: 12,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500"
},
container: {
    flex: 5,
    alignItems: 'center',
  },
 
});
