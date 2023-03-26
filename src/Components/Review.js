import {
  View,
  Text,
  Box,
  Heading,
  HStack,
  VStack,
  Input,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import Colors from "../Color";
import Rating from "./Rating";
import Message from "../Notification/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [rating, setRating] = useState("");
  const [value, setValue] = useState(0);
  return (
    <Box my={5}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* if no reviews */}
      {/* <Message bg={Colors.grey} size={10} color={Colors.white}>
        NO REVIEW
      </Message> */}
      {/* if reviews */}
      <VStack p={3} bg={Colors.white} mt={5} rounded={5}>
        <HStack space={3}>
          <Heading fontSize={15} color={Colors.black}>
            User Shalini
          </Heading>
          <Rating value={3} />
        </HStack>
        <Text>Jan 12 2023</Text>
        <Message bg={Colors.grey} size={10} color={Colors.white}>
          {
            "The Kahani in English is new and wonderful. This Kahani in English is short and very nice."
          }
        </Message>
      </VStack>
      <Box mt={4}>
        {/* <Heading fontSize={16}>REVIEW THIS PRODUCT</Heading> */}
        <VStack>
          {/* <FormControl>
            <FormControl.Label mt={5}>
              <Text bold>Rating</Text>
              <Box mx={4} mt={1}>
                <Rating value={value} />
              </Box>
            </FormControl.Label>
          </FormControl>
          <Select
            placeholderTextColor={"white"}
            py={2}
            _selectedItem={{
              endIcon: <CheckIcon size={5} />,
              bg: Colors.lightYellow,
            }}
            selectedValue={rating}
            onValueChange={(itemValue) => {
              setRating(itemValue);
              setValue(itemValue);
            }}
            color={Colors.white}
            borderColor={Colors.transparent}
            bg={Colors.grey}
            placeholder="Choose Rate"
          >
            <Select.Item label="1 - Poor" value="1" />
            <Select.Item label="2 - Fair" value="2" />
            <Select.Item label="3 - Good" value="3" />
            <Select.Item label="4 - Best" value="4" />
            <Select.Item label="5 - Excellent" value="5" />
          </Select>

          <FormControl>
            <FormControl.Label mt={5}>
              <Text bold>Comment</Text>
            </FormControl.Label>
            <TextArea
              bg={Colors.grey}
              color={Colors.white}
              placeholderTextColor={"white"}
              placeholder="Write your comment..."
            />
          </FormControl>
          <Buttone bg={Colors.orange} mt={2}>
            SUBMIT
          </Buttone> */}
          {/* // if not logged in */}
          {/* <Message bg={Colors.black} color={"white"}>
            Login to write a review
          </Message> */}
        </VStack>

        {/* <Input placeholder="Write a review" /> */}
      </Box>
    </Box>
  );
}
