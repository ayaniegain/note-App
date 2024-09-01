import React, { createContext, useContext, useState } from "react";

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggleForm = () => {
    setShow(!show);
  };

  return (
    <ShowContext.Provider value={{ show, setShow, toggleForm }}>
      {children}
    </ShowContext.Provider>
  );
};

export const useModelForm = () => {
  return useContext(ShowContext);
};
