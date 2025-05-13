import { Box, Text } from "@chakra-ui/react";
import { apercu, apercuMono, inter } from "../fonts";

export const KeyDates = () => {
  return (
    <Box>
      <Text
        className={apercu.className}
        fontSize="md"
        fontWeight="bold"
        color="#111827"
        mb={3}
      >
        Key Dates
      </Text>

      <Box>
        <Box display="grid" gridTemplateColumns="1fr 3fr" gap={4}>
          {/* First Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            OCT 11, 2024
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Math test
          </Text>

          {/* Second Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            DEC 3, 2024
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Completed homework before tutoring session
          </Text>

          {/* Third Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            DEC 10, 2024
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Math exam
          </Text>

          {/* Fourth Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            DEC 16, 2024
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Winter break begins
          </Text>

          {/* Fifth Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            JAN 6, 2025
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Winter break ends
          </Text>

          {/* Sixth Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            FEB 5, 2025
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Spanish test on preterite and imperfect tenses
          </Text>

          {/* Seventh Row */}
          <Text
            className={apercuMono.className}
            fontSize="xs"
            color="#6b7280"
            fontWeight="medium"
          >
            MAR 10, 2025
          </Text>
          <Text className={inter.className} fontSize="sm" color="#4B5563">
            Spanish test on verb conjugations
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
