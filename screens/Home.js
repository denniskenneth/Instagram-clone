import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Story from "../components/Story";
import Post from "../components/Post";
const Home = () => {
  return (
    <View style={styles.container}>
      <Story />
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
export default Home;
