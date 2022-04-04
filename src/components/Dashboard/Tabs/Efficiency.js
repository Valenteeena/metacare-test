import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { FiSearch } from "react-icons/fi";
import ReusableChart from "./ReusableChart";
import {
  AvgContactOptions,
  AvgContactSeries,
  AvgResOptions,
  AvgResponseOptions,
  AvgResponseSeries,
  AvgResSeries,
  RepliesOptions,
  RepliesSeries,
} from "../../../data/DataExport";
const Efficiency = () => {
  return (
    <Box>
      <HStack justifyContent="space-between" pt="13px">
        <Heading fontSize="24px" fontWeight="600" fontFamily="Gelion Regular">
          Efficiency Analytics
        </Heading>
        <HStack spacing="4">
          <InputGroup
            size="md"
            w="350px"
            border="1px solid #E1E1EB"
            borderRadius="md"
            _focus={{ outline: "none", background: "none" }}
          >
            <InputLeftElement>
              <Button
                h="1.75rem"
                w="4.5rem"
                size="sm"
                bg="none"
                _focus={{ outline: "none", background: "none" }}
                _hover={{ outline: "none", background: "none" }}
              >
                <FiSearch color="#A3A3C2" />
              </Button>
            </InputLeftElement>
            <Input
              type={"text"}
              placeholder="Search"
              outline="none"
              border="none"
              fontSize="14px"
              fontWeight="400"
              color="#A3A3C2"
              _placeholder={{ fontSize: "13px", fontWeight: "300" }}
            />
          </InputGroup>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="white"
              border="1px solid #E1E1EB"
              borderRadius="md"
              color="#060213"
              fontSize="16px"
              fontWeight="500"
            >
              Filter Options
            </MenuButton>
            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
            </MenuList>
          </Menu>
          <Button
            bg="#25BB87"
            color="white"
            fontSize="16px"
            fontWeight="500"
            w="105px"
          >
            Export
          </Button>
        </HStack>
      </HStack>
      <ReusableChart
        data={AvgResponseOptions}
        series={AvgResponseSeries}
        priorityColor="#F05D23"
        title="Average response Time"
      />

      <ReusableChart
        data={RepliesOptions}
        series={RepliesSeries}
        priorityColor="#3E68FF"
        title="Replies per resolution"
        sub="Average Replies"
      />

      <ReusableChart
        data={AvgResOptions}
        series={AvgResSeries}
        priorityColor="#FB6491"
        title="Average resolution time"
        sub="Average Resolution Rate"
      />

      <ReusableChart
        data={AvgContactOptions}
        series={AvgContactSeries}
        priorityColor="#07C9E2"
        title="First contact resolution rate"
        sub="Average Contact Rate"
      />
    </Box>
  );
};

export default Efficiency;
