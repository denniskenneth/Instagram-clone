import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName='login' style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name='login'
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "#000",
              headerTintColor: "#fff",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
          }}
        ></Stack.Screen>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
      </Stack.Navigator>

      {/* <StatusBar style='light-content' /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
