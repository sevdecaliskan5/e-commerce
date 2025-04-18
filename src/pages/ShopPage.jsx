import React, { useState } from "react";
import HomeHeader from "../layout/HomeHeader";
import HeroCategories from "../components/HeroCategories";
import ProductFilterBar from "../components/ProductFilterBar";
import ProductList from "../components/ProductList";
import Footer from "../layout/Footer";
import AboutClients from "../components/AboutClients";
import ProductHeader from "../components/ProductHeader";
import { AllData } from "../assets/AllData";

function ShopPage() {
  const [layout, setLayout] = useState("grid");
  const [sortOption, setSortOption] = useState("Popularity");
  const [filteredData, setFilteredData] = useState(AllData.productList);


  const sortProducts = (option) => {
    let sorted = [...AllData.productList];
    if (option === "Price") {
      sorted.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    setFilteredData(sorted);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    sortProducts(value);
  };

  return (
    <div>
      <HomeHeader />
      <ProductHeader />
      <HeroCategories />
      <ProductFilterBar
        layout={layout}
        setLayout={setLayout}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />
      <ProductList products={filteredData} layout={layout}/>
      <AboutClients />
      <Footer />
    </div>
  );
}

export default ShopPage;
