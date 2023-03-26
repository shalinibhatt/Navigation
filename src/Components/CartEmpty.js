import { Box, Center } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import Colors from '../Color'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Buttone from './Buttone'


export default function CartEmpty() {
  return (
<Box flex={1} px={4}>
    <Center h="90%">
    <Center w={200} h={200} bg={Colors.black} rounded="full">
        <FontAwesome name="shopping-basket" size={64} color={Colors.white} />

    </Center>
    <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', marginTop:20}}>Your Cart is Empty</Text>
    </Center>
    <Buttone color={Colors.white} >START SHOPPING</Buttone>
</Box>  )
}
