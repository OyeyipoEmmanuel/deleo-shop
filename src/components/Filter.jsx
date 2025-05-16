import React, { Fragment, useReducer, useState } from "react";
import FilterContent from "./FilterContent";
import { useQuery } from "@tanstack/react-query";

const initialState = {
  menShirtFilter: false,
  menShoeFilter: false,
  menWatchFilter: false,
  womenDressFilter: false,
  womenShoeFilter: false,
  womenWatchFilter: false,
};

const filterReducer = (state, action) => {
  if (action.type === "TOGGLE_FILTER") {
    return { ...initialState, [action.filter]: !state[action.filter] };
  }
  return state;
};

const filterLabels = [
  { key: "menShirtFilter", label: "Men Shirts" },
  { key: "menShoeFilter", label: "Men Shoes" },
  { key: "menWatchFilter", label: "Men Watches" },
  { key: "womenDressFilter", label: "Women Shoe" },
  { key: "womenShoeFilter", label: "Women Dress" },
  { key: "womenWatchFilter", label: "Women Watches" },
];

const Filter = () => {
  const [openFilterTab, setOpenFilterTab] = useState(false);
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const handleFilterTab = () => {
    setOpenFilterTab((prev) => !prev);
  };

  return (
    <main className="mb-8">
      <section>
        <h1
          className="text-xl border-b border-gray-400 flex justify-between py-1 px-3 hover:bg-gray-100 hover:transition-all duration-300 hover:rounded-md cursor-pointer"
          onClick={handleFilterTab}
        >
          Filter <span className="text-lg font-bold ">+</span>
        </h1>

        {openFilterTab && (
          <div className="mt-3 flex flex-col space-y-2">
            {filterLabels.map(({ key, label }) => (
              <Fragment key={key}>
                <p
                  className="w-full flex justify-between py-1 px-3 rounded-sm bg-gray-200"
                  onClick={() =>
                    dispatch({ type: "TOGGLE_FILTER", filter: key })
                  }
                >
                  {label} <span className="text-lg font-bold">+</span>
                </p>
                {state[key] && <FilterContent productType={key}/>}
              </Fragment>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Filter;
