import { Box, ScrollView, HStack, Pressable, Text, Button } from "native-base";
import React from "react";
import Colors from "../Color";
export default function Orders() {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            bg={Colors.lightBlue}
            alignItems="center"
            shadow={2}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              867655546769886785645
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button px={7} py={2} bg={Colors.main} rounded={50} _text={{
color: Colors.white
            }}>$450
            </Button>
          </HStack>
        </Pressable>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            bg={Colors.white}
            alignItems="center"
            shadow={2}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              867655546769886785645
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button px={7} py={2} bg={Colors.red} rounded={50} _text={{
color: Colors.white
            }}>$45
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
