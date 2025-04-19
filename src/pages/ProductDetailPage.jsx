import React from "react";
import ProductCard from "../components/ProductCard";
import ProductDescription from "../components/ProductDescription";
import ProductBestSeller from "../components/ProductBestSeller";
import ProductDetailHeader from "../components/ProductDetailHeader";
import AboutClients from "../components/AboutClients";
import Footer from "../layout/Footer";
import InnerHeader from "../layout/InnerHeader";


const ProductDetailPage = () => {
  return (
    <>
    <InnerHeader/>
      <ProductDetailHeader />
      <ProductCard />
      <ProductDescription />
      <ProductBestSeller />
      <AboutClients />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
