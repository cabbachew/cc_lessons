import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu, apercuMono } from "../fonts";
import { BreakpointBadge } from "../components/BreakpointBadge";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EngagementPage() {
  return (
    <PageLayout>
      <Box position="relative">
        <BreakpointBadge />

        <Box bg="white">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Flex
              alignItems="center"
              mb={3}
              width="fit-content"
              _hover={{ color: "#4B5563" }}
            >
              <ChevronLeftIcon width={12} color="#6b7280" />
              <Text
                className={apercuMono.className}
                fontSize="xs"
                fontWeight="medium"
                color="#6b7280"
                ml={0.5}
              >
                BACK
              </Text>
            </Flex>
          </Link>

          <Flex alignItems="center" mb={4}>
            <Heading
              as="h1"
              className={apercu.className}
              fontSize={{ base: "md", sm: "lg", md: "20px", lg: "2xl" }}
              lineHeight={{
                base: "24px",
                sm: "28px",
                md: "30px",
                lg: "36px",
              }}
              fontWeight="bold"
              letterSpacing="-0.05em"
              color="#111827"
            >
              Quintin Leong&apos;s Home Improvement Passion Project
            </Heading>
          </Flex>
        </Box>
      </Box>
    </PageLayout>
  );
}
