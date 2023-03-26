import React from "react";
import { Center, Text, Modal, VStack, HStack } from "native-base";
import Buttone from "./Buttone";
import Colors from "../Color";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    title: "Products",
    price: "$ 100",
    color : Colors.black
  },
  {
    title: "Shipping",
    price: "$ 10",
    color: Colors.black
  },
  {
    title: "Tax",
    price: "$ 100",
    color: Colors.black
  },
  {
    title: "Total",
    price: "$ 210",
    color: Colors.green
  },
];
export default function Placeordermodel() {
  const navigation=useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setModalVisible(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
        children="SHOW TOTAL"
      />
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size="lg"
      >
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {data.map((item, index) => (
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                  <Text fontSize={14} color={Colors.black}>
                    {item.title}
                  </Text>
                  <Text fontSize={14} bold color={item.color}>
                    {item.price}
                  </Text>
                </HStack>
              ))}
             
            </VStack>

          </Modal.Body>
            <Modal.Footer>
                <Buttone
                    onPress={() =>{
                        setModalVisible(false)
                        navigation.navigate('Home')
                    }}
                    bg={Colors.black}
                    color={Colors.white}
                    mt={5}
                   
                    children="Place Order"
                />
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
