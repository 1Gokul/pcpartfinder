import { Link } from "wouter";
import { Categories, CategoryCopies } from "../../constants/categories";
import {
  browseContainerStyle,
  browseHeadingStyle,
  categoryCardStyle,
  categoryGridStyle,
  categoryMetaStyle,
  categoryNameStyle,
} from "./Browse.css";

const categoryIconSize = 32;

export function Browse() {
  return (
    <div className={browseContainerStyle}>
      <h1 className={browseHeadingStyle}>Browse categories.</h1>

      <div className={categoryGridStyle}>
        {Categories.map((category) => {
          const { icon: Icon, title } = CategoryCopies[category];
          return (
            <Link
              key={category}
              href={`/search?category=${encodeURIComponent(category)}&page=1`}
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
    </div>
  );
}
