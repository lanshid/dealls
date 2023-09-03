"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [detailData, setDetailData] = useState<any>();

  const GetListData = async () => {
    const res = await fetch(`https://dummyjson.com/carts`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    setProducts(data?.carts[0]?.products ?? []);
    setDetailData(data?.carts[0]);
  };

  useEffect(() => {
    GetListData();
  }, []);

  const GetDate = () => {
    const currentDate = new Date();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;


    return formattedDate
  };

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        CARTS
        <div className="mt-[4em]">
          Details
          <table className="bg-gray-200 w-100 rounded-md">
            <tr>
              <td className="p-2">User: {detailData?.userId ?? "-"}</td>
              <td className="p-2">
                #of items: {detailData?.totalProducts ?? 0}
              </td>
            </tr>
            <tr>
              <td className="p-2">Added On: {GetDate()}</td>
              <td className="p-2">Total Amount: ${detailData?.discountedTotal}</td>
            </tr>
          </table>
          <div className="relative overflow-x-auto mt-4">
            Products
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount Percent
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((dt: any, i: number) => (
                  <tr className="bg-white border-b " key={i}>
                    <th
                      scope="row"
                      className="px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      {dt?.title ?? "-"}
                    </th>
                    <td
                      scope="row"
                      className="px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      ${dt?.price}
                    </td>
                    <td className="px-6 py-4">{dt?.quantity ?? "-"}</td>
                    <td className="px-6 py-4">${dt?.total}</td>
                    <td className="px-6 py-4 font-bold">
                      ${dt?.discountedPrice}
                    </td>
                    <td className="px-6 py-4">{dt?.discountPercentage}%</td>
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

export default Cart;
