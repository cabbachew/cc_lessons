import { apercu } from "./fonts";
import { Box } from "@chakra-ui/react";
import { PageLayout } from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Box bg="white">
        <h1
          className={`${apercu.className} text-[32px] leading-[40px] font-bold tracking-[-0.05em] text-[#111827]`}
        >
          Afternoon, Daniel
        </h1>
      </Box>
    </PageLayout>
  );
}
