import React, { useState, useContext, useRef } from "react";
import { UserContext } from "./UserContext";

const DetailUzivatela = () => {
   const { vybranyUzivatel, setVybranyUzivatel } = useContext(UserContext);
   const [stav, setStav] = useState("");
   const refMenoInput = useRef();

   const ulozitDetaily = async () => {
      if (!vybranyUzivatel) return;

      // Simulácia akcie uloženia s HTTP PATCH požiadavkou
      setStav("Ukladám...");
      const aktualizovanyUzivatel = {
         ...vybranyUzivatel,
         name: refMenoInput.current.value,
      };

      try {
         // Keďže používame zástupnú API, ktorá nepodporuje skutočné aktualizácie,
         // je toto len simulácia. Nahradiť URL vašou skutočnou API adresou.
         const odpoved = await fetch(
            `https://jsonplaceholder.typicode.com/users/${vybranyUzivatel.id}`,
            {
               method: "PATCH", // Metóda by mohla byť tiež 'PUT' v závislosti od vašej API.
               headers: {
                  "Content-type": "application/json; charset=UTF-8", // Určuje obsah
               },
               body: JSON.stringify(aktualizovanyUzivatel),
            }
         );

         if (!odpoved.ok) {
            throw new Error("Nepodarilo sa uložiť dáta.");
         }

         // Po úspešnom 'uložení' aktualizujeme vybraného užívateľa v našom kontexte.
         setVybranyUzivatel(aktualizovanyUzivatel);
         setStav("Úspešne uložené!");
      } catch (chyba) {
         setStav("Uloženie zlyhalo!");
      }
   };

   if (!vybranyUzivatel) return <div>Žiadny vybraný užívateľ</div>;

   return (
      <div>
         <h2>Detaily užívateľa</h2>
         <p>Meno: {vybranyUzivatel.name}</p>
         <p>Email: {vybranyUzivatel.email}</p>
         {/* Formulár pre úpravu detailov */}
         <div>
            <input
               defaultValue={vybranyUzivatel.name}
               ref={refMenoInput}
               type="text"
            />
            <button onClick={ulozitDetaily}>Uložiť</button>
         </div>
         {/* Zobrazenie stavu */}
         {stav && <p>{stav}</p>}
      </div>
   );
};

export default DetailUzivatela;
