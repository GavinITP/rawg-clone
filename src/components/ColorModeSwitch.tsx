import { HStack, Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <IconButton
        icon={
          colorMode === "light" ? (
            <Icon as={MdLightMode} boxSize={8} />
          ) : (
            <Icon as={MdDarkMode} boxSize={8} />
          )
        }
        aria-label="toggle color mode"
        variant="ghost"
        borderRadius="full"
        onClick={() => toggleColorMode()}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
