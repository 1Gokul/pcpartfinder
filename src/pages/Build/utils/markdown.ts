import { Categories, CategoryCopies } from "../../../constants/categories";
import type { BuildAtomType } from "../../../types/build";

/** Inline code keeps the digits monospace and the price column aligned. */
const formatPrice = (price: number) =>
  price <= 0 ? "`N/A`" : `\`₹${price.toLocaleString("en-IN")}\``;

/** Pipes and line breaks would break out of a markdown table cell. */
const escapeCell = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/\|/g, "\\|").replace(/\r?\n/g, " ");

/**
 * Vertical padding
 */
const spacerRow = "| &nbsp; |  |  |  |";

/** A category with more than one item gets vertical spacing  */
const spacingRow = (itemCount: number) => (itemCount > 1 ? [spacerRow] : []);

const createItemRow = (
  item: BuildAtomType[(typeof Categories)[number]][number],
  categoryLabel = "",
) =>
  `| ${categoryLabel} | [${escapeCell(item.name)}](${item.link}) | ${escapeCell(item.store)} | ${formatPrice(item.price)} |`;

const createCategoryRows = (category: (typeof Categories)[number], build: BuildAtomType) => {
  const items = build[category];
  const label = CategoryCopies[category].title;

  if (!items.length) {
    return [`| ${label} | _No item in this category._ | — | — |`];
  }

  return items.map((item, index) => createItemRow(item, index === 0 ? label : ""));
};

/**
 * Build a markdown document out of the given build, suitable for
 * sharing on forums, Reddit or pasting into a notes app.
 */
export function createMarkdownTable(build: BuildAtomType, buildName?: string): string {
  const title = buildName?.trim();
  const total = Object.values(build)
    .flat()
    .reduce((sum, item) => sum + (item?.price ?? 0), 0);

  const rows = Categories.flatMap((category) => [
    ...spacingRow(build[category].length),
    ...createCategoryRows(category, build),
    ...spacingRow(build[category].length),
  ]);

  return [
    title ? `# ${title} build` : "# My PC build",
    "",
    "| Category | Component | Store | Price |",
    "| --- | --- | --- | --- |",
    ...rows,
    "",
    "---",
    "",
    `**Total: ${formatPrice(total)}**`,
    "",
  ].join("\n");
}
