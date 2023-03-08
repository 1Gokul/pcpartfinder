import {
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  useStyleConfig
} from "@chakra-ui/react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useMemo } from "react";
import { NRowsType } from "../../shared/types/SearchResult";

const Pagination = ({
  nRows,
  currentPage,
  totalResults,
  handleChangePage
}: {
  nRows:NRowsType;
  currentPage: number;
  totalResults: number;
  handleChangePage: (newPage: number) => void;
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
          icon={<HiArrowLongLeft size="36" />}
          isRound
          sx={{
            bg: "transparent",
            visibility: currentPage <= 1 ? "hidden" : "visible"
          }}
          onClick={() => handleChangePage(currentPage - 1)}
        />
        {pages.map((page) => (
          <Button
            key={"pagination-" + page}
            sx={{
              ...pagniationButtonStyle,
              ...(page === currentPage && { backgroundColor: "cyan.700" })
            }}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </Button>
        ))}
        <IconButton
          aria-label="pagination-first"
          icon={<HiArrowLongRight size="36" />}
          isRound
          sx={{
            bg: "transparent",
            visibility: currentPage === totalPages ? "hidden" : "visible"
          }}
          onClick={() => handleChangePage(currentPage + 1)}
        />
      </SimpleGrid>
    </Flex>
  );
};

export default Pagination;
