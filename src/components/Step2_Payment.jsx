import React, { useState } from "react";

const Step2_Payment = ({
  selectedPayment,
  setSelectedPayment,
  nextStep,
  prevStep,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const options = ["Credit Card", "Cash on Delivery", "Bank Transfer"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      <div className="grid grid-cols-1 gap-4">
        {options.map((method, idx) => (
          <div
            key={idx}
            className={`border p-4 rounded-lg cursor-pointer 
              ${
                selectedPayment === method
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300"
              }`}
            onClick={() => setSelectedPayment(method)}
          >
            {method}
          </div>
        ))}
      </div>

      {/* kredi karti */}
      {selectedPayment === "Credit Card" && (
        <div className="mt-6">
          <label className="block mb-2 text-lg font-medium">Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border p-2 rounded-lg w-full"
            placeholder="Card Number"
          />
          <label className="block mt-4 mb-2 text-lg font-medium">
            Expiration Date:
          </label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="border p-2 rounded-lg w-full"
            placeholder="MM/YY"
          />
          <label className="block mt-4 mb-2 text-lg font-medium">CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border p-2 rounded-lg w-full"
            placeholder="CVV"
          />
        </div>
      )}

      {/* kapida odeme */}
      {selectedPayment === "Cash on Delivery" && (
        <div className="mt-6 text-lg font-medium">
          You have selected cash on delivery. Card details are not required.
        </div>
      )}

      {/* havale */}
      {selectedPayment === "Bank Transfer" && (
        <div className="mt-6 text-lg font-medium">
          You have selected bank transfer. Please use your bank's transfer
          details to make the payment.
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-black px-6 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={
            !selectedPayment ||
            (selectedPayment === "Kredi Kartı" &&
              (!cardNumber || !expiryDate || !cvv))
          }
          className="bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-50"
        >
          Proceed to confirm the order
        </button>
      </div>
    </div>
  );
};

export default Step2_Payment;
