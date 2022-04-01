import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ cardTitle, time }) => {
  return (
    <Box
      bg="#FAFAFA"
      border="1px solid #ECEBF5"
      borderRadius="10px"
      minW="187px"
      px="4"
      py="6"
    >
      <Text color="#696D8C" fontSize="14px" fontFamily="Gelion Regular">
        {cardTitle}
      </Text>
      <Heading fontSize="20px" fontFamily="Gelion Regular" pt="4">
        {time}
      </Heading>
    </Box>
  );
};
export default Card;
