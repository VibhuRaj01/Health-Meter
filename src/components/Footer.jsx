import { Box, Flex, Image, Text } from "@chakra-ui/react";
import py from "../assets/python-logo.png";
import react from "../assets/react-logo.png";
import chakra from "../assets/chakra-logo.png";

const Footer = () => {
  return (
    <Box bg="gray.100" py={8}>
      <Flex align="center" justify="center" direction="row">
        <Text fontSize="xl" fontWeight="bold">
          Powered by:
        </Text>
        <Image src={react} alt="React" mx={2} boxSize={12} borderRadius="full" />
        <Image src={chakra} alt="Chakra UI" mx={2} boxSize={12} borderRadius="full"/>
        <Image src={py} alt="Python" mx={2} boxSize={12} borderRadius="full"/>
      </Flex>
    </Box>
  );
};

export default Footer;
