import { Box, FormControl, ScrollView, Text, VStack, Input } from "native-base";
import React from "react";
import Colors from "../Color";
import Buttone from "./Buttone";

const Inputs = [
  {
    label: "USERNAME",
    placeholder: "Enter your username",
    type: "text",
    value: "",
  },
  {
    label: "EMAIL",
    placeholder: "Enter your email",
    type: "email",
    value: "",
  },
  {
    label: "PASSWORD",
    placeholder: "Enter your password",
    type: "password",
    value: "",
  },
  {
    label: "CONFIRM PASSWORD",
    placeholder: "Enter your password",
    type: "password",
    value: "",
  },
];
export default function Profile() {
  return (
    <Box h="full" bg={Colors.white} px={5} >
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((item, index) => {
            return (
              <FormControl >
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </FormControl.Label>
                <Input
                  type={item.type}
                  placeholder={item.placeholder}
                  borderWidth={0}
                  fontSize={12}
                  bg={Colors.lightBlue}
                  _focus={{ borderWidth: 0 }}
                  py={4}
                />
              </FormControl>
            );
          })}
          <Buttone>UPDATE PROFILE</Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
