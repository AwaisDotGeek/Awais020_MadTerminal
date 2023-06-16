import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ProfileScreen from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import FileContentScreen from "./screens/FileContentScreen";
import Favorites from "./screens/Favourites";
import Todos from "./screens/Todos";
import SocialSharingScreen from "./screens/SocialSharing";
import Settings from "./screens/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// This is what user see at first.
function HomeScreen() {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen
        name="mainTabsScreen"
        component={mainTabsScreen}
        options={{
          title: "Terminal",
          drawerLabel: "Home",
          color: "#fff",
          headerTitleStyle: { fontSize: 28, fontWeight: "bold", color: "#000" },
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Awais Settings" }}
      />
      <Drawer.Screen
        name="FileContentScreen"
        component={FileContentScreen}
        options={{ title: "Awais File Content" }}
      />
    </Drawer.Navigator>
  );
}

function mainTabsScreen() {
  return (
    <TopTab.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        tabBarItemStyle: {
          width: 90,
        },
      }}
      tabBarOptions={{
        indicatorStyle: { height: 0 },
        style: {
          backgroundColor: "#333",
          alignItems: "center",
        },
        activeTintColor: "white",
      }}
    >
      <TopTab.Screen name="Favorites" component={Favorites}></TopTab.Screen>
      <TopTab.Screen name="Todos" component={Todos}></TopTab.Screen>
      <TopTab.Screen name="Profile" component={ProfileScreen}></TopTab.Screen>
      <TopTab.Screen
        name="Share"
        component={SocialSharingScreen}
      ></TopTab.Screen>
    </TopTab.Navigator>
  );
}

// App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            letterSpacing: 0.3,
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ title: "Awais Fav" }}
        ></Stack.Screen>
        <Stack.Screen
          name="SocialSharing"
          component={SocialSharingScreen}
          options={{ title: "Awais Sharing" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{ title: "Awais Todos" }}
        ></Stack.Screen>
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "Edit Your Profile" }}
        ></Stack.Screen>
        <Stack.Screen
          name="FileContent"
          component={FileContentScreen}
          options={{ title: "File Content" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  mainHeading: {
    fontSize: "48px",
    margin: "10px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },

  inputFields: {
    margin: "10px",
    width: "70%",
    borderWidth: 2,
    padding: "12px",
    borderRadius: "10px",
    borderColor: "purple",
    fontSize: "14px",
  },

  signinbtn: {
    width: "170px",
    textAlign: "center",
    backgroundColor: "purple",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "22px",
    fontFamily: "sans-serif",
    marginTop: 10,
  },

  btn: {
    width: "170px",
    textAlign: "center",
    backgroundColor: "purple",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "22px",
    fontFamily: "sans-serif",
    marginTop: 10,
  },

  homeText: {
    fontSize: "30px",
    fontFamily: "Cormorant",
    margin: "17px",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  whatOnMind: {
    position: "absolute",
    borderWidth: 1,
    left: "70px",
    top: "4px",
    padding: "6px",
    borderRadius: "20px",
    width: "320px",
  },

  hr: {
    width: "100%",
    backgroundColor: "#a89bce",
    height: "5px",
    marginTop: "9px",
  },
});
