import { Box, Flex, Center } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu } from "../fonts";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { BreakpointBadge } from "../components/BreakpointBadge";

export default function EngagementPage() {
  return (
    <PageLayout>
      <Box position="relative">
        <BreakpointBadge />

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
