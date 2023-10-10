import { useQuery } from "@tanstack/react-query";

import { ItemDetailData } from "../../../types/itemDetail";
import { client } from "../../common/client";

export const useItemDetailQuery = (id: string) =>
  useQuery(["itemDetail", id], () => client<ItemDetailData>("/item/" + id));
