import { Link, useParams } from "wouter";
import { useHistoryState } from "wouter/use-browser-location";
import { Categories, CategoryCopies } from "../../constants/categories";
import {
  buildLargePriceStyle,
  buildTableContainerStyle,
  buildTableHeading,
  buildTableStyle,
  starSeparator,
  totalCostStyle,
} from "./BuildTable/BuildTable.css";
import {
  buildViewBackLinkStyle,
  buildViewCategoryHeadingStyle,
  buildViewCategoryStyle,
  buildViewEmptyStyle,
  buildViewItemMetaStyle,
  buildViewItemNameStyle,
  buildViewItemStyle,
  buildViewPriceStyle,
  buildViewStatusStyle,
} from "./BuildView.css";
import { useGetBuild } from "./hooks/useGetBuild";
import type { PublishedBuild } from "./types/build";

const stars = " * ".repeat(100);

export function BuildView() {
  const { id } = useParams<{ id: string }>();
  const historyState = useHistoryState<PublishedBuild | null>();

  // The response from publishing is passed through wouter's navigate state.
  const buildFromState = historyState?.id === id ? historyState : null;

  const { data, isLoading, isError } = useGetBuild(buildFromState ? undefined : id);
  const publishedBuild = buildFromState ?? data;

  if (isLoading) {
    return <p className={buildViewStatusStyle}>Loading build...</p>;
  }

  if (isError || !publishedBuild) {
    return <p className={buildViewStatusStyle}>Could not find that build.</p>;
  }

  const { build } = publishedBuild;

  const total = Categories.reduce(
    (buildTotal, category) =>
      buildTotal + build[category].reduce((categoryTotal, item) => categoryTotal + item.price, 0),
    0,
  );

  return (
    <section className={buildTableContainerStyle}>
      <div className={buildTableStyle}>
        <h1 className={buildTableHeading}>{publishedBuild.name} build.</h1>

        {Categories.map((category) => {
          const items = build[category] ?? [];

          return (
            <section key={category} className={buildViewCategoryStyle}>
              <h2 className={buildViewCategoryHeadingStyle}>{CategoryCopies[category].title}</h2>

              {items.length ? (
                items.map((item) => (
                  <div key={item.id} className={buildViewItemStyle}>
                    <span className={buildViewItemNameStyle}>{item.name}</span>

                    <span className={buildViewItemMetaStyle}>{item.store}</span>

                    <span className={buildViewPriceStyle}>
                      {item.price <= 0 ? "N/A" : `₹${item.price.toLocaleString("en-IN")}`}
                    </span>
                  </div>
                ))
              ) : (
                <p className={buildViewEmptyStyle}>No item in this category.</p>
              )}
            </section>
          );
        })}

        <div className={starSeparator}>{stars}</div>

        <section className={totalCostStyle}>
          <span className="total-title">Total:</span>

          <span className={buildLargePriceStyle}>{"₹" + total.toLocaleString("en-IN")}</span>
        </section>

        <Link to="/build" className={buildViewBackLinkStyle}>
          Back to your build
        </Link>
      </div>
    </section>
  );
}
