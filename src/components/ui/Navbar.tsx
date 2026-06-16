// src/components/Navbar.tsx
import { Box, Text, Dialog, Button } from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "./color-mode";
import UserGuideContent from "../../UserGuide";

const Navbar = () => {
  const borderColor = useColorModeValue("gray.700", "gray.700");

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      p={4}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(12px)" // the blur effect
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
          🧠 NeoCycle
        </Text>
      </Box>
      <Box>
        {" "}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="plain">راهنما</Button>
          </Dialog.Trigger>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content maxW="2xl" maxH="80vh" overflowY="auto" dir="rtl">
              <Dialog.Header>
                <Dialog.Title textAlign="center" direction="rtl">
                  📘 راهنمای استفاده از NeoCycle Dashboard
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <UserGuideContent />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>
        <ColorModeButton />
      </Box>
    </Box>
  );
};

export default Navbar;
