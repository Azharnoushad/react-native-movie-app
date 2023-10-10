import {
  Animated,
  Easing,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../Context/PlaceContext";
import movieData from "../json/MovieData.json";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  const moveAnimation = new Animated.Value(0);

  const { selectedCity, setSelectedCity } = useContext(Place);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: 1.1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello Azhar Noushad</Text>,
      headerStyle: {
        backgroundColor: "#F5F5F5",
        elevation: 50,
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons
            name="location-outline"
            size={24}
            color="black"
            onPress={() => navigation.navigate("PlaceScreen")}
          />

          <Pressable onPress={() => navigation.navigate("PlaceScreen")}>
            <Animated.Text
              style={[styles.text, { transform: [{ scale: moveAnimation }] }]}
            >
              <Text>{selectedCity}</Text>
            </Animated.Text>
          </Pressable>
        </Pressable>
      ),
    });
  }, [selectedCity]);

  return (
    <View>
      <FlatList
      numColumns={2}
      columnWrapperStyle={{justifyContent:"space-between"}}
        ListHeaderComponent={Header}
        data={movieData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard item={item} key={item.id} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: 16,
});
