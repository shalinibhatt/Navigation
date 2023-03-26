import React, { useState } from "react";
import {
  Box,
  ScrollView,
  Text,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../Color";
import Rating from "../Components/Rating";
import Buttone from "../Components/Buttone";

import NumericInput from "react-native-numeric-input";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
export default function SingleProductScreen({ route }) {
  console.log(route.params);
  const navigation = useNavigation();
  const product = route.params;
  const [value, setValue] = useState(0);
  return (
    <Box flex={1} bg={Colors.lightBlue} safeArea>
      <ScrollView mx={2} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          h={300}
          alt="image base"
          w="full"
          resizeMode="contain"
        />
        <Heading fontSize={15} color={Colors.white} textAlign="center" mt={5}>
          Book 1
        </Heading>
        
        <Text fontSize={12} color={Colors.white} textAlign="center" mt={2}>
          {product.title}
        </Text>
        <Box
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Rating value={product.rating.rate} />
        </Box>

        <HStack space={2} my={5} alignItems="center" justifyContent="center">
          <NumericInput
            value={value}
            minValue={0}
            maxValue={10}
            totalWidth={200}
            totalHeight={40}
            onChange={(value) => setValue(value)}
            iconSize={25}
            step={1}
            rightButtonBackgroundColor={Colors.white}
          />
          <Spacer />
          <Heading fontSize={15} color={Colors.black} textAlign="center">
            ${product.price}
          </Heading>
        </HStack>
        <Text fontSize={12} color={Colors.white}>
          {product.description}
        </Text>
        <Buttone bg={Colors.orange} color={Colors.black} mt={5}>
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}
