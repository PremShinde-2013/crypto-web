import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HStack
      p={"4"}
      width={"full"}
      position={"fixed"}
      shadow={"dark-lg"}
      bgColor={"blackAlpha.900"}
      zIndex={1}
    >
      <Button variant={"unstyled"} color={"white"}>
        <Link to='/'>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to='/exchanges'>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to='/coins'>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
