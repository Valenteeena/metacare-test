import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

const TabMenu = () => {
  return (
    <Tabs w="full">
      <TabList borderBottom="1px solid #ECEBF5" px="4">
        <Tab
          outline="none"
          _active={{ color: "black", borderColor: "#6837EF" }}
        >
          Efficiency
        </Tab>
        <Tab>Volume</Tab>
        <Tab>Customer Satisfaction</Tab>
        <Tab>Backlog</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
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
