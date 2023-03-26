import { Center, Text } from "native-base";
import React from "react";

export default function Message({ children, bg, color, size}) {
  return (
    <Center bg={bg} p={4} mt={3} rounded={5}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
}
