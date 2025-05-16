import React, { useState } from "react";
import { filterProductsActions } from "../store/filterProducts";
import { useDispatch, useSelector } from "react-redux";

const FilterContent = ({ productType }) => {
  const [priceRange, setPriceRange] = useState(10);
  const [rating, setRating] = useState(5);
  const dispatch = useDispatch();
  const pr = useSelector((state) => state.filterProductReducer.priceRange);
  const rr = useSelector((state) => state.filterProductReducer.rating);

  console.log(productType);

  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(rating, priceRange);

    dispatch(
      filterProductsActions.getFilterValues({
        productType: productType,
        priceRange: priceRange,
        rating: rating,
      })
    );
    
  };
console.log(pr, rr);
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h1 className="">Price ($)</h1>
        <p className="text-[13px] italic text-gray-700 mb-2">
          ...Price range should be a minimum of $10
        </p>
        <span className="flex space-x-4 items-center">
          <input
            type="number"
            value="10"
            readOnly
            className="border px-3 py-1 rounded-md w-24 outline-none"
          />
          <p>-</p>
          <input
            type="number"
            min="10"
            value={priceRange}
            className="border px-3 py-1 rounded-md w-24 outline-none"
            onChange={handlePriceRange}
          />
        </span>
      </div>

      <div className="mt-4">
        <h1 className="">Rating</h1>
        <p className="text-[13px] italic text-gray-700 mb-2">
          ...Rating should be a maximum of 5.0
        </p>
        <span className="flex space-x-4">
          <input
            type="number"
            value="0.1"
            readOnly
            className="border px-3 py-1 rounded-md w-24 outline-none"
          />
          <input
            type="number"
            max="5.0"
            value={rating}
            className="border px-3 py-1 rounded-md w-24 outline-none"
            onChange={handleRatingChange}
          />
        </span>
      </div>
      <input type="submit" />
    </form>
  );
};

export default FilterContent;
