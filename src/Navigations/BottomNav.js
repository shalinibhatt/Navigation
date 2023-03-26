import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Text } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Colors from "../Color";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
    
      top={-30}
      shadow={2}
      bg={Colors.blue}
    >
      {children}
    </Pressable>
  );
};
export default function BottomNav() {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,

          tabBarIcon: ({ focused }) => (
            <Center style={{
              backgroundColor:Colors.lightGreen,
              width:70,
              height:70,
              borderRadius:50
                          }}>
              {focused ? (
                <FontAwesome5 name="shopping-basket" size={24} color="black" />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color="gray"
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color="black" />
              ) : (
                <AntDesign name="user" size={24} color="gray" />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    height: 60,
  },
});
