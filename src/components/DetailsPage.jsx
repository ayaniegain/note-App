import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

function DetailsPage() {
  const { id } = useParams();

  const items = JSON.parse(localStorage.getItem("items")) || [];
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div className="text-center text-red-500 mt-10">Item not found</div>;
  }

  return (
    <>
      <div className="m-4">
        <Link
          to={"/"}
          className="  bg-blue-500 text-white px-3 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        >
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <p className="text-center text-xl text-green-500">Task details Page</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {item.content}
        </p>
      </div>
    </>
  );
}

export default DetailsPage;
