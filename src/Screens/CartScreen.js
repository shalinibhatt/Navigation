import React from "react";
import {
  View,
  Text,
  Box,
  Center,
  ScrollView,
  HStack,
  Button,
} from "native-base";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
export default function CartScreen() {
  const navigation= useNavigation()
  return (
    <Box flex={1} safeArea bg={Colors.main}>
      <Center w="full" py={5}>
        <Text fontSize="4xl" color={Colors.black}>
          Cart
        </Text>
      </Center>
      {/* if cart is empty */}
      {/* <CartEmpty/> */}
      {/* if cart is not empty */}
      <ScrollView nestedScrollEnabled>
        <View>
          <CartItems />
          {/* Buttons */}
          <Center mt={5}>
            <HStack
              rounded={50}
              justifyContent="space-between"
              bg={Colors.white}
              shadow={2}
              w="90%"
              pl={5}
              g={45}
              alignItems="center"
            >
              <Text>Total</Text>
              <Button
                px={10}
                h={45}
                rounded={50}
                bg={Colors.main}
                _text={{ color: Colors.white, fontWeight: "semibold" }}
              >
                $356
              </Button>
            </HStack>
          </Center>

          <Center px={5}>
            <Buttone
              mt={5}
              w="full"
              bg={Colors.main}
              onPress={() => navigation.navigate("Shipping")}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
            >
              Checkout
            </Buttone>
          </Center>
        </View>
      </ScrollView>
    </Box>
  );
}
