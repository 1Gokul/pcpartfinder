export type PriceRecord = { date: string; price: number };

export type DetailItem = {
  id: string;
  lastFound: string;
  priceHistory: PriceRecord;
  image: string;
};
