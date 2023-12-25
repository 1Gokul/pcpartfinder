import {
  Box,
  Collapse,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text
} from "@chakra-ui/react";

import { getFormattedDate, getPriceLimits } from "../../utils/common/price";
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

  const { max, min } = getPriceLimits(data ? data.priceHistoryChartData : []);

  const maxPriceDate = data?.priceHistoryChartData.find(
    (date) => date.price === max
  );

  const minPriceDate = data?.priceHistoryChartData.find(
    (date) => date.price === min
  );

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
          <Flex
            backgroundColor="inherit"
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
            <PriceHistoryChart data={data.priceHistoryChartData} name={name} />
            <Box p={3}>
              <Text
                fontWeight="bold"
                color={
                  data.priceHistoryChartData.length > 1
                    ? "gray.800"
                    : "gray.500"
                }
                mb={2}
              >
                {data.priceHistoryChartData.length > 1
                  ? data.priceHistoryChartData.length
                  : "No"}{" "}
                price records found
              </Text>

              <Text mb={4}>
                Last found on{" "}
                {getFormattedDate(
                  data.priceHistoryChartData[
                    data.priceHistoryChartData.length - 1
                  ].date
                )}
              </Text>
              <SimpleGrid
                columns={3}
                columnGap={2}
                alignContent="center"
                textAlign="left"
              >
                <Text fontWeight="semibold">Highest</Text>
                <Text>₹{max}</Text>
                <Text>
                  {maxPriceDate ? getFormattedDate(maxPriceDate.date) : "N/A"}
                </Text>

                <Text fontWeight="semibold">Lowest</Text>
                <Text>₹{min}</Text>
                <Text>
                  {minPriceDate ? getFormattedDate(minPriceDate.date) : "N/A"}
                </Text>
              </SimpleGrid>
            </Box>
          </Flex>
        )}
      </Flex>
    </Collapse>
  );
};
