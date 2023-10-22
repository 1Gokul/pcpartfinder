import { useQuery } from "@tanstack/react-query";

import { ItemDetail } from "../../../types/itemDetail";
import { client } from "../../common/client";

export const useItemDetailQuery = (id: string, enabled: boolean) =>
  useQuery(["itemDetail", id], () => client<ItemDetail>("/item/" + id), {
    enabled
  });
