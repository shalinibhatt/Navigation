import React from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import Orders from "./Orders";
import Profile from "./Profile";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Box, Text, View } from "native-base";
import Colors from "../Color";

const renderScreen = SceneMap({
  first: Profile,
  second: Orders,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={styles.tabStyle}
        indicatorContainerStyle={{ backgroundColor: Colors.white }}
        activeColor={Colors.main}
        inactiveColor={Colors.lightBlue}
        renderLabel={({ route, color }) => (
          <Text style={{ color, ...styles.text }}>{route.title}</Text>
        )}
       
      />
    );
  };
  return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScreen}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.white,

  },
  tabBarStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderColor: Colors.red,
    borderBottomColor: Colors.red,
  },

  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
