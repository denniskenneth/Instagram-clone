import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Story = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconHolder}>
        <FontAwesome5 name='user-circle' size={50} color='white' />
        <Text style={styles.iconTxt}>Your Story</Text>
      </View>
      <View style={styles.iconHolder}>
        <FontAwesome5 name='user-circle' size={50} color='white' />
        <Text style={styles.iconTxt}>Your Story</Text>
      </View>
      <View style={styles.iconHolder}>
        <FontAwesome5 name='user-circle' size={50} color='white' />
        <Text style={styles.iconTxt}>Your Story</Text>
      </View>
      <View style={styles.iconHolder}>
        <FontAwesome5 name='user-circle' size={50} color='white' />
        <Text style={styles.iconTxt}>Your Story</Text>
      </View>
      <View style={styles.iconHolder}>
        <FontAwesome5 name='user-circle' size={50} color='white' />
        <Text style={styles.iconTxt}>Your Story</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // height: "10%",
  },
  iconHolder: {
    // backgroundColor: "pink",
    padding: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  iconTxt: {
    fontSize: 8,
    paddingHorizontal: 2,
    textAlign: "center",
    fontWeight: "500",
    color: "white",
  },
});

export default Story;
