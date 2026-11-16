import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { doFetch } from "../../../utils/doFetch";
import type { CreateBuildPayload, PublishedBuild } from "../types/build";

/** Publishes (creates) a build with its name. */
export const useCreateBuild = () =>
  useMutation({
    mutationFn: (payload: CreateBuildPayload) =>
      doFetch<PublishedBuild>("/build", undefined, { body: payload }),
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Could not publish your build.");
    },
  });
