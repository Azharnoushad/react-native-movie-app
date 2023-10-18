import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const TheatreScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const { malls, name, selectedDate, showtimes } = params;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={26}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text>{malls}</Text>
        </Pressable>
      ),
      headerStyle: {
        backgroundColor: "#F5F5F5",
        elevation: 50,
        shadowColor: "transparent",
      },
    });
  }, []);

  const handleSeatPress = (row, seat) => {
    let isSelected = selectedSeats.find(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (isSelected) {
      setSelectedSeats((prevState) =>
        prevState.filter(
          (selectedSeat) =>
            selectedSeat.row !== row || selectedSeat.seat !== seat
        )
      );
    } else {
      setSelectedSeats((prevState) => [...prevState, { row, seat }]);
    }
  };

  const renderSeates = () => {
    return rows.map((row, i) => {
      return (
        <View
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={{ width: 30, marginRight: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>
              {row.row}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((seat, seatIndex) => {
                return (
                  <Pressable
                  disabled={seat.bookingStatus === 'disabled'}
                    style={[
                      styles.seats,
                      selectedSeats.find(
                        (selectedSeat) =>
                          selectedSeat.row === row.row &&
                          selectedSeat.seat === seat.seat
                      ) && styles.selectedSeat,
                      seat.bookingStatus === "disabled" && styles.bookedSeat
                    ]}
                    onPress={() => handleSeatPress(row.row, seat.seat)}
                    key={seatIndex}
                  >
                    <Text>{seat.seat}</Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      );
    });
  };

  const payHandler = () => {
    const updatedRow = [...rows];
    selectedSeats.forEach((seat) => {
      const rowIndex = updatedRow.findIndex((row) => row.row === seat.row);
      const seatIndex = updatedRow[rowIndex].seats.findIndex(
        (s) => s.seat === seat.seat
      );

      updatedRow[rowIndex].seats[seatIndex].bookingStatus = "disabled";
    });
    setRows(updatedRow);
    setSelectedSeats([]);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>
        SCREEN THIS WAY
      </Text>
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          fontSize: 15,
          color: "gray",
        }}
      >
        CLASSIC (240)
      </Text>

      {renderSeates()}

      <View
        style={{
          backgroundColor: "#D8D8D8",
          padding: 10,
          marginTop: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FontAwesome
            name="square"
            size={24}
            color="#ffc40c"
            style={{ marginBottom: 10 }}
          />
          <Text>Selected</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FontAwesome
            name="square"
            size={24}
            color="#fff"
            style={{ marginBottom: 10 }}
          />
          <Text>Vacant</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FontAwesome
            name="square"
            size={24}
            color="gray"
            style={{ marginBottom: 10 }}
          />
          <Text>Booked</Text>
        </View>
      </View>
      <Pressable
        onPress={payHandler}
        style={{
          marginTop: 50,
          backgroundColor: "#E0E0E0",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Selected Seats</Text>
        <Text>PAY 100</Text>
      </Pressable>
    </View>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({
  seats: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E0E0E0",
  },
  selectedSeat: {
    backgroundColor: "#FFD700",
    borderColor: "transparent",
  },
  bookedSeat:{
    backgroundColor:"#989898",
    borderColor: "transparent",
  }
});
