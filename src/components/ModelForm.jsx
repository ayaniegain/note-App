import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useModelForm } from "../context/ShowProvider";
import { useEditItem } from "../context/EditItem";

function ModelForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { show, setShow } = useModelForm();
  const { editItem, handleEdit } = useEditItem();

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setContent(editItem.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editItem, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("items")) || [];

    if (editItem) {
      // Update existing item
      const updatedData = existingData.map((item) =>
        item.id === editItem.id ? { ...item, title, content } : item
      );
      localStorage.setItem("items", JSON.stringify(updatedData));
    } else {
      // Add new item
      const newEntry = { id: uuidv4(), title, content };
      const updatedData = [...existingData, newEntry];
      localStorage.setItem("items", JSON.stringify(updatedData));
    }

    setTitle("");
    setContent("");
    handleEdit(null);
    setShow(false);
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    handleEdit(null);
    setShow(false);
  };

  return (
    <section className="mx-auto my-10 border-4 border-grey-500 h-[700px] w-[900px] relative flex justify-center items-center">
      <div className="absolute inset-0 bg-gray-200 opacity-10 z-10"></div>
      <form
        className="flex flex-col items-start justify-center gap-4 h-[400px] w-[500px] bg-blue-100 relative z-20 p-6"
        onSubmit={handleSubmit}
      >
        <label className="text-2xl w-full">Title:</label>
        <input
          type="text"
          name="title"
          className="w-full h-8 p-2"
          placeholder="Title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="text-2xl w-full">Content:</label>
        <input
          type="text"
          name="content"
          className="w-full h-16 p-2"
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <div className="flex gap-4 w-full mt-4">
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 text-white rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-orange-600 px-4 py-2 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default ModelForm;
