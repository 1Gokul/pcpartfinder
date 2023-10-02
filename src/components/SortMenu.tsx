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
import { SortType, SearchParams } from "../types/SearchResult";

const SortMenu = ({
  sort,
  handleParamChange
}: {
  sort: SortType;
  handleParamChange: (newParams: Partial<SearchParams>) => void;
}) => {
  const customButtonStyle = useStyleConfig("CustomButton");
  return (
    <Menu>
      <MenuButton as={Button} sx={customButtonStyle} rightIcon={<CaretDown />}>
        {sort === "rel"
          ? "Relevance"
          : (sort === "asc" ? "Ascending" : "Descending") + " price"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue="rel"
          value={sort}
          onChange={(value) => handleParamChange({ sort: value as SortType })}
          type="radio"
        >
          <MenuItemOption value="rel">Relevance</MenuItemOption>
          <MenuItemOption value="asc">Ascending price</MenuItemOption>
          <MenuItemOption value="dsc">Descending price</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SortMenu;
