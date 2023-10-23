import React, { useState } from "react";

// Custom Hook: useForm
function useForm(pociatocneHodnoty, validacia) {
   const [hodnoty, setHodnoty] = useState(pociatocneHodnoty);
   const [chyby, setChyby] = useState({});

   const zmenaHodnoty = (e) => {
      const { name, value } = e.target;
      setHodnoty({
         ...hodnoty,
         [name]: value,
      });
   };

   const odovzdanieFormulára = (e) => {
      e.preventDefault();
      const validacneChyby = validacia(hodnoty);
      setChyby(validacneChyby);
      if (Object.keys(validacneChyby).length === 0) {
         alert("Formulár odoslaný!");
      }
   };

   return {
      zmenaHodnoty,
      odovzdanieFormulára,
      hodnoty,
      chyby,
   };
}

// Simple Form Validation
function validacia(hodnoty) {
   let chyby = {};

   if (!hodnoty.meno || hodnoty.meno.length < 3) {
      chyby.meno = "Meno musí mať aspoň 3 znaky";
   }

   const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   if (!regexEmail.test(hodnoty.email)) {
      chyby.email = "Neplatný formát emailu";
   }

   return chyby;
}

// Sample React Component
function KontaktFormular({ aktualizovatZobrazenie }) {
   const { zmenaHodnoty, odovzdanieFormulára, hodnoty, chyby } = useForm(
      { meno: "", email: "" },
      validacia
   );

   const finalneOdovzdanie = (e) => {
      odovzdanieFormulára(e);
      if (Object.keys(chyby).length === 0 && hodnoty.meno && hodnoty.email) {
         aktualizovatZobrazenie(hodnoty);
      }
   };

   return (
      <form onSubmit={finalneOdovzdanie}>
         <input
            name="meno"
            value={hodnoty.meno}
            onChange={zmenaHodnoty}
            placeholder="Meno"
         />
         {chyby.meno && <p>{chyby.meno}</p>}

         <input
            name="email"
            value={hodnoty.email}
            onChange={zmenaHodnoty}
            placeholder="Email"
         />
         {chyby.email && <p>{chyby.email}</p>}

         <button type="submit">Odoslať</button>
      </form>
   );
}

// Main Application Component
function App() {
   const [zobrazeneData, setZobrazeneData] = useState({ meno: "", email: "" });

   const aktualizovatZobrazenie = (data) => {
      setZobrazeneData(data);
   };

   return (
      <div className="App">
         <h1>Kontakt Formulár</h1>
         <KontaktFormular aktualizovatZobrazenie={aktualizovatZobrazenie} />
         {zobrazeneData.meno && <p>Meno: {zobrazeneData.meno}</p>}
         {zobrazeneData.email && <p>Email: {zobrazeneData.email}</p>}
      </div>
   );
}

export default App;
