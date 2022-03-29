import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Flex>
        <Navigation />
        <Box w="80%">
          <Dashboard />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
