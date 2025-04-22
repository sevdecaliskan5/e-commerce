import ProductDetailHeader from "../components/ProductDetailHeader";
import HeroCategories from "../components/HeroCategories"
import ProductFilterBar from "../components/ProductFilterBar";
import AboutClients from "../components/AboutClients";

const ProductListPage = () => {
  return (
    <>
      <ProductDetailHeader />
      <HeroCategories />
      <ProductFilterBar/>
      <AboutClients />
    </>
  );
};
export default ProductListPage;