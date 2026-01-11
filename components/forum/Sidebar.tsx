import Link from "next/link";
import { CATEGORY, TAG } from "@/lib/constants/forum";

export const ForumSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-3">
          Categories
        </h3>

        <ul className="space-y-2 text-sm">
          {CATEGORY.map((category) => (
            <li key={category.value}>
              <Link
                href={`/forum/category/${category.value}`}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-3">
          Popular tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {TAG.map((tag) => (
            <Link
              key={tag.value}
              href={`/forum/tag/${tag.value}`}
              className="
                px-3 py-1 text-xs rounded-full
                bg-[#C69DD215]
                text-[#C69DD2]
                hover:bg-[#C69DD230]
                transition-colors
              "
              aria-label={`View threads tagged ${tag.label}`}
            >
              #{tag.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
