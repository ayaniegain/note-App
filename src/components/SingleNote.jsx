import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function SingleNote({ id, title, content, removeItem, editItem }) {
  const navigate = useNavigate();

  const showDetailsPage = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="px-6 py-2  border-2 border-grey-800 h-40 shadow-xl flex flex-col gap-2 hover:shadow-md hover:shadow-blue-300">
      <h2 className="font-bold text-2xl tracking-wider"> {title}</h2>
      <span className="text-gray-500">{content}</span>
      <section className="flex flex-row justify-between">
        <div className="flex gap-2  ">
          <Button
            btnName={"EDIT"}
            btnBgClr={"bg-yellow-600"}
            btnfunc={() => editItem(id)}
          />
          <Button
            btnName={"DELETE"}
            btnBgClr={"bg-red-600"}
            btnfunc={() => removeItem(id)}
          />
        </div>
        <button className="bg-yellow-300 w-16 h-6 " onClick={showDetailsPage}>
          Details..
        </button>
      </section>
    </div>
  );
}

export default SingleNote;
