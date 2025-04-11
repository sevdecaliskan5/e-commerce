import React from "react";
import HomeHeader from "../layout/HomeHeader";
import HeroCategories from "../components/HeroCategories";
import ProductFilterBar from "../components/ProductFilterBar";
import ProductList from "../components/ProductList";
import Footer from "../layout/Footer";
import AboutClients from "../components/AboutClients";

function ShopPage()  {
  return (
    <div>
      <HomeHeader />
      <HeroCategories />
      <ProductFilterBar />
      <ProductList />
      <AboutClients/>
      <Footer/>
    </div>
  );
};

export default ShopPage;