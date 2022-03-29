import { VStack } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import TabMenu from "./Tabs";

const Dashboard = () => {
  return (
    <VStack>
      <Header />
      <TabMenu />
    </VStack>
  );
};

export default Dashboard;
