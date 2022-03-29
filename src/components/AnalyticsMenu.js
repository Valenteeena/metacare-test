import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";

const AnalyticsMenu = () => {
  return (
    <Accordion w="100%" border="none">
      <AccordionItem border="none" p={0}>
        <AccordionButton
          justifyContent="space-between"
          _hover={{ backgroundColor: "none" }}
        >
          <Flex
            justify="space-between"
            align="center"
            textAlign="left"
            color="#6837EF"
            fontSize="16px"
            ml="-4"
          >
            Analytics
          </Flex>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List>
            <ListItem color="#060213" fontWeight="600" pb="1">
              Teams
            </ListItem>
            <ListItem pb="1" _hover={{ color: "#060213" }}>
              Knowledge Base
            </ListItem>
            <ListItem pb="1" _hover={{ color: "#060213" }}>
              Training SAM
            </ListItem>
            <ListItem pb="1" _hover={{ color: "#060213" }}>
              Help center
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AnalyticsMenu;
