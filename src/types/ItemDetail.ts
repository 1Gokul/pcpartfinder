export type ItemDetailData = {
  id: string;
  name: string;
  store: string;
  price: number;
  last_found: string;
  category: string;
  price_history: Record<string, number>;
  image: string | null;
  url: string;
};
