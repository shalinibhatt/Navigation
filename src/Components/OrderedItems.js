import React from "react";
import {
  Text,
  FlatList,
  Pressable,
  HStack,
  Box,
  Center,
  Image,
  VStack,
  Button,
} from "native-base";
import product from "../data/Product";
import Colors from "../Color";
import Rating from "./Rating";

export default function OrderedItems() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems={"center"}
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.lightGrey}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.title}
                  w={60}
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated bold fontSize={14} color={Colors.black}>
                  {item.title}
                </Text>
                <Text isTruncated fontSize={12} color={Colors.black}>
                 ${item.price}
                </Text>
              </VStack>
                <Box>
                <Button bg={Colors.light} rounded={5} h={10}>5</Button>
                </Box>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}
