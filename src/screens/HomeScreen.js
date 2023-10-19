import {
  Animated,
  Easing,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../Context/PlaceContext";
import movieData from "../json/MovieData.json";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { FontAwesome } from "@expo/vector-icons";
import "url-search-params-polyfill"
import { URL } from "react-native-url-polyfill";
import { client } from "../../pvr-movies/sanity";


const HomeScreen = () => {
  global.URL = URL;
  const params = new URLSearchParams()
  params.set("foo","bar")
  const navigation = useNavigation();
  const moveAnimation = new Animated.Value(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { selectedCity, setSelectedCity } = useContext(Place);
  const [selectedFilter, setSelectedFilter] = useState();
  const [sortedData, setSortedData] = useState(movieData);
  const [moviesData, setMoviesData] = useState([])

  const getDataMovie = async () => {
    const res = await client.fetch(`*[_type == "movie"]`)
    setMoviesData(res)
    setSortedData(res)
  }

  useEffect(()=>{
    getDataMovie()
  },[])

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

  const languages = [
    {
      id: "0",
      language: "English",
    },
    {
      id: "10",
      language: "Kannada",
    },
    {
      id: "1",
      language: "Telugu",
    },
    {
      id: "2",
      language: "Hindi",
    },
    {
      id: "3",
      language: "Tamil",
    },
    {
      id: "5",
      language: "Malayalam",
    },
  ];

  const genres = [
    {
      id: "0",
      language: "Horror",
    },
    {
      id: "1",
      language: "Comedy",
    },
    {
      id: "2",
      language: "Action",
    },
    {
      id: "3",
      language: "Romance",
    },
    {
      id: "5",
      language: "Thriller",
    },
    {
      id: "6",
      language: "Drama",
    },
  ];

  const applyFilterHandler = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case "English":
        setSortedData(
          sortedData.filter((data) => data.original_language === selectedFilter)
        );
        break;
      case "Kannada":
        setSortedData(
          sortedData.filter((data) => data.original_language === selectedFilter)
        );
        break;
      case "Telugu":
        setSortedData(
          sortedData.filter((data) => data.original_language === selectedFilter)
        );
        break;
      case "Hindi":
        setSortedData(
          sortedData.filter((data) => data.original_language === selectedFilter)
        );
        break;
      case "Tamil":
        setSortedData(
          sortedData.filter((data) => data.original_language === selectedFilter)
        );
        break;
      case "Malayalam":
        setSortedData(
          sortedData.filter((data) => data.original_language === selectedFilter)
        );
        break;
    }
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={Header}
        data={sortedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard item={item} key={item.id} />}
      />
      <Pressable
        onPress={() => {
          setModalVisible(!modalVisible);
          setSortedData(moviesData);
        }}
        style={{
          position: "absolute",
          bottom: 30,
          backgroundColor: "#ffc40c",
          width: 50,
          height: 50,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          right: 30,
        }}
      >
        <FontAwesome name="filter" size={24} color="#20a32f" />
      </Pressable>
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilterHandler(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom: 30,
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Filters" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        visible={modalVisible}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 400 }}>
          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Languages
          </Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {languages.map((language) => {
              return selectedFilter === language.language ? (
                <Pressable
                  onPress={() => setSelectedFilter()}
                  style={{
                    margin: 10,
                    backgroundColor: "#ffc40c",
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{language.language}</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setSelectedFilter(language.language)}
                  style={{
                    margin: 10,
                    borderColor: "#c8c8c8",
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text>{language.language}</Text>
                </Pressable>
              );
            })}
          </Pressable>

          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Genres
          </Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {genres.map((item) => {
              return (
                <Pressable
                  style={{
                    margin: 10,
                    borderColor: "#c8c8c8",
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text>{item.language}</Text>
                </Pressable>
              );
            })}
          </Pressable>
          <Pressable
            style={{
              marginVertical: 20,
              marginRight: "auto",
              marginLeft: "auto",
              backgroundColor: "#ffc40c",
              padding: 15,
              borderRadius: 10,
            }}
            onPress={() => {
              setSortedData(movieData);
              setModalVisible(false);
              setSelectedFilter();
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
              Remove all filter
            </Text>
          </Pressable>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: 16,
});
