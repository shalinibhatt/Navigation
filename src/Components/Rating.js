import React from "react";
import { Box, HStack, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Color";
export default function Rating({ value }) {
  const size = 8;
  const color = Colors.yellow;
  return (
    <HStack space={0.5}>
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
    </HStack>
  );
}
