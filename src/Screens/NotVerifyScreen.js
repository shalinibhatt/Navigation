import React from "react";
import { Box, Center,Image, VStack,Button} from "native-base";
import Colors from "../Color";
import Buttone from "../Components/Buttone";
export default function NotVerifyScreen() {
  return (
    <Box safeAreaTop flex={1} bg={Colors.main}>
      <Center w="full" h="250">
        <Image source={require("../../assets/images/pngtick.png")}
        resizeMode="contain"
        alt="logo"
        size={"lg"} />
      </Center>
      <VStack space={6} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>
          Register
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>Login</Buttone>
        </VStack>
    </Box>
  );
}
