import React, { useState, useEffect } from "react";
import HomeHeader from "../layout/HomeHeader";
import HeroCategories from "../components/HeroCategories";
import ProductFilterBar from "../components/ProductFilterBar";
import ProductList from "../components/ProductList";
import Footer from "../layout/Footer";
import AboutClients from "../components/AboutClients";
import ProductHeader from "../components/ProductHeader";
import { axiosWithAuth } from "../api/api";
import { ChevronLeft, ChevronRight } from "lucide-react";


function ShopPage() {
  const [layout, setLayout] = useState("grid");
  const [sortOption, setSortOption] = useState("Popularity");
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosWithAuth().get("/products");
        const productsFromAPI = response.data.products;
        setProductData(productsFromAPI);
        setFilteredData(productsFromAPI);
      } catch (error) {
        console.error("API'den ürünler çekilirken hata:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategorySelect = (categoryId) => {
    if (categoryId === "all") {
      setFilteredData(productData);
    } else {
      const filtered = productData.filter(
        (product) => product.category_id === categoryId
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1);
  };

  const sortProducts = (option) => {
    let sorted = [...productData];
    if (option === "Price") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setFilteredData(sorted);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    sortProducts(value);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  return (
    <div>
      <HomeHeader />
      <ProductHeader />
      <HeroCategories onCategorySelect={handleCategorySelect} />
      <ProductFilterBar
        layout={layout}
        setLayout={setLayout}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        totalResults={currentProducts.length}
      />
      <ProductList products={currentProducts} layout={layout} />

      <div className="flex justify-center mt-6">
        <ul className="flex gap-2">
          <li>
          <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
            >
              <ChevronLeft size={24} /> 
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[#23A6F0] text-white"
                    : "bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
          <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
            >
              <ChevronRight size={24} /> 
            </button>
          </li>
        </ul>
      </div>

      <AboutClients />
      <Footer />
    </div>
  );
}

export default ShopPage;
