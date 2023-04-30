import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";

//Icons
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Balance = () => {
  const win = Dimensions.get("window");
  const ratio = win.width / 340;

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: win.width,
          height: ratio * 100,
          resizeMode: "contain",
          marginTop: 15,
          marginBottom: 25,
        }}
        source={require("../../../assets/card.png")}
      />
      <View style={styles.containerTop}>
        <Text style={styles.font}>Kredi / Banka Kartlarım</Text>
        <Text style={styles.font2}>
          Masterpass'e kartlarını kaydet, alışverişlerini Hopi mobil ödeme ile
          kolayca yap.
        </Text>
        <View style={styles.addCard}>
          <Fontisto name="mastercard" size={24} color="#4198BD" />
          <Text style={styles.cardText}>Masterpass Hesabını İlişkilendir</Text>
        </View>
        <Text style={styles.font}>Ulaşım Kartlarım</Text>
        <Text style={styles.font2}>
          İstanbulkart'ini kaydederek kartlarına Paracık ile yükleme
          yapabilirsin.
        </Text>
        <View style={styles.addCard}>
          <MaterialCommunityIcons name="card-plus" size={36} color="#4198BD" />
          <Text style={styles.cardText}>İstanbulkart Ekle</Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15
  },
  containerTop: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  font: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  },
  font2: {
    fontSize: 11,
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
  addCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4198BD",
    borderWidth: 3,
    borderRadius: 10,
    borderStyle: "dashed",
    height: 80,
    width: "95%",
    marginBottom: 20,
  },
  cardText: {
    color: "#4198BD",
    fontWeight: "bold",
    marginLeft: 25,
  },
});
