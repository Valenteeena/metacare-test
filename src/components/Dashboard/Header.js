import {
  Badge,
  Button,
  Circle,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <HStack
      py="4"
      px="8"
      justify="space-between"
      w="full"
      borderBottom="1px solid #ECEBF5"
    >
      <InputGroup size="md" w="440px">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Ask us any question"
          bg="#FAFAFC"
          border="none"
          outline="none"
          fontSize="16px"
          fontWeight="400"
          _placeholder={{ fontSize: "15px", fontWeight: "300" }}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" bg="none">
            <BiSearch />
          </Button>
        </InputRightElement>
      </InputGroup>

      <HStack
        border="1px solid #ECEBF5"
        px="4"
        py="3"
        borderRadius="10px"
        minW="175px"
        justify="space-between"
      >
        <HStack>
          <BiBell />
          <Badge bg="#F25A68" color="white" fontSize="12px" fontWeight="300">
            3
          </Badge>
        </HStack>
        <Divider orientation="vertical" h="24px" w="1.5px" />
        <HStack>
          <Circle
            size="30px"
            bg="white"
            border="1px solid #6837EF"
            color="white"
          ></Circle>
          <BsChevronDown fontSize="10px" />
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;
