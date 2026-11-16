import { useAtomValue } from "jotai";
import { ClipboardCheck, ClipboardCopy, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
import { createMarkdownTable } from "./utils/markdown";
import { containsProfanity } from "../../utils/profanity";

/**
 * Build publish button will be disabled if the
 * build does not have at least 1 item in a category.
 */
const isBuildComplete = (build: BuildAtomType) =>
  Categories.every((category) => build[category].length > 0);

export function Build() {
  const build = useAtomValue(buildAtom);
  const buildName = useAtomValue(buildNameAtom);
  const [, navigate] = useLocation();
  const createBuild = useCreateBuild();

  const [copied, setCopied] = useState(false);
  const copiedResetTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copiedResetTimeout.current), []);

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

  const handleCopyAsMarkdown = async () => {
    const markdown = createMarkdownTable(build, buildName);

    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      window.clearTimeout(copiedResetTimeout.current);
      copiedResetTimeout.current = window.setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Could not copy the build to your clipboard.");
    }
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

        <button
          type="button"
          className={copyMarkdownButtonStyle}
          onClick={() => void handleCopyAsMarkdown()}
          aria-live="polite"
        >
          {copied ? "Copied!" : "Copy as markdown"}
          {copied ? <ClipboardCheck size={20} strokeWidth={1.5} /> : <ClipboardCopy size={20} strokeWidth={1.5} />}
          
        </button>
      </div>
    </>
  );
}
