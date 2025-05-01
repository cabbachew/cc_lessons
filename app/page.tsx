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
import { BreakpointBadge } from "./components/BreakpointBadge";

export default function Home() {
  return (
    <PageLayout>
      <Box position="relative">
        <BreakpointBadge />

        <Box bg="white">
          <h1
            className={`${apercu.className} text-[32px] leading-[40px] font-bold tracking-[-0.05em] text-[#111827]`}
          >
            Afternoon, Daniel
          </h1>
          <Text className={`${inter.className} mt-2 text-[#4B5563]`}>
            We&apos;re so excited you&apos;re here.
          </Text>
        </Box>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap={6}
          mt={8}
        >
          <GridItem>
            <Box mb={2}>
              <Text
                as="h2"
                className={apercu.className}
                fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                fontWeight="bold"
                letterSpacing="-0.03em"
                color="#111827"
              >
                Upcoming Sessions
              </Text>
            </Box>

            <Card
              width="100%"
              borderRadius="none"
              mt={2}
              borderWidth="2px"
              borderColor="#34d399"
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
                        className={apercu.className}
                        fontSize="16px"
                        fontWeight="bold"
                        letterSpacing="-0.02em"
                        color="#111827"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        Quintin Leong&apos;s Home Improvement Passion Project
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="11px"
                        letterSpacing="0.5px"
                        color="#6b7280"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        3:30 PM - 4:30 PM PDT
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="10px"
                        letterSpacing="1px"
                        color="#f87171"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        fontWeight="600"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        STARTS IN 2H : 30M
                      </Text>
                    </VStack>
                  </Flex>
                  <Flex
                    alignItems="center"
                    width={{ base: "full", lg: "auto" }}
                  >
                    <Box
                      px={4}
                      py={2}
                      mx={{ base: 0, lg: 1 }}
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
                      as="a"
                      href="/engagement?tab=1&lesson=true"
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

            <Card
              width="100%"
              borderRadius="none"
              mt={4}
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
                          JUN
                        </Text>
                        <Text
                          className={apercu.className}
                          fontSize="28px"
                          fontWeight="bold"
                          color="#4b5563"
                          lineHeight="1"
                        >
                          03
                        </Text>
                      </VStack>
                    </Center>
                    <VStack align="flex-start" spacing={0.5} ml={4}>
                      <Text
                        className={apercu.className}
                        fontSize="16px"
                        fontWeight="bold"
                        letterSpacing="-0.02em"
                        color="#111827"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        Quintin Leong&apos;s Home Improvement Passion Project
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="11px"
                        letterSpacing="0.5px"
                        color="#6b7280"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        2:00 PM - 3:30 PM PDT
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="10px"
                        letterSpacing="1px"
                        color="#6b7280"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        fontWeight="600"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        STARTS IN 7 DAYS
                      </Text>
                    </VStack>
                  </Flex>
                  <Flex
                    alignItems="center"
                    width={{ base: "full", lg: "auto" }}
                  >
                    <Box
                      px={4}
                      py={2}
                      mx={{ base: 0, lg: 1 }}
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
                      as="a"
                      // href="/engagement"
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

            <Card
              width="100%"
              borderRadius="none"
              mt={4}
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
                          JUN
                        </Text>
                        <Text
                          className={apercu.className}
                          fontSize="28px"
                          fontWeight="bold"
                          color="#4b5563"
                          lineHeight="1"
                        >
                          10
                        </Text>
                      </VStack>
                    </Center>
                    <VStack align="flex-start" spacing={0.5} ml={4}>
                      <Text
                        className={apercu.className}
                        fontSize="16px"
                        fontWeight="bold"
                        letterSpacing="-0.02em"
                        color="#111827"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        Quintin Leong&apos;s Home Improvement Passion Project
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="11px"
                        letterSpacing="0.5px"
                        color="#6b7280"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        1:00 PM - 2:30 PM PDT
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="10px"
                        letterSpacing="1px"
                        color="#6b7280"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        fontWeight="600"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        STARTS IN 14 DAYS
                      </Text>
                    </VStack>
                  </Flex>
                  <Flex
                    alignItems="center"
                    width={{ base: "full", lg: "auto" }}
                  >
                    <Box
                      px={4}
                      py={2}
                      mx={{ base: 0, lg: 1 }}
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
                      as="a"
                      // href="/engagement"
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
              <Text
                as="h2"
                className={apercu.className}
                fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                fontWeight="bold"
                letterSpacing="-0.03em"
                color="#111827"
              >
                Tasks
              </Text>
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
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        Submit attendance
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="11px"
                        letterSpacing="0.5px"
                        color="#6b7280"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        QUINTIN LEONG&apos;S HOME IMPROVEMENT PASSION PROJECT
                      </Text>
                      <Text
                        className={apercuMono.className}
                        fontSize="10px"
                        letterSpacing="1px"
                        color="#f87171"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        fontWeight="600"
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                      >
                        DUE MAY 1, 2025 • 12:00 AM PDT
                      </Text>
                    </VStack>
                  </Flex>
                  <Box
                    px={4}
                    py={2}
                    mx={{ base: 0, lg: 1 }}
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
      </Box>
    </PageLayout>
  );
}
