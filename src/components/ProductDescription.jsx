import React, { useState } from "react";
import placeholderImage from "../assets/images/products/pic2.svg"; // Placeholder için SVG

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white w-full px-4 sm:px-8 lg:px-0 max-w-[1040px] mx-auto py-14 text-[#252B42]">
      {/* Tabs */}
      <div className="flex justify-center gap-6 border-b border-[#BDBDBD] pb-6 mb-12 text-sm font-semibold flex-wrap">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 transition-colors ${
            activeTab === "description"
              ? "text-[#23856D] border-b-2 border-[#23856D]"
              : "text-[#737373] hover:text-[#252B42]"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("additional")}
          className={`pb-2 transition-colors ${
            activeTab === "additional"
              ? "text-[#23856D] border-b-2 border-[#23856D]"
              : "text-[#737373] hover:text-[#252B42]"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 flex items-center gap-1 transition-colors ${
            activeTab === "reviews"
              ? "text-[#23856D] border-b-2 border-[#23856D]"
              : "text-[#737373] hover:text-[#252B42]"
          }`}
        >
          Reviews <span className="font-bold">(0)</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Sol: Görsel */}
        <div className="w-full lg:w-[414px] h-[442px] flex justify-center items-center">
          <img
            src={placeholderImage}
            alt="placeholder"
            className="w-full h-full object-contain rounded-md bg-[#FAFAFA] p-2"
          />
        </div>

        {/* Sağ: İçerik */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-[32px]">the quick fox jumps over</h2>
          <div className="flex flex-col gap-4 text-sm font-normal text-[#737373] leading-[24px]">
            {activeTab === "description" && (
              <>
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
              </>
            )}

            {activeTab === "additional" && (
              <>
                <p>Weight: 1.2kg</p>
                <p>Dimensions: 20x30x15cm</p>
                <p>Color: Black, White, Blue</p>
              </>
            )}

            {activeTab === "reviews" && (
              <p>There are no reviews yet. Be the first to review this product!</p>
            )}
          </div>

          {activeTab === "description" && (
            <div className="flex flex-col gap-10 pt-4">
              <div>
                <h3 className="text-2xl font-bold mb-4">Features</h3>
                <ul className="list-disc list-inside text-sm text-[#737373] leading-[24px]">
                  <li>The quick fox jumps over the lazy dog</li>
                  <li>The quick fox jumps over the lazy dog</li>
                  <li>The quick fox jumps over the lazy dog</li>
                  <li>The quick fox jumps over the lazy dog</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Materials</h3>
                <ul className="list-disc list-inside text-sm text-[#737373] leading-[24px]">
                  <li>The quick fox jumps over the lazy dog</li>
                  <li>The quick fox jumps over the lazy dog</li>
                  <li>The quick fox jumps over the lazy dog</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

