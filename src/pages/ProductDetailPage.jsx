import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductDescription from "../components/ProductDescription";
import ProductBestSeller from "../components/ProductBestSeller";
import ProductDetailHeader from "../components/ProductDetailHeader";
import AboutClients from "../components/AboutClients";
import Footer from "../layout/Footer";
import InnerHeader from "../layout/InnerHeader";
import axios from "axios";


const ProductDetailPage = () => {

  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${id}`);
        setProduct(response.data); 
      } catch (error) {
        console.error("Ürün bilgisi alınırken hata oluştu:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    <InnerHeader/>
      <ProductDetailHeader />
      <ProductCard product={product} />
      <ProductDescription />
      <ProductBestSeller />
      <AboutClients />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
