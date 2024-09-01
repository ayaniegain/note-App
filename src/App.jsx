import React from "react";
import NavBar from "./components/NavBar";
import NoteContainer from "./components/NoteContainer";
import ModelForm from "./components/ModelForm";

import { useModelForm } from "./context/ShowProvider";

function App() {
  const { show } = useModelForm();
  return (
    <>
      {show ? (
        <section>
          <ModelForm />
        </section>
      ) : (
        <section className="mx-auto my-10 border-4 border-grey-500 h-[700px] w-[900px]">
          <NavBar />
          <NoteContainer />
        </section>
      )}
    </>
  );
}

export default App;
