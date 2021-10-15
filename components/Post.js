import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Post = () => {
  return (
    <View style={styles.card}>
      <View style={styles.topArea}>
        <View>
          <FontAwesome5 name='user-circle' size={30} color='white' />
        </View>
        <View style={styles.usernameHolder}>
          <Text style={styles.username}>bulamabinta_</Text>
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.bottomArea}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 10,
    // backgroundColor: "white",
  },
  topArea: {
    flexDirection: "row",
    width: "100%",
  },
  usernameHolder: {
    marginLeft: 5,
    justifyContent: "center",
  },
  username: {
    color: "#fff",
  },
});

export default Post;
