type Props = {
  shopName?: string;
};

export default function Banner({ shopName = "Shopmini_Ttlinh" }: Props) {
  return (
    <div className="banner">
      <h2>Chào mừng đến với {shopName} 🎉</h2>
      <p>Khám phá các sản phẩm công nghệ & thời trang hiện đại với ưu đãi ngập tràn!</p>
      <button className="banner-btn">Mua ngay</button>
    </div>
  );
}
