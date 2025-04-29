import { apercu, inter, apercuMono } from "./fonts";
import {
  Box,
  Text,
  Card,
  CardBody,
  Flex,
  Center,
  VStack,
} from "@chakra-ui/react";
import { PageLayout } from "./components/PageLayout";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <PageLayout>
      <Box bg="white">
        <h1
          className={`${apercu.className} text-[32px] leading-[40px] font-bold tracking-[-0.05em] text-[#111827]`}
        >
          Afternoon, Daniel
        </h1>
        <Text className={`${inter.className} mt-2 text-[#4B5563]`}>
          We're so excited you're here.
        </Text>
      </Box>

      <Box mt={8} mb={2}>
        <h2
          className={`${apercu.className} text-[20px] leading-[28px] font-bold tracking-[-0.03em] text-[#111827]`}
        >
          Tasks
        </h2>
      </Box>

      <Card
        width="100%"
        borderRadius="lg"
        mt={2}
        borderWidth="1px"
        borderColor="gray.200"
        shadow="md"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      >
        <CardBody p={3}>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "stretch", md: "center" }}
            justifyContent="space-between"
          >
            <Flex alignItems="flex-start" width="full">
              <Center
                width="60px"
                height="60px"
                bg="#fbc012"
                borderRadius="md"
                flexShrink={0}
              >
                <PencilSquareIcon width={24} color="#FFFFFF" />
              </Center>
              <VStack align="flex-start" spacing={1} ml={4}>
                <Text
                  className={apercu.className}
                  fontSize="14px"
                  fontWeight="bold"
                  letterSpacing="-0.02em"
                  color="#111827"
                >
                  Submit attendance
                </Text>
                <Text
                  className={apercuMono.className}
                  fontSize="11px"
                  letterSpacing="0.5px"
                  color="#6b7280"
                >
                  QUINTIN LEONG'S HOME IMPROVEMENT PASSION PROJECT
                </Text>
                <Text
                  className={apercuMono.className}
                  fontSize="10px"
                  letterSpacing="0.5px"
                  color="#f87171"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  DUE ON MAY 1, 2025
                  <Box
                    as="span"
                    width="2px"
                    height="2px"
                    borderRadius="full"
                    bg="#f87171"
                    display="inline-block"
                    mx={1}
                  />
                  12:00 AM PDT
                </Text>
              </VStack>
            </Flex>
            <Box
              px={6}
              py={2}
              mx={{ base: 0, md: 2 }}
              mt={{ base: 4, md: 0 }}
              bg="white"
              borderRadius="md"
              color="#4b5563"
              fontSize="13px"
              fontWeight="600"
              className={apercu.className}
              cursor="pointer"
              borderWidth="1px"
              borderColor="gray.200"
              _hover={{ bg: "#fff8f8" }}
              transition="all 0.2s"
              textAlign="center"
              width={{ base: "full", md: "auto" }}
            >
              Start
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </PageLayout>
  );
}
