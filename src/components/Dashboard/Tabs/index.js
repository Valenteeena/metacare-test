import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Efficiency from "./Efficiency";

const TabMenu = () => {
  return (
    <Tabs w="full">
      <TabList
        borderBottom="1px solid #ECEBF5"
        px="4"
        fontFamily="Gelion Regular"
      >
        <Tab
          outline="none"
          _active={{ color: "black", borderColor: "#6837EF" }}
          fontFamily="Gelion Regular"
        >
          Efficiency
        </Tab>
        <Tab>Volume</Tab>
        <Tab>Customer Satisfaction</Tab>
        <Tab>Backlog</Tab>
      </TabList>

      <TabPanels px="6">
        <TabPanel>
          <Efficiency />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabMenu;
