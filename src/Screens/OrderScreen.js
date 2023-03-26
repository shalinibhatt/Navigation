
import React from "react";
import { View, Text, Box, ScrollView, Heading } from "native-base";
import Colors from "../Color";
import OrderInfo from "../Components/OrderInfo";
import {  FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderedItems from "../Components/OrderedItems";
import OrderModel from "../Components/OrderModel";
export default function OrderScreen() {
  return (
    <Box bg={Colors.lightBlue} safeArea flex={1} pt={6}>
<Box>
        <ScrollView w="full" horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* <OrderInfo
            title="CUSTOMER"
            subtitle="Admin Doe"
            text="admin@exmaple.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          /> */}
          <OrderInfo
            title="SHIPPING INFO"
            success
            subtitle="Shipping Tanzania"
            text="Pay Method: PayPal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            danger
            subtitle="Address:"
            text=" 1234, Dar es salaam, Tanzania"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
        </Box>
        <Box flex={1} bg={Colors.lightBlue} pb={3}>
          <Heading my={4} bold mx={2} fontSize={18} color={Colors.black}>
            Ordered Items
          </Heading>
          <OrderedItems />
          <OrderModel />
        </Box>
      </Box>
  );
}
