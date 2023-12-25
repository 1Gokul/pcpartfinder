export type PriceRecord = Record<string, number>;

export type PriceHistoryPoint = { date: string; price: number };

export type ItemDetail = {
  lastFound: string;
  priceHistory: PriceRecord;
  priceHistoryChartData: PriceHistoryPoint[];
  image: string;
};
