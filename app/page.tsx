import { apercu, inter, apercuMono } from "./fonts";
import {
  Box,
  Text,
  Card,
  CardBody,
  Flex,
  Center,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { PageLayout } from "./components/PageLayout";
import {
  PencilSquareIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

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

      <Grid templateColumns="1fr 1fr" gap={6} mt={8}>
        <GridItem>
          <Box mb={2}>
            <h2
              className={`${apercu.className} text-[20px] leading-[28px] font-bold tracking-[-0.03em] text-[#111827]`}
            >
              Upcoming Sessions
            </h2>
          </Box>

          <Card
            width="100%"
            borderRadius="none"
            mt={2}
            borderWidth="1px"
            borderColor="gray.200"
            shadow="md"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          >
            <CardBody p={2.5}>
              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "stretch", lg: "center" }}
                justifyContent="space-between"
              >
                <Flex alignItems="flex-start" width="full">
                  <Center
                    width="64px"
                    height="64px"
                    bg="gray.100"
                    borderRadius="none"
                    flexShrink={0}
                  >
                    <VStack spacing={0} justify="center">
                      <Text
                        className={apercuMono.className}
                        fontSize="11px"
                        letterSpacing="0.5px"
                        color="#4b5563"
                      >
                        MAY
                      </Text>
                      <Text
                        className={apercu.className}
                        fontSize="28px"
                        fontWeight="bold"
                        color="#4b5563"
                        lineHeight="1"
                      >
                        27
                      </Text>
                    </VStack>
                  </Center>
                  <VStack align="flex-start" spacing={0.5} ml={4}>
                    <Text
                      className={apercuMono.className}
                      fontSize="10px"
                      letterSpacing="0.5px"
                      color="#f87171"
                      display="flex"
                      alignItems="center"
                      gap={1}
                      fontWeight="600"
                      order={{ base: 3, lg: 1 }}
                    >
                      STARTS IN 2 HOURS
                      <Box
                        as="span"
                        width="2px"
                        height="2px"
                        borderRadius="full"
                        bg="#f87171"
                        display="inline-block"
                        mx={1}
                      />
                      30 MINUTES
                    </Text>
                    <Text
                      className={apercu.className}
                      fontSize="16px"
                      fontWeight="bold"
                      letterSpacing="-0.02em"
                      color="#111827"
                      order={{ base: 1, lg: 2 }}
                    >
                      Quintin Leong's Home Improvement Passion Project
                    </Text>
                    <Text
                      className={apercuMono.className}
                      fontSize="11px"
                      letterSpacing="0.5px"
                      color="#6b7280"
                      order={{ base: 2, lg: 3 }}
                    >
                      3:30 PM - 4:30 PM PDT
                    </Text>
                  </VStack>
                </Flex>
                <Flex alignItems="center" width={{ base: "full", lg: "auto" }}>
                  <Box
                    px={6}
                    py={2}
                    mx={{ base: 0, lg: 2 }}
                    mt={{ base: 4, lg: 0 }}
                    bg="white"
                    borderRadius="none"
                    color="#4b5563"
                    fontSize="13px"
                    fontWeight="600"
                    className={apercu.className}
                    cursor="pointer"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _hover={{ bg: "#ecfdf5" }}
                    transition="all 0.2s"
                    textAlign="center"
                    width={{ base: "full", lg: "auto" }}
                    whiteSpace="nowrap"
                    display="inline-block"
                  >
                    View Lesson
                  </Box>
                  <Center
                    width="32px"
                    height="32px"
                    borderRadius="none"
                    cursor="pointer"
                    _hover={{ bg: "gray.50" }}
                    ml={{ base: 2, lg: 1 }}
                    mt={{ base: 4, lg: 0 }}
                  >
                    <EllipsisVerticalIcon width={20} color="#6b7280" />
                  </Center>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem>
          <Box mb={2}>
            <h2
              className={`${apercu.className} text-[20px] leading-[28px] font-bold tracking-[-0.03em] text-[#111827]`}
            >
              Tasks
            </h2>
          </Box>

          <Card
            width="100%"
            borderRadius="none"
            mt={2}
            borderWidth="1px"
            borderColor="gray.200"
            shadow="md"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          >
            <CardBody p={2.5}>
              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "stretch", lg: "center" }}
                justifyContent="space-between"
              >
                <Flex alignItems="flex-start" width="full">
                  <Center
                    width="64px"
                    height="64px"
                    bg="#fbc012"
                    borderRadius="none"
                    flexShrink={0}
                  >
                    <PencilSquareIcon width={24} color="#FFFFFF" />
                  </Center>
                  <VStack align="flex-start" spacing={0.5} ml={4}>
                    <Text
                      className={apercu.className}
                      fontSize="16px"
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
                      fontWeight="600"
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
                  mx={{ base: 0, lg: 2 }}
                  mt={{ base: 4, lg: 0 }}
                  bg="white"
                  borderRadius="none"
                  color="#4b5563"
                  fontSize="13px"
                  fontWeight="600"
                  className={apercu.className}
                  cursor="pointer"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _hover={{ bg: "#ecfdf5" }}
                  transition="all 0.2s"
                  textAlign="center"
                  width={{ base: "full", lg: "auto" }}
                >
                  Complete
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </PageLayout>
  );
}
