import { Box, Badge, Text } from "@chakra-ui/react";
import { apercuMono } from "../fonts";

export function BreakpointBadge() {
  return (
    <Box position="absolute" top={0} right={0} zIndex={1}>
      <Badge
        px={2}
        py={1}
        borderRadius="none"
        bg="gray.100"
        className={apercuMono.className}
        fontSize="10px"
        letterSpacing="0.5px"
        fontWeight="normal"
        color="gray.600"
      >
        <Text as="span" display={{ base: "inline", sm: "none" }}>
          base (mobile)
        </Text>
        <Text as="span" display={{ base: "none", sm: "inline", md: "none" }}>
          sm
        </Text>
        <Text as="span" display={{ base: "none", md: "inline", lg: "none" }}>
          md
        </Text>
        <Text as="span" display={{ base: "none", lg: "inline", xl: "none" }}>
          lg
        </Text>
        <Text as="span" display={{ base: "none", xl: "inline" }}>
          xl and above
        </Text>
      </Badge>
    </Box>
  );
}
