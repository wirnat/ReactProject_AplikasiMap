import React,{useState} from 'react';
import { StyleSheet,Alert, Text, View,TouchableOpacity } from 'react-native';
import {  Feather } from '@expo/vector-icons';
import UsersMap from './component/UsersMap'
export default class App extends React.Component {

  state={
    userLocation:null
  }

  render(){
    return (
      <View style={styles.parent}>
        <View style={styles.banner}>
          <View style={styles.bannerX}></View>
        </View>
        <TouchableOpacity onPress={this.openmap} style={{backgroundColor:'pink',flex:1,height:60,marginRight: 4,justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}><Feather size={32} color="orange" name="map-pin"/></Text>
        </TouchableOpacity>
        <View style={{backgroundColor:'yellow',flex:1,height:60,marginRight:4}}></View>
        <View style={{backgroundColor:'orange',flex:1,height:60}}></View>
        <UsersMap style={styles.mapping} userLocation={this.state.userLocation}/>
      </View>
    );
  }
  openmap=()=>{
    console.log("opened")
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position)
      this.setState({
        userLocation:{
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }
      })
    },err=>{
      console.log(err)
    })
  }
}

const styles = StyleSheet.create({
  parent:{
    backgroundColor:'#ededed',
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    paddingTop:20,
    padding:10
  },
  banner:{
    backgroundColor:'#edefaa',
    position:"relative",
    flexDirection:"row",
    width:"100%",
    height:80,
    marginBottom:10
  },
  bannerX:{
    backgroundColor:'red',
    position:'absolute',
    top:-10,
    right:-10,
    width:20,
    height:20,
    borderRadius:50
  },
  mapping:{
    paddingBottom:10
  }

});
