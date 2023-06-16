import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let details = await AsyncStorage.getItem("userDetails");
        if (details != null) {
          details = JSON.parse(details);
          let userDet = {
            name: details.name,
            bio: details.bio,
            description: details.description,
          };
          setUserDetails(userDet);
        }
      } catch (error) {
        alert("Error retrieving tasks! Error: " + error);
      }
    };

    fetchData();
  }, []);

  const handleEditDetails = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Mountains1.jpg")}
        style={styles.coverPhoto}
      />
      <Image
        source={require("../assets/images/Mountains10.jpg")}
        style={styles.profilePhoto}
      />
      <Text style={styles.name}>{"Muhammad Awais" || userDetails.name}</Text>
      <Text style={styles.bio}>{"Software Developer" || userDetails.bio}</Text>
      <Text style={styles.description}>
        {"Meet Awais, an experienced web developer in Laravel, a PHP framework. I have been doing this for a long time. Looking forward to working for you." ||
          userDetails.description}
      </Text>

      <TouchableOpacity onPress={handleEditDetails}>
        <Text style={styles.button}>Edit Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverPhoto: {
    width: "100%",
    height: "35%",
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    alignSelf: "center",
    marginTop: "-60px",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
  },
  bio: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  button: {
    width: 150,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "seagreen",
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 20,
    color: "#fff",
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
