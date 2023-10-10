import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../Context/PlaceContext";
import { Octicons } from "@expo/vector-icons";
import placeData from "../json/Places.json";
import { AntDesign } from "@expo/vector-icons";

const PlaceScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
        >
          <Ionicons
            name="ios-arrow-back-circle-outline"
            size={30}
            color="#004F98"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 22, fontWeight: "500", letterSpacing: 1 }}>
            Change Location
          </Text>
        </Pressable>
      ),
    });
  }, []);

  const { selectedCity, setSelectedCity } = useContext(Place);

  const getPlaceHandler = (place) => {
    setSelectedCity(place);
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 1000);
  };

  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 22,
          borderWidth: 1,
          borderColor: "lightgray",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <TextInput
          placeholder="Search Your City"
          cursorColor="black"
          style={{ flex: 1, fontSize: 20 }}
          placeholderTextColor="gray"
        />
        <Octicons name="search" size={24} color="black" />
      </View>
      <View>
        <Text style={{ padding: 10 }}>Selected Location:</Text>
        <Text>{selectedCity}</Text>
      </View>

      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={placeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={{ marginBottom: 20 }}
            onPress={() => getPlaceHandler(item.place)}
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={{ width: 160, height: 100 }}
              imageStyle={{ borderRadius: 8 }}
            >
              {selectedCity === item.place && (
                <View
                  style={{
                    marginLeft: 7,
                    marginTop: 7,
                    flex: 1,
                    alignContent: "flex-start",
                  }}
                >
                  <AntDesign name="checkcircle" size={24} color="green" />
                </View>
              )}
              <View
                style={{
                  marginLeft: 10,
                  marginBottom: 7,
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.place}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({});
