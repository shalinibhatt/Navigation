import React from "react";
import {
  Text,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import Colors from "../Color";
import { AntDesign } from "@expo/vector-icons";
export default function Register({navigation}) {
  return (
    <Box flex={1} bg={Colors.main}>
      <Image
        flex={1}
        opacity={0.2}
        alt="logo"
        source={require("../../assets/images/pngtick.png")}
        resizeMode="contain"
        size="lg"
        w="full"
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color={Colors.white}>Sign Up</Heading>
        <VStack space={4} mt="5">
          <Input
            cursorColor={Colors.white}
            InputLeftElement={
              <AntDesign name="user" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="User Name"
            w="80%"
            type="text"
            color={Colors.white}
            borderBottomColor={Colors.white}
            px="2"
          />
          <Input
            cursorColor={Colors.white}
            InputLeftElement={
              <AntDesign name="mail" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="80%"
            color={Colors.white}
            borderBottomColor={Colors.white}
            px="2"
          />
          <Input
            cursorColor={Colors.white}
            InputLeftElement={
              <AntDesign name="eyeo" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="Set password"
            w="80%"
            type="text"
            color={Colors.white}
            borderBottomColor={Colors.white}
            px="2"
          />
          <Input
            cursorColor={Colors.white}
            InputLeftElement={
              <AntDesign name="eye" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="Confirm password"
            w="80%"
            type="text"
            color={Colors.white}
            borderBottomColor={Colors.white}
            px="2"
          />
          <Input
            cursorColor={Colors.white}
            InputLeftElement={
              <AntDesign name="phone" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="Phone Number"
            w="80%"
            type="number"
            color={Colors.white}
            borderBottomColor={Colors.white}
            px="2"
          />
          <Button
            alignSelf="center"
            textAlign={"center"}
            _pressed={{ bg: Colors.white }}
            _text={{ color: Colors.main }}
            my={10}
            bg={Colors.white}
            px={10}
            onPress={() => navigation.navigate("Bottom")}

          >
            SIGN UP
          </Button>
          <Pressable
            _pressed={{ opacity: 0.5 }}
            _text={{ color: Colors.white }}
            onPress={() => {
              console.log("pressed");
            }}
          >
            <Text
              textAlign={"center"}
              color={Colors.white}
              fontSize={15}
              fontWeight="bold"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
}
