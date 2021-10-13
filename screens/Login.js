import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white", fontSize: 30 }}>Instagram</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='Phone number, username or email'
          placeholderTextColor='grey'
        />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          placeholderTextColor='grey'
          style={styles.textInput}
        />
      </View>
      <View style={styles.forgotPasswordView}>
        <Text style={{ color: "blue" }}>Forgot password?</Text>
      </View>
      <TouchableOpacity onPress={goToHome} style={styles.logInArea}>
        <Text style={{ color: "white", fontWeight: "600" }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 11,
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 2,
    color: "white",
    backgroundColor: "#100c08",
    borderColor: "grey",
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  forgotPasswordView: {
    // backgroundColor: "white",
    alignSelf: "flex-end",
  },
  logInArea: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 300,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default Login;
