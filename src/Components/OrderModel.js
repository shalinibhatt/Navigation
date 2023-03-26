import React from "react";
import { Center, Text, Modal, VStack, HStack, Pressable } from "native-base";
import Buttone from "./Buttone";
import Colors from "../Color";
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
export default function OrderModel() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setModalVisible(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
        children="SHOW PAYMENT & TOTAL"
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
                    onPress={() => setModalVisible(false)}
                    bg={Colors.black}   
                    color={Colors.white}
                    mt={5}
                    children="Cancel"
                />

                <Buttone
                    onPress={() => setModalVisible(false)}
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
