import { Box, Collapse, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

import { useItemDetailQuery } from "../../utils/hooks/queries/useItemDetailQuery";
import { PriceHistoryChart } from "../Charts/PriceHistoryChart";

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
  id,
  name
}: {
  isOpen: boolean;
  id: string;
  name: string;
}) => {
  const { data, isLoading } = useItemDetailQuery(id, isOpen);

  return (
    <Collapse in={isOpen} animateOpacity unmountOnExit>
      <Flex py={3} px={12} gap={3} justifyContent="center">
        {isLoading || !data ? (
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
              <PriceHistoryChart 
                data={data.priceHistoryChartData}
                name={name}
              />
            </Box>
          </Flex>
        )}
      </Flex>
    </Collapse>
  );
};
