import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  const renderItem = ({ item }) => {
    const statusColor = item.completed ? "seagreen" : "orange";
    return (
      <View style={[styles.todoItem, { backgroundColor: statusColor }]}>
        <Text style={styles.todoTitle}>{item.title}</Text>
        <Text style={styles.todoStatus}>
          {item.completed ? "Completed" : "Incomplete"}
        </Text>
      </View>
    );
  };

  const extractKey = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Muhammad Awais</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
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
    color: "#fff",
    alignSelf: "flex-end",
  },
});

export default Todos;
