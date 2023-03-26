import React from "react";
import {  Box } from "native-base";
import Colors from "../Color";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
export default function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.lightBlue}>
      <HomeSearch />
      <HomeProducts/>
    </Box>
  );
}
