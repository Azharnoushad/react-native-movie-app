import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const MovieCard = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 18,
          marginVertical: 10,
          justifyContent: "center",
          height: Dimensions.get("window").height / 2.5,
          width: (Dimensions.get("window").width - 80) / 2,
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "contain",
            borderRadius: 7,
          }}
        />
        <View>
          <Text style={{ marginTop: 6, fontSize: 15, fontWeight: "400" }}>
            {item.title.substr(0, 20)}
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 15,
              fontWeight: "400",
              color: "gray",
            }}
          >
            U/A {item.original_language}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: "#ffc40c",
            paddingHorizontal: 8,
            paddingVertical: 5,
            marginTop: 10,
            width: 100,
          }}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "700",
              letterSpacing: 1.5,
              textAlign: "center",
            }}
          >
            Book
          </Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
