import { Button, Flex, Icon, Input, useStyleConfig } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useNextQueryParam } from "../utils/hooks/useNextQueryParam";

export const ProductSearchForm = () => {
  const searchQuery = useNextQueryParam("query");
  const [inputQuery, setInputQuery] = useState<string>(searchQuery ?? "");

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void router.push({
      pathname: "search",
      query: { query: inputQuery, page: 1 }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex marginY={5} direction={{ base: "column", md: "row" }} width="100%">
        <Input
          value={inputQuery}
          onChange={({ target }) => setInputQuery(target.value)}
          isRequired={true}
          size="xl"
          name="query"
          marginRight={5}
          variant="filled"
          placeholder="Search..."
          border="2px"
          bgColor="green.50"
          borderColor="green.1100"
          focusBorderColor="green.600"
          _placeholder={{
            color: "gray.500"
          }}
          _focus={{
            bgColor: "green.50"
          }}
          _hover={{
            bgColor: "green.100"
          }}
        />
        <Button
          padding={10}
          fontSize="xl"
          marginTop={{ base: 5, md: 0 }}
          sx={useStyleConfig("CustomButton")}
          type="submit"
        >
          Search
          <Icon as={ArrowRight} fontSize="24" marginLeft={2} />
        </Button>
      </Flex>
    </form>
  );
};
