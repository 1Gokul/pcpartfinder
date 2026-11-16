import { useAtomValue } from "jotai";
import { ClipboardCopy, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";
import { buildAtom, buildNameAtom } from "../../atoms/build";
import { Categories } from "../../constants/categories";
import type { BuildAtomType } from "../../types/build";
import { BuildTable } from "./BuildTable/BuildTable";
import {
  buildActionsStyle,
  copyMarkdownButtonStyle,
  publishButtonStyle,
  spinnerStyle,
} from "./Build.css";
import { useCreateBuild } from "./hooks/useCreateBuild";
import { containsProfanity } from "../../utils/profanity";

/**
 * Build publish button will be disabled if the
 * build does not have at least 1 item in a category.
 */
const isBuildComplete = (build: BuildAtomType) =>
  Categories.every((category) => build[category].length > 0);

/**
 * TODO: Build a markdown table out of the given build and copy it to the clipboard.
 * Intentionally a no-op for now.
 */
function createMarkdownTable(_build: BuildAtomType): string {
  return "";
}

export function Build() {
  const build = useAtomValue(buildAtom);
  const buildName = useAtomValue(buildNameAtom);
  const [, navigate] = useLocation();
  const createBuild = useCreateBuild();

  const buildIsComplete = isBuildComplete(build);
  const hasName = buildName.trim().length > 0;

  const nameContainsProfanity = containsProfanity(buildName);
  const publishDisabledReason = !hasName
    ? "Give your build a name before publishing."
    : nameContainsProfanity
      ? "Remove profanity from the build name before publishing."
      : !buildIsComplete
        ? "Add an item to every category before publishing."
        : undefined;

  const handlePublish = () => {
    createBuild.mutate(
      { name: buildName.trim(), build },
      {
        onSuccess: (publishedBuild) => {
          toast.success("Build published!");
          navigate(`/build/${publishedBuild.id}`, { state: publishedBuild });
        },
      },
    );
  };

  const handleCopyAsMarkdown = () => {
    void createMarkdownTable(build);
  };

  return (
    <>
      <BuildTable />

      <div className={buildActionsStyle}>
        <button
          type="button"
          className={publishButtonStyle}
          onClick={handlePublish}
          disabled={Boolean(publishDisabledReason) || createBuild.isPending}
          title={publishDisabledReason}
          aria-busy={createBuild.isPending}
        >
          {createBuild.isPending ? "Publishing..." : "Publish build"}
          {createBuild.isPending ? (
            <Loader2 className={spinnerStyle} size={20} strokeWidth={1.5} />
          ) : (
            <Send size={20} strokeWidth={1.5} />
          )}
        </button>

        <button type="button" className={copyMarkdownButtonStyle} onClick={handleCopyAsMarkdown}>
          Copy as markdown
          <ClipboardCopy size={20} strokeWidth={1.5} />
        </button>
      </div>
    </>
  );
}
