'use client';

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { fetchPosts, updateData } from "../services/product";




export default function page() {
  const [columnFilters, setColumnFilters] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState();

  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", { columnFilters, sortBy, currentPage }],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
  });

  const { mutate } = useMutation({
    mutationFn: updateData,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("blog");
    }


  });

  const handleSubmit = () => {
    mutate(name);
  }

  if (isLoading) return <div className="mx-auto w-fit">Loading...</div>
  if (isError) return <div>Error occurred...</div>


  return (
    <div className="p-4">
      <div>
        <input type="text" placeholder="Search by name" className="p-2 rounded border border-gray-300" onChange={(e) => setName(e.target.value)} />
        <button className="p-2" onClick={handleSubmit}>Add Product</button>
      </div>
      <h1>Filtered Home Posts</h1>
      <button className="bg-green-300 p-3 m-1" onClick={() => { setColumnFilters("pak"); setCurrentPage(1) }}>
        Filter by Pak
      </button>
      <button className="bg-green-300 p-3 m-1" onClick={() => { setColumnFilters("china"); setCurrentPage(1) }}>
        Filter by China
      </button>
      <button className="bg-green-300 p-3 m-1" onClick={() => { setColumnFilters(""); setCurrentPage(1) }}>
        All City
      </button>

      <div className="mb-4 flex items-center gap-x-2 my-2">
        <label>Sort By:</label>
        <select
          className="bg-green-300 rounded p-1"
          value={sortBy}
          onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1) }}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className="flex flex-col justify-between">
        <table className="table-auto border-collapse border border-gray-300 w-full my-3">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Post Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1 + (currentPage - 1) * 10}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item?.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item?.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center my-4">
          <button
            className="bg-gray-300 p-2 rounded"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            className="bg-gray-300 p-2 rounded"
            disabled={data?.length <= 10} // Disable if fewer than pageSize items
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
}
