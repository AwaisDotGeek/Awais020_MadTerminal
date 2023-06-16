import React, { useState } from "react";
import { View, Text, Share, TouchableOpacity, StyleSheet } from "react-native";

const SocialSharingScreen = () => {
  const [todo, setTodo] = useState("");
  const [fvrt, setFvrt] = useState("");

  const shareTodo = () => {
    let _todo = "Todo: Buy Milk";
    setTodo(_todo);
    Share.share({
      message: todo,
    });
  };

  const shareFavourite = () => {
    let _fvrt = "Favourite Post: This is my favrt Post! check it out";
    setFvrt(_fvrt);
    Share.share({
      message: fvrt,
    });
  };

  const handleLongPressShare = (shareText) => {
    Share.share({
      message: shareText,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Social Sharing</Text>

        <TouchableOpacity
          onPress={shareTodo}
          onLongPress={() => handleLongPressShare("Todo: Buy Juice")}
        >
          <Text style={styles.button}>Share a Todo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={shareFavourite}
          onLongPress={() =>
            handleLongPressShare("Favourite Post: Look at this beauty!")
          }
        >
          <Text style={styles.button}>Share your Favourite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },

  innerContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 5,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  button: {
    width: 250,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: "seagreen",
    alignSelf: "center",
    color: "#fff",
    letterSpacing: 0.5,
    fontWeight: "bold",
  },

  todoItem: {
    padding: 5,
    marginBottom: 6,
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
  todoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#eee",
    letterSpacing: 0.5,
  },
  todoStatus: {
    fontSize: 14,
    color: "#eee",
    alignSelf: "flex-end",
  },
});

export default SocialSharingScreen;
