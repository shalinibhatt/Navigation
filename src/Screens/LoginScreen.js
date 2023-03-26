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

export default function LoginScreen({ navigation}) {
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
        <Heading color={Colors.white}>Login</Heading>
        <VStack space={4} mt="5">
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
            placeholder="*******"
            w="80%"
            type="password"
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
            LOGIN
          </Button>
          <Box flexDir="row" justifyContent="space-between">
            <Pressable
              _pressed={{ opacity: 0.5 }}
              _text={{ color: Colors.white }}
              onPress={() => {
                console.log("pressed");
              }}
            >
              <Text> Forgot Password?</Text>
            </Pressable>
            <Pressable
              _pressed={{ opacity: 0.5 }}
              _text={{ color: Colors.white }}
              onPress={() => {
navigation.navigate("Register")              }}
            >
              <Text> SIGN UP</Text>
            </Pressable>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
