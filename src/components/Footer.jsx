import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import owner from "../assets/owner.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack direction={["column", "row"]} h={"full"} alignItems={"center"}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontFamily={"md"}
            letterSpacing={"widest"}
            textAlign={["center"]}
          >
            Welcome to Crypto-Guru! <br /> At Crypto-Guru , we're passionate
            about the transformative potential of cryptocurrencies and
            blockchain technology. Our mission is to provide you with accurate,
            up-to-date information, resources, and insights to help you navigate
            the exciting world of crypto.
          </Text>{" "}
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={owner} />
          <Text>Prem Shinde</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
