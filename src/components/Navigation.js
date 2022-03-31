import React from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { Box, HStack, Link, VStack, Text } from "@chakra-ui/layout";
import "./NavigationStyles.css";
import AnalyticsMenu from "./AnalyticsMenu";
import { FiUsers } from "react-icons/fi";
import { AnalyticsIcon, HelpIcon, InboxIcon } from "../Icons/Icons";
const Navigation = () => {
  return (
    <ProSidebar
      style={{
        height: "100vh",
        backgroundColor: "#FCFCFD",
        position: "sticky",
        top: "0",
      }}
      width="20%"
    >
      <Menu iconShape="circle">
        <SidebarHeader>
          <HStack>
            <Box
              px="6"
              border={"1px solid #ECEBF5"}
              w="full"
              h="60px"
              borderRadius={"8px"}
            >
              <HStack align={"center"}>
                <Box h="60px" w="4"></Box>
                <VStack align="start" spacing={0}>
                  <Text
                    fontSize="14px"
                    color="#060213"
                    fontWeight="700"
                    fontFamily="Gelion Regular"
                  >
                    Metacare
                  </Text>
                  <Text
                    color="#696D8C"
                    fontSize="12px"
                    fontFamily="Gelion Regular"
                  >
                    adeyinka@metacare.app
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        </SidebarHeader>
        <MenuItem icon={<FiUsers />}>
          Admin <Link to="/" />
        </MenuItem>
        <MenuItem icon={<AiOutlineCheckSquare />}>
          Knowledge base <Link to="/" />
        </MenuItem>
        <MenuItem icon={<AiOutlineCheckSquare />}>
          Train SAM <Link to="/" />
        </MenuItem>
        <MenuItem icon={<InboxIcon />}>
          Agent Inbox <Link to="/" />
        </MenuItem>
        <MenuItem icon={<HelpIcon />}>
          Help Center <Link to="/" />
        </MenuItem>
        <MenuItem icon={<AnalyticsIcon />}>
          <AnalyticsMenu />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Navigation;
