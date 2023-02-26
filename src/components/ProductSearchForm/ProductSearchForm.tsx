import React, { useState } from "react";
import { Button, Flex, Icon, Input, useStyleConfig } from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
import { useRouter } from "next/router";

const ProductSearchForm = ({
  isDisabled,
  query
}: {
  isDisabled: boolean;
  query: string;
}) => {
  const [inputQuery, setInputQuery] = useState<string>(query);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    router.push({ pathname: "search", query: { query: inputQuery, page: 1 } });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex marginY={5} direction={{ base: "column", md: "row" }} width="100%">
        <Input
          value={inputQuery}
          onChange={({ target }) => setInputQuery(target.value)}
          isRequired={true}
          isDisabled={isDisabled}
          size="xl"
          name="query"
          marginRight={5}
          variant="filled"
          placeholder="Search..."
          border="2px"
          borderColor="gray.400"
          focusBorderColor="cyan.600"
        />
        <Button
          padding={10}
          fontSize="xl"
          marginTop={{ base: 5, md: 0 }}
          alignSelf="center"
          sx={useStyleConfig("CustomButton")}
          type="submit"
          isDisabled={loading}
        >
          Search
          <Icon as={VscArrowRight} marginTop={0.5} marginLeft={2} />
        </Button>
      </Flex>
    </form>
  );
};

export default ProductSearchForm;
