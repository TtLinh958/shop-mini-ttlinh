export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} ShopMini_Ttlinh · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 0000 · Email: ttlinh_hotro@shopmini.vn</p>
      </div>
    </footer>
  );
}