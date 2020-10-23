import React from "react";
import Header from "./components/Header";
import Localizacao from "./components/Localizacao"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header/>
      <div>
        Bem-vindo a nossa clínica
      </div>
      <Localizacao/>
      <Footer/>
    </>
  )
}

export default App;
