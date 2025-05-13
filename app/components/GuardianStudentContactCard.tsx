import { Box, Flex, Text, Tooltip, Divider, useToast } from "@chakra-ui/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { apercu, apercuMono, inter } from "../fonts";

interface GuardianStudentContactCardProps {
  onProfileClick: () => void;
}

export const GuardianStudentContactCard = ({
  onProfileClick,
}: GuardianStudentContactCardProps) => {
  const toast = useToast();

  const copyToClipboard = (text: string, event: React.MouseEvent) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    toast({
      title: "Email copied",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box
      width="100%"
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="none"
      shadow="md"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      p={6}
      mb={8}
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        gap={{ base: 4, xl: 0 }}
        alignItems="stretch"
        height="100%"
      >
        {/* Guardian Info */}
        <Box flex="1" display="flex" flexDirection="column">
          <Text
            className={apercu.className}
            fontSize="md"
            fontWeight="bold"
            color="#111827"
            mb={1}
          >
            Guardian
          </Text>
          <Text className={inter.className} fontSize="m" color="#4B5563" mb={2}>
            James Hogerty
          </Text>
          <Flex alignItems="center" mb={1}>
            <Box as="span" mr={2} color="#6B7280">
              <EnvelopeIcon width={18} height={18} />
            </Box>
            <Tooltip
              label="COPY"
              placement="top"
              hasArrow
              bg="#111827"
              color="white"
              fontSize="10px"
              fontWeight="600"
              letterSpacing="1.5px"
              fontFamily={apercuMono.style.fontFamily}
            >
              <Text
                fontSize="sm"
                color="#6B7280"
                className={inter.className}
                cursor="pointer"
                onClick={(e) => copyToClipboard("jhogerty@gmail.com", e)}
                _hover={{ textDecoration: "underline" }}
              >
                jhogerty@gmail.com
              </Text>
            </Tooltip>
          </Flex>
          <Flex alignItems="center">
            <Box as="span" mr={2} color="#6B7280">
              <PhoneIcon width={18} height={18} />
            </Box>
            <Text fontSize="sm" color="#6B7280" className={inter.className}>
              (650) 650-6500
            </Text>
          </Flex>
        </Box>
        {/* Responsive Divider */}
        <Divider
          orientation="horizontal"
          display={{ base: "block", xl: "none" }}
          my={2}
        />
        <Divider
          orientation="vertical"
          display={{ base: "none", xl: "block" }}
          mx={4}
          alignSelf="stretch"
          height="auto"
        />
        {/* Student Info */}
        <Box flex="1" display="flex" flexDirection="column">
          <Text
            className={apercu.className}
            fontSize="md"
            fontWeight="bold"
            color="#111827"
            mb={1}
          >
            Student
          </Text>
          <Text className={inter.className} fontSize="m" color="#4B5563" mb={2}>
            Quintin Leong
          </Text>
          <Flex alignItems="center" mb={1}>
            <Box as="span" mr={2} color="#6B7280">
              <EnvelopeIcon width={18} height={18} />
            </Box>
            <Tooltip
              label="COPY"
              placement="top"
              hasArrow
              bg="#111827"
              color="white"
              fontSize="10px"
              fontWeight="600"
              letterSpacing="1.5px"
              fontFamily={apercuMono.style.fontFamily}
            >
              <Text
                fontSize="sm"
                color="#6B7280"
                className={inter.className}
                cursor="pointer"
                onClick={(e) => copyToClipboard("quintinrocks@gmail.com", e)}
                _hover={{ textDecoration: "underline" }}
              >
                quintinrocks@gmail.com
              </Text>
            </Tooltip>
          </Flex>
          <Flex alignItems="center">
            <Box as="span" mr={2} color="#6B7280">
              <PhoneIcon width={18} height={18} />
            </Box>
            <Text fontSize="sm" color="#6B7280" className={inter.className}>
              N/A
            </Text>
          </Flex>
          <Box cursor="pointer" onClick={onProfileClick}>
            <Flex
              alignItems="center"
              mt={4}
              _hover={{
                color: "#111827",
                textDecoration: "underline",
              }}
            >
              <Text
                className={apercuMono.className}
                fontSize="xs"
                fontWeight="medium"
                color="#6b7280"
              >
                VIEW STUDENT PROFILE
              </Text>
              <ChevronRightIcon
                width={14}
                height={14}
                color="#6b7280"
                className="ml-1"
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
