import { useState } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
// import FormThree from "./FormThree";
// import FormFour from "./FormFour";

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  return (
    <Box p={4} >
      <Tabs variant='soft-rounded' colorScheme='blue' index={currentTab} onChange={handleTabChange}>
        <TabList>
          <Tab>Diabetes</Tab>
          <Tab>Hepatitis</Tab>
          <Tab>Cardio</Tab>
          <Tab>Kidney</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FormOne />
          </TabPanel>
          <TabPanel>
            <FormTwo />
          </TabPanel>
          {/* <TabPanel>
            <FormThree />
          </TabPanel>
          <TabPanel>
            <FormFour />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabComponent;
