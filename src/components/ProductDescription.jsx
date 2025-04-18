import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api/api";
import pic2 from "../assets/images/products/pic2.svg"

export default function ProductDescription() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  return (
    <div className="flex flex-col items-center sm:items-start w-full max-w-6xl mx-auto px-4 py-10 bg-white">
      <div className="flex flex-wrap sm:gap-8 gap-4 mb-6 border-b border-[#BDBDBD] w-full justify-center sm:justify-start">
        <button className="text-[#737373] text-sm font-semibold hover:text-black">
          Description
        </button>
        <button className="text-[#737373] text-sm font-semibold hover:text-black">
          Additional Information
        </button>
        <button className="text-[#737373] text-sm font-semibold hover:text-black flex items-center gap-2">
          Reviews <span className="text-[#23856D] font-bold">(0)</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-12 w-full justify-between">
        {/* Sol Bölüm */}
        <div className="flex flex-col gap-6 sm:w-1/2">
          <h5 className="text-2xl font-bold text-[#252B42]">
            {product?.name || "the quick fox jumps over"}
          </h5>
          <div className="flex flex-col gap-4 text-sm font-normal text-[#737373]">
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
              consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
              consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
              consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div className="flex flex-col gap-10 sm:w-1/2">
          <div>
            <h5 className="font-bold text-2xl text-[#252B42] mb-4">
              Features
            </h5>
            <ul className="flex flex-col gap-2 list-disc list-inside text-sm text-[#737373]">
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-2xl text-[#252B42] mb-4">
              Materials
            </h5>
            <ul className="flex flex-col gap-2 list-disc list-inside text-sm text-[#737373]">
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
