"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("")

  const GetListData = async (sr: string) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${sr}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    setProducts(data.products ?? []);
  };

  const GetCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    setCategories(data ?? []);
  };

  const GetDataByCategory = async (ct: string) => {
    const res = await fetch(`https://dummyjson.com/products/category/${ct}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    setProducts(data?.products ?? []);
  };

  useEffect(() => {
    GetListData("");
    GetCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory !== "") {
      if (selectedCategory !== "default") {
        GetDataByCategory(selectedCategory);
      } else {
        GetListData("");
      }
    }
  }, [selectedCategory]);

  useEffect(() => {
    setTimeout(() => {
      GetListData(search)
    }, 1000)
  }, [search])

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        PRODUCTS
        <div className="mt-[4em]">
          <div className="grid grid-cols-4 gap-4 items-end">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="brand"
                onChange={(e: any) => {
                  setSelectedCategory(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected value={"default"}>
                  Choose a Category
                </option>
                {categories?.map((ct: string, i: number) => (
                  <option value={ct} key={i}>
                    {ct}
                  </option>
                ))}
              </select>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-[40px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  onChange={(e) => { setSearch(e.target.value) }}
                />
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((dt: any, i: number) => (
                  <tr className="bg-white border-b " key={i}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {dt?.title ?? "-"}
                    </th>
                    <td>
                      <img
                        className="w-[115px] h-[115px] object-contain"
                        src={dt?.images[0]}
                      />
                    </td>
                    <td className="px-6 py-4">{dt?.brand ?? "-"}</td>
                    <td className="px-6 py-4">${dt?.price}</td>
                    <td className="px-6 py-4">{dt?.stock} pcs</td>
                    <td className="px-6 py-4">{dt?.category}</td>
                  </tr>
                ))}
                {products?.length === 0 && (
                  <tr>
                    <td>No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
