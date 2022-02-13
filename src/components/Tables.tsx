import { css } from "@emotion/react";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GoChevronDown, GoChevronUp, GoPrimitiveDot } from "react-icons/go";
import {
  Flex,
  Heading,
  Icon,
  StyledTable,
  TextBox,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button
} from "./StyledComponents";

type item = { name: string; url: string; price: number; store: string };

type tableProps = {
  items: item[];

  /** If the results are sorted, we will not show the sort button inside the table. */
  areResultsSorted: boolean;
};

// Add a sort direction like searchresults component for a tablewithheading

const Table = ({ items, areResultsSorted, ...otherProps }: tableProps) => {
  const [sortType, setSortType] = useState<number>(0);

  const sortSymbols = [<GoPrimitiveDot />, <GoChevronUp />, <GoChevronDown />];

  let itemsToDisplay: item[] = Array.from(items);

  if (sortType > 0) {
    itemsToDisplay = itemsToDisplay.sort(
      (a, b) => (sortType === 1 ? 1 : -1) * (a.price - b.price)
    );
  }

  return (
    <Flex
      css={css`
        overflow-x: "auto";
      `}
    >
      {itemsToDisplay.length ? (
        <StyledTable {...otherProps}>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>
                {areResultsSorted ? (
                  "Price"
                ) : (
                  <Button
                    aria-label="Click this button to sort the table from normal order to ascending or descending order."
                    css={css`
                      background-color: transparent;
                      text-transform: uppercase;
                      color: inherit;
                    `}
                    onClick={() => setSortType((sortType + 1) % 3)}
                  >
                    Price {sortSymbols[sortType]}
                  </Button>
                )}
              </Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsToDisplay.map((result) => (
              <Tr key={`${result.name}:${result.url}`}>
                <Td>
                  <a href={result.url} target="_blank" rel="noreferrer">
                    {result.name}
                  </a>
                </Td>
                <Td>
                  <strong>
                    {result.price === 0
                      ? "Call Store"
                      : `₹${result.price.toLocaleString("en-IN")}`}
                  </strong>
                </Td>
                <Td>
                  <a href={result.url} target="_blank" rel="noreferrer">
                    <Icon margin="0.25rem 0">
                      <BiLinkExternal size={20} />
                    </Icon>
                  </a>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </StyledTable>
      ) : (
        <TextBox size="xl">Sorry, no matching products were found.</TextBox>
      )}
    </Flex>
  );
};

export default Table;

type tableWithHeadingProps = tableProps & {
  title: string;
};

export const TableWithHeading: React.FC<tableWithHeadingProps> = (props) => {
  const { title, items, ...otherProps } = props;

  if (items) {
    return (
      <Flex
        flexDirection="column"
        css={css`
          margin-bottom: 4rem;
        `}
      >
        <Flex flexDirection="row" alignItems="center">
          <Heading
            size="xl"
            weight="800"
            css={css`
              margin-bottom: 1rem;
            `}
          >
            {title}
          </Heading>
          <TextBox
            size="sm"
            weight="bold"
            color="var(--color-text-gray)"
            css={css`
              margin-left: 2rem;
            `}
          >
            {items.length} {items.length !== 1 ? "MATCHES" : "ITEM"}
          </TextBox>
        </Flex>
        <Table items={items} {...otherProps} />
      </Flex>
    );
  } else return null;
};
