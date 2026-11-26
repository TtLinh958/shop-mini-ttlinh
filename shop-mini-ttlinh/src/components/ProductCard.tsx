import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
        {/* Hiện nhãn Hết hàng khi stock bằng 0 */}
        {isOutOfStock && <span className="badge-out-of-stock">Hết hàng</span>}
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        {/* Dùng hàm formatPrice chuẩn của Lab 2 */}
        <p className="product-price">{formatPrice(product.price)}</p>
        <button className="btn" disabled={isOutOfStock}>
          {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}