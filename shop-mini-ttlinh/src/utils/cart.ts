// src/utils/cart.ts
import type { Product } from "../data/products";

// Kiểu dữ liệu một món hàng trong giỏ: gồm sản phẩm và số lượng mua
export type CartItem = {
  product: Product;
  quantity: number;
};

/**
 * 1. Thêm sản phẩm vào giỏ hàng
 * - Nếu sản phẩm đã có: tăng thêm số lượng
 * - Nếu sản phẩm chưa có: thêm mới vào cuối giỏ
 */
export function addToCart(cart: CartItem[], product: Product, quantity = 1): CartItem[] {
  const existing = cart.find((item) => item.product.id === product.id);

  if (existing) {
    // Dùng map để tạo mảng mới, chỉ cập nhật quantity của đúng sản phẩm đó
    return cart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }

  // Nếu chưa có, dùng toán tử spread [...] để thêm món mới vào cuối mảng
  return [...cart, { product, quantity }];
}

/**
 * 2. Xóa sản phẩm khỏi giỏ hàng theo productId
 */
export function removeFromCart(cart: CartItem[], productId: number): CartItem[] {
  // Giữ lại những món có id khác productId cần xóa
  return cart.filter((item) => item.product.id !== productId);
}

/**
 * 3. Cập nhật số lượng của một sản phẩm
 * - Nếu số lượng <= 0 thì tự động xóa món đó ra khỏi giỏ
 */
export function updateQuantity(cart: CartItem[], productId: number, quantity: number): CartItem[] {
  if (quantity <= 0) {
    return removeFromCart(cart, productId);
  }

  return cart.map((item) =>
    item.product.id === productId ? { ...item, quantity } : item
  );
}

/**
 * 4. Đếm tổng số lượng món đồ trong giỏ hàng (dùng hàm reduce)
 */
export function countItems(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * 5. Tính tổng số tiền của giỏ hàng (giá * số lượng)
 */
export function calcTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}