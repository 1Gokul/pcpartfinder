import React, { useState } from "react";
import { Button, Flex, Icon, Input, useStyleConfig } from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";

interface FormProps {
  submitQuery: (inputQuery: string) => void;
  isDisabled: boolean;
}

const ProductSearchForm: React.FC<FormProps> = (props) => {
  const [inputQuery, setInputQuery] = useState<string>("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitQuery(inputQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex marginY={5} direction={{ base: "column", md: "row" }} width="100%">
        <Input
          value={inputQuery}
          onChange={({ target }) => setInputQuery(target.value)}
          isRequired={true}
          isDisabled={props.isDisabled}
          size="xl"
          marginRight={5}
          variant="filled"
          placeholder="Search..."
          border="2px"
          borderColor="gray.400"
          focusBorderColor="cyan.600"
        />
        <Button
          type="submit"
          padding={10}
          fontSize="xl"
          marginTop={{ base: 5, md: 0 }}
          alignSelf="center"
          sx={useStyleConfig("CustomButton")}
          isDisabled={props.isDisabled}
        >
          Search
          <Icon as={VscArrowRight} marginTop={0.5} marginLeft={2} />
        </Button>
      </Flex>
    </form>
  );
};

export default ProductSearchForm;
