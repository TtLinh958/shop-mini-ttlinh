// Chạy thử file này bằng lệnh: node playground/es6.ts

// 1. let / const (const: hằng số không thể gán lại; let: biến có thể thay đổi giá trị)
const shopName = "ShopMini";
let visitCount = 0;
visitCount += 1;

// 2. Template string (dùng dấu backtick ` để chèn biến vào chuỗi bằng cú pháp ${})
console.log(`Chào mừng đến ${shopName}! Lượt xem: ${visitCount}`);

// 3. Arrow function & tham số mặc định (percent mặc định là 10 nếu không truyền)
const discount = (price: number, percent = 10) => price - (price * percent) / 100;
console.log("Giá sau giảm:", discount(200000), discount(200000, 25));

// 4. Destructuring (Phân rã lấy nhanh thuộc tính từ đối tượng hoặc phần tử từ mảng)
const product = { id: 1, name: "Áo thun", price: 150000, tags: ["mới", "hot"] };
const { name: productName, price } = product; // đổi tên name thành productName
const [firstTag] = product.tags;              // lấy phần tử đầu tiên của mảng tags
console.log(productName, price, firstTag);

// 5. Spread operator (...) (Sao chép và ghi đè thuộc tính, KHÔNG làm sửa đối tượng ban đầu)
const updated = { ...product, price: 120000 };
console.log(product.price, "->", updated.price);
const moreTags = [...product.tags, "giảm giá"];
console.log(moreTags);

// 6. Rest parameter (...numbers gom nhiều đối số truyền vào thành một mảng)
const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
console.log("Tổng:", sum(1, 2, 3, 4));

// 7. Các hàm mảng thông dụng: map, filter, find, reduce
const prices = [150000, 420000, 690000, 185000];
const vnd = prices.map((p) => p.toLocaleString("vi-VN") + " đ"); // Biến đổi từng phần tử
const cheap = prices.filter((p) => p < 300000);                   // Lọc các phần tử thỏa điều kiện
const firstExpensive = prices.find((p) => p > 400000);            // Tìm phần tử đầu tiên thỏa điều kiện
const total = prices.reduce((acc, p) => acc + p, 0);             // Tính tổng tích lũy
console.log({ vnd, cheap, firstExpensive, total });

// 8. Optional chaining (?.) và Nullish coalescing (??)
// ?. : nếu thuộc tính phía trước tồn tại mới truy cập tiếp, tránh lỗi văng app
// ?? : lấy giá trị mặc định phía sau nếu giá trị phía trước là null hoặc undefined
type User = { name: string; address?: { city?: string } };
const guest: User = { name: "Khách" };
console.log(guest.address?.city ?? "Chưa có địa chỉ");

// 9. Promise và async/await (Xử lý các tác vụ bất đồng bộ như gọi API tải dữ liệu)
const fakeFetchProducts = (): Promise<string[]> =>
  new Promise((resolve) => setTimeout(() => resolve(["Áo thun", "Quần jean"]), 500));

async function main() {
  console.log("Đang tải sản phẩm...");
  const names = await fakeFetchProducts();
  console.log("Đã tải:", names);
}

main();