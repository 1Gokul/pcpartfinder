import { useQuery } from "@tanstack/react-query";
import { doFetch } from "../../../utils/doFetch";

export const useGetActiveStores = () =>
  useQuery({
    queryKey: ["stores"],
    queryFn: async (): Promise<Record<string, string>> => {
      const response = await doFetch<string[]>("/stores");
      console.log("response", response);

      return response.reduce((acc, value) => ({ ...acc, [value]: value.replace(" ", "_") }), {});
    },
  });
