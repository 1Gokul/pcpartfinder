import { useQuery } from "@tanstack/react-query";

import { ItemDetail } from "../../../types/itemDetail";
import { client } from "../../common/client";


export const useItemDetailQuery = (id: string, enabled: boolean) =>
  useQuery(
    ["itemDetail", id],
    async () => {
      const response = await client<ItemDetail>("/item/" + id);
      return {
        ...response,
        priceHistoryChartData: Object.entries(response.priceHistory).map(
          ([date, price]) => ({ date, price })
        )
      };
    },
    {
      enabled
    }
  );
