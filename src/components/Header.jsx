import {Heading, Image, Flex, Box } from "@chakra-ui/react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
   <Box>
   <Flex align="center">
    <Image src={logo} alt='logo' width={100} marginBottom='1rem'/>
        <Box> 
            <Flex flexDirection="column">
            <Heading color="black" marginBottom="1rem">
                Health-O-Meter
            </Heading>
            </Flex>
        </Box>
    </Flex>
        
   </Box>

)};

export default Header;
