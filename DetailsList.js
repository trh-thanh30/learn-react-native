import { FlatList, Text, View } from "react-native";

const data = [
  {
    id: "1",
    title: "Item 1",
  },
  {
    id: "2",
    title: "Item 2",
  },
  {
    id: "3",
    title: "Item 3",
  },
  {
    id: "4",
    title: "Item 4",
  },
  {
    id: "5",
    title: "Item 5",
  },
  {
    id: "5",
    title: "Item 5",
  },
];
const renderItems = ({ item }) => (
  <View style={{ padding: 20 }}>
    <Text>{item.title}</Text>
  </View>
);
export default function DetailsList() {
  return <FlatList data={data} renderItem={renderItems} />;
}
