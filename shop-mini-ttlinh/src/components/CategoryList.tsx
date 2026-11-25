type Props = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="category-section">
      <span className="category-label">Danh mục:</span>
      <div className="category-buttons">
        <button
          className={`category-btn ${selectedCategory === "Tất cả" ? "active" : ""}`}
          onClick={() => onSelectCategory("Tất cả")}
        >
          Tất cả
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
