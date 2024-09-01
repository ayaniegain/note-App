import React, { createContext, useContext, useState } from 'react';

const EditContext = createContext();

export const useEditItem = () => useContext(EditContext);

export const EditProvider = ({ children }) => {
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (id) => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const itemToEdit = items.find(item => item.id === id);
    setEditItem(itemToEdit);
  };

  return (
    <EditContext.Provider value={{ editItem, handleEdit }}>
      {children}
    </EditContext.Provider>
  );
};
