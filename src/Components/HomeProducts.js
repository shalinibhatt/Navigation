import { Flex, ScrollView, Box,Pressable, Image, Heading, Text } from 'native-base'
import React from 'react'
import Colors from '../Color'
import product from '../data/Product'
import Rating from './Rating'
import { useNavigation } from '@react-navigation/native'
export default function HomeProducts() {
    const navigation = useNavigation()
  return (
<ScrollView flex={1}  
    
   
>
<Flex flexWrap={"wrap"} direction="row" justifyContent="space-between" px={6}>
    {product.map((product)=>(
        <Pressable onPress={()=>navigation.navigate('Single', product)} shadow={2} pt={0.3} my={3} pb={2} rounded={"md"} key={product.id} w="47%" bg={Colors.white}>
            <Image source={{uri:product.image}} alt="image" w="100%" h={24} resizeMode="contain"/>
            <Box px={4} pt={1} alignItems="center" justifyContent={"center"}>
                <Heading size="sm" bold textAlign={"center"}>${product.price}</Heading>
                <Text fontSize={15} mt={1} isTruncated w="full">{product.title}</Text>
                <Rating value={product.rating.rate}/>
            </Box>
            </Pressable>

        ))
            
        }
    
</Flex>
</ScrollView>
 )
}
