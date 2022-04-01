import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { InboxIcon } from "../../../Icons/Icons";
import Card from "./Card";
import Chart from "react-apexcharts";

const ReusableChart = ({ title, data, cardInfo, priorityColor }) => {
  console.log(data);
  return (
    <HStack
      border="1px solid #ECEBF5"
      borderRadius="10px"
      p="4"
      my="6"
      spacing="4"
      align="start"
      height="350px"
      maxHeight="300px"
    >
      <Box w="80%">
        <HStack justifyContent="space-between">
          <HStack>
            <Heading fontSize="18px" fontFamily="Gelion Regular">
              {title || "Average response Time"}
            </Heading>
            <Badge
              bg="rgba(37, 187, 135, 0.1)"
              px="12px"
              py="4px"
              fontSize="12px"
              color="#25BB87"
              fontWeight="500"
            >
              +4.14%
            </Badge>
          </HStack>
          <HStack spacing="4">
            <Box w="10px" h="10px" bg={priorityColor || "#F05D23"}></Box>
            <Text fontFamily="Gelion Regular" fontSize="14px">
              High Priority
            </Text>
            <Divider orientation="vertical" h="24px" />
            <Button
              rightIcon={<InboxIcon />}
              variant="outline"
              w="148px"
              h="38px"
              fontSize="14px"
              justifyContent="space-between"
              fontWeight="400"
            >
              This Month
            </Button>
          </HStack>
        </HStack>
        <Chart
          options={data}
          series={[12, 18, 30, 50, 19, 41, 33, 48]}
          type="line"
          // width="500"
          height="250"
        />
      </Box>
      <Divider orientation="vertical" />
      <VStack spacing="6">
        <Card cardTitle={title || "Average response Time"} time="30 Mins" />
        <Card cardTitle={"Response Time"} time="1 Hour 30 Mins" />
      </VStack>
    </HStack>
  );
};

export default ReusableChart;
