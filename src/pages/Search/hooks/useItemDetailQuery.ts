import { useQuery } from "@tanstack/react-query";

import type { ItemDetail } from "../types/itemDetail";
import { doFetch } from "../../../utils/doFetch";

export const useItemDetailQuery = (id: string, enabled: boolean) =>
  useQuery({
    queryKey: ["itemDetail", id],
    queryFn: async () => {
      const response = await doFetch<ItemDetail>("/item/" + id);
      return {
        ...response,
        priceHistoryChartData: Object.entries(response.priceHistory).map(
          ([date, price]) => ({ date, price })
        )
      };
    },
    enabled
  });
