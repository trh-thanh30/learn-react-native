import React from "react";
import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeTabView from "./HomeTabView";
import DetailsList from "./DetailsList";

function HomeScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <HomeTabView />
    // </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Details Screen!!!!</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
      <DetailsList />
    </View>
  );
}
function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting Screen</Text>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size = 10 }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Details") {
              iconName = "list";
            } else {
              iconName = "dashboard";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
