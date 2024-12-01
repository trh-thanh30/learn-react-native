import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const handleClick = () => {
    Alert.alert("Hello");
    // Add your code to save the todo to a database here
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your to do" />
       <Button color={"blue"} onPress={handleClick} title="Add todo" />
      </View>
      <View>
        <Text>The todo list...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "blue",
    marginRight: 8,
    width: "70%",
  },
});
