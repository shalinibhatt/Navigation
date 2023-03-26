import { Box, Input, Text, HStack } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../Color";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      flexDir={"row"}
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, ZMR..."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
        variant="filled"
      />
      <Pressable ml={3} onPress={()=>navigation.navigate('cart')}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          bg={Colors.red}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          _text={{
            color: Colors.white,
            fontSize: 10,
            fontWeight: "bold",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}
