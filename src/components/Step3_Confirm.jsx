import React from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Step3_Confirm = ({ selectedAddress, selectedPayment, prevStep }) => {
  const history = useHistory();

  const handleConfirm = () => {
    toast.success("Siparişiniz başarıyla oluşturuldu!", {
      position: "top-right",
      autoClose: 3000,
      className: "toast-success",
    });
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
      Order Summary
      </h2>

      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700">
          <strong>Address:</strong> {selectedAddress?.title}
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong>Payment Method:</strong> {selectedPayment}
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={prevStep}
          className="flex-1 bg-gray-200 text-gray-800 px-5 py-2 rounded-md transition-all duration-300"
        >
          Back
        </button>

        <button
          onClick={handleConfirm}
          className="flex-1 bg-green-600 text-white px-5 py-2 rounded-md transition-all duration-300"
        >
          Confirm Order
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={goHome}
          className="w-full bg-blue-600 text-white px-5 py-2 rounded-md transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Step3_Confirm;
