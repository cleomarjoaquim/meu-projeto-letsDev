import { FormBasico, FormCompleto, Home, ConsumindoApis } from "./telas";
import {SobrePaipers} from "./telas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./contexto";
import { useEffect, useState } from "react";

function App() {



    
  const [nomeUsuario, setNomeUsuario] = useState<string>();

  useEffect(() => {
    if (!nomeUsuario) {
      let nomeDoLocalStorage = localStorage.getItem("nomeUsuario");
      if (nomeDoLocalStorage) {
        setNomeUsuario(nomeDoLocalStorage);
      } else {
        let nomeInformado = prompt("Qual o seu nome?");
        if (nomeInformado) setNomeUsuario(nomeInformado);
      }
    } else {
      localStorage.setItem("nomeUsuario", nomeUsuario);
    }
  }, [nomeUsuario]);

  return (
    <MyContext.Provider value={{ nomeUsuario, setNomeUsuario }}>
      <BrowserRouter>
        <Routes>

        <Route path="/consumindo-apis" element={<ConsumindoApis />} />
          
          <Route path="/form-basico" element={<FormBasico />} />
          <Route path="/" element={<Home />} />
          <Route path="/form-completo" element={<FormCompleto />} />
          <Route path="/sobre-paipers" element ={<SobrePaipers/>}/>

        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;