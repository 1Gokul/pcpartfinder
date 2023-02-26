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

import { SortType } from "../../shared/types/SearchResult";

const SortMenu = ({
  sort,
  handleChangeSort
}: {
  sort: SortType;
  handleChangeSort: (newSortType: SortType) => void;
}) => {
  const customButtonStyle = useStyleConfig("CustomButton");
  return (
    <Menu>
      <MenuButton
        as={Button}
        sx={customButtonStyle}
        rightIcon={<GoChevronDown />}
      >
        {sort === "rel"
          ? "Relevance"
          : (sort === "asc" ? "Ascending" : "Descending") + " price"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue="rel"
          value={sort}
          onChange={(value) => handleChangeSort(value as SortType)}
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
