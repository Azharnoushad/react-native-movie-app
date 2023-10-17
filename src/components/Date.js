import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment'

const Date = ({date,selectedDate,setSelectedDate}) => {
    const day = moment(date).format('ddd')
    const dayNum = moment(date).format("D")
    const fullDate = moment(date).format("YYYY-MM-DD")

    
  return (
    <Pressable style={[styles.container,selectedDate === fullDate && {backgroundColor:"#ffc40c"}]} onPress={()=>setSelectedDate(fullDate)}>
        <Text style={[styles.day,selectedDate === fullDate && {color:"#fff",fontSize:18,fontWeight:"700"}]}>{day}</Text>
        <View style={{height:10}}></View>
        <Text style={[styles.day,selectedDate === fullDate && {color:"#fff",fontSize:18,fontWeight:"700"}]}>{dayNum}</Text>
    </Pressable>
  )
}

export default Date

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#E0E0E0",
        borderRadius:10,
        borderColor:"#ddd",
        padding:10,
        width:70,
        height:70,
        marginHorizontal:6,
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center"
    }
})