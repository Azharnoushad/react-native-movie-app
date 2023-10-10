import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{marginBottom:60}}>
      <Image
        source={{
          uri: "https://images8.alphacoders.com/113/thumb-1920-1130536.jpg",
        }}
        style={{ height: 200 }}
        resizeMode="cover"
      ></Image>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between",
          width: "94%",
          backgroundColor: "#fff",
          elevation: 10,
          position: "absolute",
          bottom: -45,
          left:10,
          padding:15,
          borderRadius:15
        }}
      >
        <View >
          <Text style={{fontSize:18,color:"gray",letterSpacing:1.2,paddingBottom:3}}>Relesing in 2 days</Text>
          <Text style={{fontSize:20,fontWeight:"600",letterSpacing:1.5,paddingBottom:3}}>BATMAN</Text>
          <Text style={{fontSize:18,color:"gray"}}>U/A. ENGLISH</Text>
        </View>
        <TouchableOpacity style={{borderRadius:5,backgroundColor:"#ffc40c",paddingHorizontal:30,paddingVertical:8}} activeOpacity={0.8}>
          <Text style={{color:"#ffffff",fontSize:20,fontWeight:"700",letterSpacing:1.5}}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
