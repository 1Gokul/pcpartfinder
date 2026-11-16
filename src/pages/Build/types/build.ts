import type { BuildAtomType } from "../../../types/build";

export type CreateBuildPayload = {
  name: string;
  build: BuildAtomType;
};

/** A build as returned by the API once it has been published. */
export type PublishedBuild = CreateBuildPayload & { id: string };
