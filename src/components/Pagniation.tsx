import {
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  useStyleConfig
} from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { NRowsType, SearchParams } from "../types/SearchResult";

const Pagination = ({
  nRows,
  currentPage,
  totalResults,
  handleParamChange
}: {
  nRows: NRowsType;
  currentPage: number;
  totalResults: number;
  handleParamChange: (newParams: Partial<SearchParams>) => void;
}) => {
  const pagniationButtonStyle = useStyleConfig("PaginationButton");

  const totalPages = Math.ceil(totalResults / nRows);

  let pages = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= totalPages);

  if (!pages.includes(1)) {
    pages = [1, ...pages];
  }
  if (!pages.includes(totalPages)) {
    pages = [...pages, totalPages];
  }

  return (
    <Flex justifyContent="space-between">
      <SimpleGrid columns={9}>
        <IconButton
          aria-label="pagination-first"
          icon={<ArrowLeft size="24" />}
          isRound
          sx={{
            ...pagniationButtonStyle,
            bg: "transparent",
            visibility: currentPage <= 1 ? "hidden" : "visible"
          }}
          onClick={() => handleParamChange({ page: currentPage - 1 })}
        />
        {pages.map((page) => (
          <Button
            key={"pagination-" + page}
            sx={{
              ...pagniationButtonStyle,
              ...(page === currentPage && {
                backgroundColor: "green.400",
                border: "2px solid #126932",
                fontWeight: "500"
              })
            }}
            onClick={() => handleParamChange({ page })}
          >
            {page}
          </Button>
        ))}
        <IconButton
          aria-label="pagination-first"
          icon={<ArrowRight size="24" />}
          isRound
          sx={{
            ...pagniationButtonStyle,
            bg: "transparent",
            visibility: currentPage === totalPages ? "hidden" : "visible"
          }}
          onClick={() => handleParamChange({ page: currentPage + 1 })}
        />
      </SimpleGrid>
    </Flex>
  );
};

export default Pagination;
