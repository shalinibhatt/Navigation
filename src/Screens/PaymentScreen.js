import React from "react";
import {
  View,
  Text,
  Box,
  Input,
  ScrollView,
  HStack,
  Spacer,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Center, VStack, FormControl, Image } from "native-base";
import Buttone from "../Components/Buttone";
import Colors from "../Color";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function PaymentScreen() {
  const navigation = useNavigation();
  const paymentoptions = [
 
    {
      alt: "Google Pay",
      image: require("../../assets/images/Google_Pay_Logo_(2020)-vcxe3.png"),
      size: 30,
      icon: "Ionicons",
    },
    {
      alt: "Apple Pay",
      image: require("../../assets/images/applepay.png"),
      size: 30,
      icon: "FontAwesome",
    },
  ];
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          SELECT PAYMENT METHOD
        </Text>
      </Center>

      <Box h={"full"} bg={Colors.lightBlue} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack mt={5}>
            {paymentoptions.map((index) => (
              <HStack
                mt={5}
                alignItems="center"
                justifyContent={"space-between"}
                bg={Colors.white}
                rounded={10}
                py={1}
                px={2}
              >
                <Box>
                  <Image
                    source={index.image}
                    size={index.size}
                    resizeMode="contain"
                    alt={index.alt}
                    w={60}
                    h={50}
                  />
                </Box>
                {index.icon == "Ionicons" ? (
                  <Ionicons name="checkmark-circle" size={30} color="green" />
                ) : (
                  <FontAwesome name="circle-thin" size={30} color="green" />
                )}
              </HStack>
            ))}

            <Buttone children="Continue" color={Colors.white} mt={5} onPress={()=> navigation.navigate('pylaceorder')}/>
            <Text color={Colors.black} textAlign="center" italic fontSize={14} mt={5}>
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
