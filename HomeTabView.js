import { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => {
  return (
    <View style={[styles.scene, { backgroundColor: "#ff4081" }]}>
      <Text>First Route</Text>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View style={[styles.scene, { backgroundColor: "#e1bee7" }]}>
      <Text>Second Route</Text>
    </View>
  );
};

const initialLayout = { width: Dimensions.get("window").width };
const HomeTabView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};
export default HomeTabView;
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
