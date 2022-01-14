import { css } from "@emotion/react";
import { BiLinkExternal } from "react-icons/bi";
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
  Td
} from "./StyledComponents";

type tableProps = {
  items: { name: string; url: string; price: number; store: string }[];
  [otherProps: string]: unknown;
};

const Table: React.FC<tableProps> = (props) => {
  const { items, ...otherProps } = props;

  return (
    <Flex
      css={css`
        overflow-x: "auto";
      `}
    >
      {items.length ? (
        <StyledTable {...otherProps}>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((result) => (
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
        {/* Have to render two separate tables, one for large screens and one for small screens
      as useMediaQuery does not work with SSR. */}
        <Table
          items={items}
          size="lg"
          display={{ base: "none", md: "table" }}
          otherProps={otherProps}
        />
        <Table
          items={items}
          size="sm"
          display={{ base: "table", md: "none" }}
          otherProps={otherProps}
        />
      </Flex>
    );
  } else return null;
};
