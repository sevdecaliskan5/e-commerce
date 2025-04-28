import React, { useState, useEffect } from "react";

const fetchCities = async () => {
  const response = await fetch("https://turkiyeapi.dev/api/v1/provinces");
  const data = await response.json();
  return data.data;
};

const fetchDistricts = async (cityId) => {
  const response = await fetch(
    `https://turkiyeapi.dev/api/v1/districts?provinceId=${cityId}`
  );
  const data = await response.json();
  return data.data; 
};

const fetchNeighborhoods = async (districtId) => {
  const response = await fetch(
    `https://turkiyeapi.dev/api/v1/neighborhoods?districtId=${districtId}`
  );
  const data = await response.json();
  return data.data; 
};

const fetchPostalCode = async (neighborhoodId) => {
  const response = await fetch(
    `https://turkiyeapi.dev/api/v1/neighborhoods/${neighborhoodId}`
  );
  const data = await response.json();
  return data.data.zip_code;
};

const Step1_Address = ({ selectedAddress, setSelectedAddress, nextStep }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [postalCode, setPostalCode] = useState("");
  const [addressDescription, setAddressDescription] = useState("");

  useEffect(() => {
    const loadCities = async () => {
      const cityData = await fetchCities();
      setCities(cityData);
    };

    loadCities();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const loadDistricts = async () => {
        const districtData = await fetchDistricts(selectedCity.id);
        setDistricts(districtData);
      };

      loadDistricts();
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedDistrict) {
      const loadNeighborhoods = async () => {
        const neighborhoodData = await fetchNeighborhoods(selectedDistrict.id);
        setNeighborhoods(neighborhoodData);
      };

      loadNeighborhoods();
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedNeighborhood) {
      const loadPostalCode = async () => {
        const postalCodeData = await fetchPostalCode(selectedNeighborhood.id);
        setPostalCode(postalCodeData);
      };

      loadPostalCode();
    }
  }, [selectedNeighborhood]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Address Selection</h2>
      <div className="grid grid-cols-1 gap-4">
        {["Home Address", "Workplace"].map((title, idx) => (
          <div
            key={idx}
            className={`border p-4 rounded-lg cursor-pointer flex justify-between items-center 
              ${
                selectedAddress?.id === idx
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300"
              } 
              hover:border-orange-300 hover:bg-orange-50`}
            onClick={() => setSelectedAddress({ id: idx, title })}
          >
            <span>{title}</span>
          </div>
        ))}
      </div>

      {/* il */}
      <div className="mt-6">
        <label className="block mb-2 text-lg font-medium">Select Province:</label>
        <select
          onChange={(e) =>
            setSelectedCity(
              cities.find((city) => city.id === parseInt(e.target.value))
            )
          }
          value={selectedCity ? selectedCity.id : ""}
          className="border p-2 rounded-lg w-full"
        >
          <option value="">Select Province</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* ilce */}
      {selectedCity && (
        <div className="mt-6">
          <label className="block mb-2 text-lg font-medium">Select District:</label>
          <select
            onChange={(e) =>
              setSelectedDistrict(
                districts.find(
                  (district) => district.id === parseInt(e.target.value)
                )
              )
            }
            value={selectedDistrict ? selectedDistrict.id : ""}
            className="border p-2 rounded-lg w-full"
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* mahalle */}
      {selectedDistrict && (
        <div className="mt-6">
          <label className="block mb-2 text-lg font-medium">
          Select Neighborhood:
          </label>
          <select
            onChange={(e) =>
              setSelectedNeighborhood(
                neighborhoods.find(
                  (neighborhood) => neighborhood.id === parseInt(e.target.value)
                )
              )
            }
            value={selectedNeighborhood ? selectedNeighborhood.id : ""}
            className="border p-2 rounded-lg w-full"
          >
            <option value="">Select Neighborhood</option>
            {neighborhoods.map((neighborhood) => (
              <option key={neighborhood.id} value={neighborhood.id}>
                {neighborhood.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* adres aciklamasi */}
      {selectedNeighborhood && (
        <div className="mt-6">
          <label className="block mb-2 text-lg font-medium">
          Address Description:
          </label>
          <textarea
            value={addressDescription}
            onChange={(e) => setAddressDescription(e.target.value)}
            rows="4"
            className="border p-2 rounded-lg w-full"
            placeholder="Adresinizi buraya girin..."
          ></textarea>
        </div>
      )}

      {/* buton */}
      <button
        onClick={nextStep}
        disabled={
          !selectedAddress ||
          !selectedCity ||
          !selectedDistrict ||
          !selectedNeighborhood ||
          !addressDescription
        }
        className="mt-6 bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Step1_Address;
