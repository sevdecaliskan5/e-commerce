import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Stepper from "../components/Stepper";
import Step1_Address from "../components/Step1_Address";
import Step2_Payment from "../components/Step2_Payment";
import Step3_Confirm from "../components/Step3_Confirm";

const OrderPage = () => {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const history = useHistory();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white">
        <div className="max-w-[1034px] mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <button
            onClick={() => history.goBack()}
            className="flex items-center font-bold text-base text-[#252B42]"
          >
            <ChevronLeft size={30} className="mr-2 text-[#BDBDBD]" />
          </button>

          <div className="flex items-center space-x-2 text-sm font-bold text-[#737373] mt-4 md:mt-0">
            <NavLink exact to="/" className="text-[#252B42]">
              Home
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
      <Stepper step={step} />
      {step === 1 && (
        <Step1_Address
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2_Payment
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3_Confirm
          selectedAddress={selectedAddress}
          selectedPayment={selectedPayment}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default OrderPage;
