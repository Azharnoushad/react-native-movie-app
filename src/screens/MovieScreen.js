import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Calender from "../components/Calender";
import moment from "moment";
import MallsData from "../json/MallsData.json";
import { Place } from "../Context/PlaceContext";

const MovieScreen = () => {
  const { selectedCity } = useContext(Place);
  const { params } = useRoute();
  const navigation = useNavigation();
  const [malls,setMalls] = useState([])
  console.log(malls)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.title,
      headerStyle: {
        backgroundColor: "#F5F5F5",
        elevation: 50,
        shadowColor: "transparent",
      },
    });
  });

  const todayDate = moment().format("YYYY-MM-DD");

  const [selectedDate, setSelectedDate] = useState(todayDate);


 

  return (
    <View>
      <ScrollView contentContainerStyle={{marginLeft:10}}>
        <Calender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
       {
        MallsData.filter((data)=>data.place === selectedCity).map((item)=>item.galleria.map((multiplex,index)=>{
          return (
            <Pressable key={index} style={{marginVertical:10,paddingHorizontal:20}} onPress={()=>{
              setMalls(multiplex.name)
            }}>
              <Text style={{fontSize:18,fontWeight:"500"}}>{multiplex.name}</Text>
              {
                malls.includes(multiplex.name) ? (
                  <FlatList numColumns={3} data={multiplex.showtimes} keyExtractor={(item,i)=>i} renderItem={({item})=>(
                    <Pressable style={{borderColor:"green",borderWidth:0.7,padding:5,width:70,borderRadius:5,margin:8}}>
                      <Text style={{textAlign:"center",color:"green",fontSize:15,fontWeight:"600"}}>{item}</Text>
                    </Pressable>

                  )} />
                ) : (null)
              }
            </Pressable>
          )
        }))
       }
      </ScrollView>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
