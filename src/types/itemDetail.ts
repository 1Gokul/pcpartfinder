export type PriceRecord = { date: string; price: number };

export type ItemDetail = {
  lastFound: string;
  priceHistory: PriceRecord;
  image: string;
};
