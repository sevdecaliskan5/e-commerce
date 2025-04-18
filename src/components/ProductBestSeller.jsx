import React from "react";
import { AllData } from "../assets/AllData";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const BestSeller = () => {
  const bestsellers = AllData.bestsellerProducts;

  return (
    <div className="bg-[#FAFAFA] py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="text-[#252B42] text-3xl font-bold mb-12 text-center">
          BESTSELLER PRODUCTS
        </h3>

        <div className="max-w-[1049px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {bestsellers.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-none rounded-none border border-[#E6E6E6]"
            >
              <div className="w-full h-[250px] bg-white">
                <img
                  src={product.src}
                  alt={product.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardBody className="px-6 py-4">
                <Typography
                  variant="small"
                  className="text-[#737373] font-medium text-sm mb-1"
                >
                  {product.department}
                </Typography>

                <Typography
                  variant="h6"
                  className="text-[#252B42] font-semibold text-xl mb-2"
                >
                  {product.heading}
                </Typography>

                <div className="flex items-center gap-2">
                  <span className="text-[#BDBDBD] line-through font-medium text-base">
                    {product.price2}
                  </span>
                  <span className="text-[#23856D] font-bold text-lg">
                    {product.price1}
                  </span>
                </div>
              </CardBody>

              <CardFooter className="flex justify-center pb-6 px-6">
                <Button
                  ripple={false}
                  fullWidth
                  className="bg-[#23A6F0] text-white text-sm rounded-full py-2 hover:bg-[#1e90d6] transition-colors"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
