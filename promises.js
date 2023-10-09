import React, { useState, useEffect } from 'react';

// Simulovaná asynchrónna funkcia s Promise
function ziskajData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Ján", "Peter", "Anna"]);
            // reject(new Error("Chyba pri načítavaní dát!"));
        }, 2000);  // Simulujeme oneskorenie siete
    });
}

// React komponent, ktorý využíva Promise na načítanie dát
function ZoznamUzivatelov() {
    const [data, setData] = useState(null);
    const [chyba, setChyba] = useState(null);

    useEffect(() => {
        ziskajData()
            .then(response => {
                setData(response);
            })
            .catch(error => {
                setChyba(error.message);
            });
    }, []);

    if (chyba) {
        return <div>Chyba: {chyba}</div>;
    }

    if (!data) {
        return <div>Načítavam...</div>;
    }

    return (
        <ul>
            {data.map(uzivatel => <li key={uzivatel}>{uzivatel}</li>)}
        </ul>
    );
}

function App() {
    return (
        <div>
            <h1>Užívatelia:</h1>
            <ZoznamUzivatelov />
        </div>
    );
}

export default App;
