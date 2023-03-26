import React from "react";
import {
  View,
  Text,
  Box,
  Center,
  ScrollView,
  Input,
  VStack,
  FormControl,
} from "native-base";
import Colors from "../Color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

const shippingInputs = [
  {
    label: "Enter City",
    placeholder: "Enter City",
    type: "text",
    value: "",
  },
  {
    label: "Enter Address",
    placeholder: "Enter Address",
    type: "text",
    value: "",
  },
  {
    label: "Enter Postal Code",
    placeholder: "Enter Postal Code",
    type: "number",
    value: "",
  },
];

export default function ShippingScreen() {
  const navigation=useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h={"full"} bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={5} mt={5}>
            {shippingInputs.map((index) => (
              <FormControl>
                <FormControl.Label _text={{ color: Colors.black }}>
                  {index.label}
                </FormControl.Label>
                <Input
                  placeholder="Enter City"
                  bg={Colors.lightBlue}
                  color={Colors.main}
                  borderWidth={1}
                  borderColor={Colors.lightBlue}
                  py={4}
                  _focus={{
                    bg: Colors.white,
                    borderWidth: 1,
                  }}
                />
              </FormControl>
            ))}
            <Buttone children="Continue" color={Colors.white} mt={5}               onPress={() => navigation.navigate("Checkout")}
/>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
