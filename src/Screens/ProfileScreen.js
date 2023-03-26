import React from "react";
import { View, Text, Center, Box, Heading, Image } from "native-base";
import Colors from "../Color";
import Tabs from "../Components/Tabs";
export default function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={require("R:/EcommerceSite/ecommerceapp/assets/profile-icon-png-898.png")}
          alt="Profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          John Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 2020
        </Text>
      </Center>
      <Tabs />
    </>
  );
}
