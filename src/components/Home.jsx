import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} p={"24"}>
      <Image w={"full"} h={"full"} objectFit={"cover"} src={logo} />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        letterSpacing={"wider"}
        fontFamily={"Roboto Condensed"}
        color={"whiteAlpha.700"}
        mt={"-32"}
      >
        Crypto-Guru
      </Text>
    </Box>
  );
};
export default Home;
