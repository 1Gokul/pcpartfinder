import { useQuery } from "@tanstack/react-query";

import { client } from "../../../utils/common/client";
import { ItemDetail } from "../types/itemDetail";

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
