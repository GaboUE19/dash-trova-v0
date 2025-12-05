import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  // (PNG no usa color, no es necesario logoColor)
  return (
    <Flex align="center" direction="column">
      <HorizonLogo
        h="45px"          // 🔥 altura ideal
        w="160px"         // 🔥 ancho ideal
        my="32px"
        objectFit="contain"  // ✔ evita distorsión
      />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
