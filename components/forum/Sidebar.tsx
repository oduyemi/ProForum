import Link from "next/link";



const categories = ["career", "backend", "frontend", "mindset"];
const tags = ["growth", "mentorship", "system-design"];




export const ForumSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-3">
          Categories
        </h3>
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/forum/category/${cat}`}
                className="text-gray-400 hover:text-yellow-400"
              >
                {cat}
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
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/forum/tag/${tag}`}
              className="
                px-3 py-1 text-xs rounded-full
                bg-[#C69DD215]
                text-[#C69DD2]
                hover:bg-[#C69DD230]
              "
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
