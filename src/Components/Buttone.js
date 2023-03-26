import React from "react";
import { Button } from "native-base";

export default function Buttone({ bg, color, mt, onPress, children }) {
  return (
    <Button
      bg={bg}
      color={color}
      _pressed={{
        bg: "gray.600",
      }}
      mt={mt}
      onPress={onPress}
      rounded="full"
      w={"full"}
      h={55}
      _text={{
        fontWeight: "bold",
        color: color,
      }}
    >
      {children}
    </Button>
  );
}
