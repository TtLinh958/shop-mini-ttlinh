import type { Product } from "../data/products";

// Kiểu thứ tự sắp xếp: "asc" (tăng dần) hoặc "desc" (giảm dần)
export type SortOrder = "asc" | "desc";

// Kiểu điều kiện lọc: Các thuộc tính có dấu ? nghĩa là không bắt buộc
export type ProductFilter = {
  keyword?: string;
  category?: string;
  maxPrice?: number;
  sort?: SortOrder;
};


export function getCategories(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.category))];
}

export function filterProducts(products: Product[], filter: ProductFilter = {}): Product[] {
  const { keyword = "", category, maxPrice, sort } = filter;
  const kw = keyword.trim().toLowerCase();

  const result = products.filter((p) => {
    // Kiểm tra tên sản phẩm có chứa từ khóa không (không phân biệt hoa/thường)
    const matchKeyword = p.name.toLowerCase().includes(kw);

    // Nếu không chọn danh mục thì coi như khớp; nếu có thì phải trùng tên danh mục
    const matchCategory = !category || p.category === category;

    // Nếu không quy định maxPrice thì coi như khớp; nếu có thì giá phải <= maxPrice
    const matchPrice = maxPrice === undefined || p.price <= maxPrice;

    return matchKeyword && matchCategory && matchPrice;
  });

  // Sắp xếp: dùng [...result] để sao chép mảng trước khi sort, tránh làm đổi mảng gốc
  if (sort === "asc") return [...result].sort((a, b) => a.price - b.price);
  if (sort === "desc") return [...result].sort((a, b) => b.price - a.price);

  return result;
}

export function searchByPriceRange(
  products: Product[],
  min: number,
  max: number
): Product[] {
  return products.filter((p) => p.price >= min && p.price <= max);
}

export function groupByCategory(products: Product[]): Record<string, number> {
  return products.reduce<Record<string, number>>((acc, p) => {
    // Nếu danh mục đã có thì cộng 1, chưa có thì gán bằng 1
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
}