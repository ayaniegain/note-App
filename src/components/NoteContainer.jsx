import React, { useEffect, useState } from "react";
import ShimmerEffect from "./ShimmerEffect";
import { useEditItem } from "../context/EditItem";
import { useModelForm } from "../context/ShowProvider";
import SingleNote from "./SingleNote";

function NoteContainer() {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { handleEdit } = useEditItem();
  const { setShow } = useModelForm();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const editItem = (id) => {
    handleEdit(id);
    setShow(true);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleItems = showAll ? items : items.slice(0, 2);

  return (
    <div className="mx-10 mt-10 h-[580px]">
      {items.length > 0 ? (
        <>
          <div className="overflow-y-auto max-h-80"> 
            {visibleItems.map((e) => (
              <SingleNote
                key={e.id}
                id={e.id}
                title={e.title}
                content={e.content}
                removeItem={removeItem}
                editItem={editItem}
              />
            ))}
          </div>
          <div className="text-center mt-4">
            {items.length > 2 && (
              <button
                onClick={toggleShowAll}
                className="bg-blue-600 px-4 py-2 text-white rounded-md"
              >
                {showAll ? "Show Less" : "Show All"}
              </button>
            )}
          </div>
        </>
      ) : (
        <div>
          <p className="text-center text-orange-700">-Add item to Note-</p>
          <ShimmerEffect />
        </div>
      )}
    </div>
  );
}

export default NoteContainer;
