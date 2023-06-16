import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";

const Settings = () => {
  const [isDark, setIsDark] = useState(false);

  const saveTheme = async () => {
    try {
      const theme = isDark ? "light" : "dark";
      await AsyncStorage.setItem("theme", theme);
    } catch (error) {
      alert("Error Saving theme state! Error: " + error);
    }
  };

  const toggleSwitch = () => {
    let toggle = !isDark;
    setIsDark(toggle);
    saveTheme();
  };

  return (
    <View
      style={[Styles.container, { backgroundColor: isDark ? "#555" : "#eee" }]}
    >
      <View style={Styles.option}>
        <Text style={[Styles.optionTitle, { color: isDark ? "#eee" : "#000" }]}>
          Switch Theme
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDark}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionTitle: {
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
});

export default Settings;
