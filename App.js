import { NativeBaseProvider, StatusBar } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import Register from "./src/Screens/Register";
import ShippingScreen from "./src/Screens/ShippingScreen";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/Navigations/BottomNav";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar 
          barStyle="light-content"

        />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="order"
            component={OrderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotVerify"
            component={NotVerifyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottom"
            component={BottomNav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
