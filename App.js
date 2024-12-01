import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    if (todo.trim()) {
      setTodoList((currTodoList) => [...currTodoList, todo]);
      setTodo("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          style={styles.textInput}
          placeholder="Your to do"
        />
        <Button color={"blue"} onPress={handleClick} title="Add todo" />
      </View>
      {todoList.length <= 0 ? (
        <Text style={styles.todoList}>Add to do list</Text>
      ) : (
        <View style={styles.todoList}>
          {todoList.map((todo, index) => (
            <Text style={styles.todoText} key={index}>
              {index}: {todo}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 50,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 40,
    flex: 1,
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "blue",
    width: "70%",
  },
  todoList: {
    flex: 4,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: "lightgray",
    color: "black",
    borderRadius: 8,
  },
});
