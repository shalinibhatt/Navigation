import { Box, Center, Text, Heading } from "native-base";
import React from "react";
import Colors from "../Color";

export default function OrderInfo({
  icon,
  title,
  subtitle,
  price,
  text,
  success,
  danger,
}) {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading bold fontSize={12} isTruncated mt={3} color={Colors.black}>
        {title}
      </Heading>
      <Text fontSize={13} color={Colors.black} isTruncated>
        {subtitle}
      </Text>
      <Text
        fontSize={13}
        color={Colors.black}
        italic
        textAlign="center"
        isTruncated
      >
        {text}
      </Text>
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.main}>
          <Text color={Colors.white} fontSize={12} bold>
            Paid on Jan 12 2023
          </Text>
        </Center>
      )}
        {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
          <Text color={Colors.white} fontSize={12} bold>
           Not Delivered
          </Text>
        </Center>
      )}
    </Center>
  );
}
