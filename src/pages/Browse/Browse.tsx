import { Link, useSearchParams } from "wouter";
import { Categories, CategoryCopies } from "../../constants/categories";
import {
  browseHeadingStyle,
  categoryCardStyle,
  categoryGridStyle,
  categoryMetaStyle,
  categoryNameStyle,
} from "./Browse.css";
import { ResultsList } from "../Search/components/ResultsList/ResultsList";

const categoryIconSize = 32;

export function Browse() {
  const [searchParams] = useSearchParams();
  return (
    <>
      {searchParams.get("category") ? null : (
        <>
          <h1 className={browseHeadingStyle}>Browse categories.</h1>

          <div className={categoryGridStyle}>
            {Categories.map((category) => {
              const { icon: Icon, title } = CategoryCopies[category];
              return (
                <Link
                  key={category}
                  href={`/browse?category=${encodeURIComponent(category)}&page=1`}
                  className={categoryCardStyle}
                >
                  <span className={categoryMetaStyle}>
                    <Icon size={categoryIconSize} />
                  </span>
                  <span className={categoryNameStyle}>{title}</span>
                </Link>
              );
            })}
          </div>
        </>
      )}

      <ResultsList />
    </>
  );
}
