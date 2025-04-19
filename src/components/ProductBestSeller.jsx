import React from "react";
import { AllData } from "../assets/AllData";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ShoppingCart, Heart } from "lucide-react";

const BestSeller = () => {
  const bestsellers = AllData.bestsellerProducts;

  return (
    <div className="bg-[#FAFAFA] py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-[1049px] mx-auto">
          <h3 className="text-[#252B42] text-[24px] font-bold mb-4">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="border-[#ECECEC]" />
          <div className="h-6" /> {/* hr altı boşluk */}
        </div>

        <div className="max-w-[1049px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {bestsellers.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-none rounded-xl border border-[#E6E6E6] hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="relative w-full h-[250px] bg-white">
                <img
                  src={product.src}
                  alt={product.heading}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 p-1 rounded-full border border-[#E6E6E6] bg-white text-[#737373] hover:text-pink-500 transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              <CardBody className="px-4 py-4">
                <Typography
                  variant="small"
                  className="text-[#737373] font-medium text-[13px] mb-1"
                >
                  {product.department}
                </Typography>

                <Typography
                  variant="h6"
                  className="text-[#252B42] font-semibold text-[16px] mb-2 leading-snug"
                >
                  {product.heading}
                </Typography>

                <div className="flex items-center gap-2">
                  <span className="text-[#BDBDBD] line-through font-medium text-sm">
                    {product.price2}
                  </span>
                  <span className="text-[#23856D] font-bold text-[15px]">
                    {product.price1}
                  </span>
                </div>
              </CardBody>

              <CardFooter className="flex justify-center pb-4 px-4">
                <button className="p-2 rounded-full border border-[#E6E6E6] text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;


