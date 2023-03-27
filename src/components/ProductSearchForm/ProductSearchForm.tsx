import React, { useState } from "react";
import { Button, Flex, Icon, Input, useStyleConfig } from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
import { useRouter } from "next/router";
import { useNextQueryParam } from "../../utils/hooks/common/useNextQueryParam";

const ProductSearchForm = () => {
  const searchQuery = useNextQueryParam("query");
  const [inputQuery, setInputQuery] = useState<string>(searchQuery);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: "search", query: { query: inputQuery, page: 1 } });
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
          bgColor="aqua.50"
          borderColor="aqua.1100"
          focusBorderColor="aqua.800"
          _placeholder={{
            color: "gray.500"
          }}
          _focus={{
            bgColor: "aqua.50"
          }}
          _hover={{
            bgColor: "aqua.100"
          }}
        />
        <Button
          padding={10}
          fontSize="xl"
          marginTop={{ base: 5, md: 0 }}
          alignSelf="center"
          sx={useStyleConfig("CustomButton")}
          type="submit"
        >
          Search
          <Icon as={VscArrowRight} marginTop={0.5} marginLeft={2} />
        </Button>
      </Flex>
    </form>
  );
};

export default ProductSearchForm;
