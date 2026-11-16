import { RegExpMatcher, englishDataset, englishRecommendedTransformers } from "obscenity";

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});

/** Returns true when the text contains a known profane term. */
export const containsProfanity = (text: string) => matcher.hasMatch(text);
