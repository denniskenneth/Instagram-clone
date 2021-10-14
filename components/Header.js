import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.txtHolder}>
        <Text style={styles.headerTxt}>Instagram</Text>
      </View>
      <View style={styles.rightHeader}>
        <View>
          <AntDesign name='plussquareo' size={24} color='black' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "blue",
    // paddingHorizontal: 10,
    marginRight: 15,
  },
  txtHolder: {
    // width: "30%",
    // backgroundColor: "pink",
    flexDirection: "row",
    // alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTxt: {
    textAlign: "center",
    fontSize: 20,
  },

  rightHeader: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "40%",
    justifyContent: "flex-end",
  },
});

export default Header;
