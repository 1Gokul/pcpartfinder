import { PriceHistoryPoint } from "../../types/itemDetail";

export const getPriceLimits = (
  data: PriceHistoryPoint[] | Record<string, PriceHistoryPoint[]>
) => {
  let priceArray = [];

  if (Array.isArray(data)) {
    priceArray = data.map((item) => item.price);
  } else {
    priceArray = Object.values(data)
      .flat()
      .map((item) => item.price);
  }

  return {
    max: Math.max(...priceArray),
    min: Math.min(...priceArray)
  };
};

export const getFormattedDate = (dateString: string) =>
  new Date(dateString)
    .toLocaleString("en-in", {
      year: "2-digit",
      month: "short",
      day: "2-digit"
    })
    .replaceAll("-", " ");
