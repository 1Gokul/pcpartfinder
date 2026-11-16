import { useQuery } from "@tanstack/react-query";
import { doFetch } from "../../../utils/doFetch";
import type { PublishedBuild } from "../types/build";

/** Fetches a published build by id. */
export const useGetBuild = (id: string | undefined) =>
  useQuery({
    queryKey: ["build", id],
    queryFn: ({ signal }) => doFetch<PublishedBuild>(`/build/${id}`, undefined, { signal }),
    enabled: Boolean(id),
  });
