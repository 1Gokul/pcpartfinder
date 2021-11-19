import { Button, Flex, Icon, Input, useStyleConfig } from "@chakra-ui/react";
import { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";

const Form = props => {
  const [inputQuery, setInputQuery] = useState ("");

  const submitQuery = event => {
    event.preventDefault ();
    props.getFormValue (inputQuery);
  };

  return (
    <form onSubmit={submitQuery}>
      <Flex marginY={5} direction={{ base: "column", md: "row" }}>
        <Input
          value={inputQuery}
          onChange={({ target }) => setInputQuery (target.value)}
          isRequired={true}
          isDisabled={props.isDisabled}
          size="xl"
          variant="filled"
          placeholder="Search..."
          border="2px"
          borderColor="gray.400"
          focusBorderColor="cyan.600"
        />
        <Button
          type="submit"
          sx={useStyleConfig ("SearchButton")}
          isDisabled={props.isDisabled}
        >
          Search
          <Icon as={VscArrowRight} marginTop={0.5} marginLeft={2} />
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
