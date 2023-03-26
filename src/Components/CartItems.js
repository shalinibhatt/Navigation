import { Box, Center, HStack, Pressable, Text, Image, VStack, Button } from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../Color";
import products from "../data/Product";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => {
  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey={"0"}
      previewRepeatValue={-20}
      previewOpenDelay={3000}
      data={products}
      renderItem={renderItems}
      renderHiddenItem={renderHiddenItems}
      // showsVerticalScrollIndicator={false}
    />
  );
};

const renderItems = (data) => {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems={"center"}
          bg={Colors.white}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.lightGrey} h="24">
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.title}
              w="full"
              h={24}
              resizeMode="cover"
            />
          </Center>
          <VStack w="60%" px={2} >
            <Text bold fontSize={12} isTruncated color={Colors.black}>
              {data.item.title}
            </Text>
            <Text fontSize={12} color={Colors.grey} bold>
              ${data.item.price} 
            </Text>

          </VStack>
          <Button bg={Colors.main} _pressed={{bg: Colors.main}}  rounded={0} >
                1
          </Button>

        </HStack>
      </Box>
    </Pressable>
  );
};

const renderHiddenItems = () => {
  return (
    <Pressable
      w="50"
      roundedTopRight={10}
      roundedBottomRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems={"center"} space={2}>
        <FontAwesome name="trash" size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};
export default function CartItems() {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
}
