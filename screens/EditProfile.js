import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const handleSave = async () => {
    try {
      let details = {
        name,
        bio,
        description,
      };
      await AsyncStorage.setItem("userDetails", JSON.stringify(details));
      alert("Details set!");
    } catch (error) {
      alert("Error setting details! Error: " + error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Enter your Details</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Bio"
          value={bio}
          onChangeText={(text) => setBio(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <TouchableOpacity>
          <Text style={[styles.button, styles.photoSelectBtn]}>
            Select Cover Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.button, styles.photoSelectBtn]}>
            Select Profile Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  innerContainer: {
    backgroundColor: "#fff",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    fontSize: 14,
    outlineStyle: "none",
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: "85%",
  },
  photoSelectBtn: {
    backgroundColor: "#555",
    alignSelf: "flex-start",
    marginTop: 0,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  button: {
    width: 200,
    textAlign: "center",
    backgroundColor: "seagreen",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.5,
    alignSelf: "flex-end",
  },
});

export default EditProfile;
