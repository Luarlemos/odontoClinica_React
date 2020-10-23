import React from "react";
import Header from "./components/Header";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";

function App() {
  return (
    <>
      <Header />
      <main>
        <div>Bem-vindo a nossa clínica</div>
        <Testimony />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}

export default App;
