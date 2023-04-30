import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import TabComponent from "./components/TabComponent";
import Footer from "./components/Footer";
function App() {
  return (
    <Box 
    bg="#f3f9fb"
    height='100%'
    >
    <Header/>
    <TabComponent/>
    <Footer/>
    
    </Box>
  );
}

export default App;
