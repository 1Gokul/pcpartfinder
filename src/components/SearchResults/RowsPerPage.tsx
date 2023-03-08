import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  useStyleConfig
} from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";

import { NRowsOptions, NRowsType } from "../../shared/types/SearchResult";

const RowsPerPage = ({
  nRows,
  handleChangeNRows
}: {
  nRows: NRowsType;
  handleChangeNRows: (newNRowsType: NRowsType) => void;
}) => {
  const customButtonStyle = useStyleConfig("CustomButton");
  return (
    <Menu>
      <MenuButton
        as={Button}
        sx={customButtonStyle}
        rightIcon={<GoChevronDown />}
      >
        {nRows} per page
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue="10"
          value={String(nRows)}
          onChange={(value) => handleChangeNRows(parseInt(value as string) as NRowsType)}
          type="radio"
        >
          {NRowsOptions.map((option) => (
            <MenuItemOption
              key={"n-row-option-" + option}
              value={String(option)}
            >
              {option} per page
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default RowsPerPage;
