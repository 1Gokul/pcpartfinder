import { css } from "@emotion/react";
import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";

import { mq } from "../../styles/styleConfig";
import { Button, Flex, Icon, Input } from "./StyledComponents";

type FormProps = {
  submitQuery: (inputQuery: string) => void;
  isDisabled: boolean;
};

const ProductSearchForm: React.FC<FormProps> = (props) => {
  const [inputQuery, setInputQuery] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.submitQuery(inputQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        margin="1.25rem 0"
        flexDirection="column"
        css={css`
          width: 100%;
          ${mq["md"]} {
            flex-direction: row;
          }
        `}
      >
        <Input
          value={inputQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputQuery(event.target.value)
          }
          required={true}
          placeholder="Search..."
          spellCheck="false"
          disabled={props.isDisabled}
          css={css`
            height: 4rem;
            margin-right: 1.25rem;
            font-size: 2.5rem;
            width: 100%;
            ${mq["md"]} {
              height: 5rem;
              width: 100%;
            }
          `}
        />
        <Button
          type="submit"
          css={css`
            margin-top: 1rem;
            padding: 1.5rem;
            font-size: 1.25rem;
            align-self: center;
            ${mq["md"]} {
              margin-top: 0;
              padding: 1.8rem 2.5rem;
            }
          `}
          disabled={props.isDisabled}
        >
          Search
          <Icon margin="0.125rem 0 0 0.5rem">
            <VscArrowRight />
          </Icon>
        </Button>
      </Flex>
    </form>
  );
};

export default ProductSearchForm;
