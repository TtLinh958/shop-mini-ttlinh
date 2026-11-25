import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Banner shopName="Shopmini_Ttlinh" />
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <ProductList title="Sản phẩm nổi bật" items={filteredProducts} />
      </main>
      <Footer />
    </>
  );
}

export default App;
