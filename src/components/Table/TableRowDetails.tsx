import { Box, Collapse, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

import { useItemDetailQuery } from "../../utils/hooks/queries/useItemDetailQuery";
import { Chart } from "../chart/Chart";

const data1 = [
  { date: "2022-10-29", price: 45370 },
  { date: "2022-11-26", price: 40690 },
  { date: "2023-01-23", price: 38225 },
  { date: "2023-03-18", price: 37240 }
];

const SkeletonLine = () => (
  <SkeletonText
    startColor="green.400"
    endColor="green.600"
    noOfLines={1}
    skeletonHeight="2"
  />
);
export const TableRowDetails = ({
  isOpen,
  id
}: {
  isOpen: boolean;
  id: string;
}) => {
  const { data, isLoading, isSuccess } = useItemDetailQuery(
    id,
    isOpen
  );

  return (
    <Collapse in={isOpen} animateOpacity unmountOnExit>
      <Flex py={3} px={12} gap={3} justifyContent="center">
        {isLoading ? (
          <>
            <Skeleton
              startColor="green.400"
              endColor="green.600"
              height="200"
              width={400}
              flex={3}
            />
            <Flex
              direction="column"
              gap={4}
              flex={2}
              px={8}
              justifyContent="center"
            >
              <SkeletonLine />
              <SkeletonLine />
              <SkeletonLine />
              <SkeletonLine />
            </Flex>
          </>
        ) : (
          <Flex backgroundColor="inherit">
            <Box pb={3} pl={3}>
              <Chart data={{ testData: data1 }} />
            </Box>
          </Flex>
        )}
      </Flex>
    </Collapse>
  );
};
