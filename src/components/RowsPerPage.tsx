import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  useStyleConfig
} from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import { NRowsType, SearchParams, NRowsOptions } from "../types/SearchResult";

const RowsPerPage = ({
  n_results,
  nRows,
  handleParamChange
}: {
  n_results: number;
  nRows: NRowsType;
  handleParamChange: (newParams: Partial<SearchParams>) => void;
}) => {
  const customButtonStyle = useStyleConfig("CustomButton");
  return (
    <Menu>
      <MenuButton as={Button} sx={customButtonStyle} rightIcon={<CaretDown />}>
        {nRows} per page
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue="10"
          value={String(nRows)}
          onChange={(value) =>
            handleParamChange({
              nRows: parseInt(value as string) as NRowsType,
              page: Math.min(
                Math.ceil(n_results / parseInt(value as string)),
                Math.ceil(n_results / nRows)
              )
            })
          }
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
