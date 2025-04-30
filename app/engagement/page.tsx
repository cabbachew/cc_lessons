import { Box, Flex, Center, Badge, Text } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu, apercuMono } from "../fonts";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EngagementPage() {
  return (
    <PageLayout>
      <Box position="relative">
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
            <Text
              as="span"
              display={{ base: "none", sm: "inline", md: "none" }}
            >
              sm
            </Text>
            <Text
              as="span"
              display={{ base: "none", md: "inline", lg: "none" }}
            >
              md
            </Text>
            <Text
              as="span"
              display={{ base: "none", lg: "inline", xl: "none" }}
            >
              lg
            </Text>
            <Text as="span" display={{ base: "none", xl: "inline" }}>
              xl and above
            </Text>
          </Badge>
        </Box>

        <Box bg="white">
          <Flex alignItems="center" mb={4}>
            <Link href="/">
              <Center
                w={10}
                h={10}
                mr={4}
                borderRadius="none"
                _hover={{ bg: "gray.100" }}
                cursor="pointer"
              >
                <ArrowUturnLeftIcon width={20} color="#111827" />
              </Center>
            </Link>
            <h1
              className={`${apercu.className} text-[32px] leading-[40px] font-bold tracking-[-0.05em] text-[#111827]`}
            >
              Quintin Leong&apos;s Home Improvement Passion Project
            </h1>
          </Flex>
        </Box>
      </Box>
    </PageLayout>
  );
}
