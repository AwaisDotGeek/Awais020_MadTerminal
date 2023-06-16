import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Favorites = () => {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const globalTheme = await AsyncStorage.getItem("theme");
        if (globalTheme) {
          alert(globalTheme);
        }
        setTheme(globalTheme);
      } catch (error) {
        console.log("Error occured while setting theme! Error: ", error);
      }
    };

    fetchTheme();
  }, []);

  useEffect(() => {
    // This 2nd useEffect is needed so the theme gets set
    console.log("Hello world, I am coming from 2nd useEffect in App.js");
    console.log(theme);
  }, [theme]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const favoritePosts = data.filter((post) => post.userId === 3);
      setPosts(favoritePosts);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.postItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  );

  const extractKey = (item) => item.id.toString();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#555" : "#eee" },
      ]}
    >
      <Text style={{ fontSize: 18 }}>Muhammad Awais</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  darkContainer: {
    backgroundColor: "#666",
  },
  lightContainer: {
    backgroundColor: "#eee",
  },
  flatList: {
    padding: 5,
  },
  postItem: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: "2.5px",
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postBody: {
    textAlign: "justify",
  },
});

export default Favorites;
