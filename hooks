import React, { useState, useEffect, useContext, useRef, createContext } from 'react';

// useState
function Pocitadlo() {
    const [pocet, setPocet] = useState(0);

    return (
        <div>
            <p>Počet kliknutí: {pocet}</p>
            <button onClick={() => setPocet(pocet + 1)}>Kliknite ma</button>
        </div>
    );
}

// useEffect
function InformacieOUzivatelovi({ uzivatelId }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${uzivatelId}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Došlo k chybe pri načítaní dát", error));

        return () => {
            // Potrebné čistenie (ak je potrebné)
        };
    }, [uzivatelId]);

    return (
        <div>
            {data ? <div>Meno: {data.name}</div> : 'Načítavam...'}
        </div>
    );
}

// useContext & Context API
const TémaKontext = createContext('svetlo');

function TlačidloSTémou() {
    const tema = useContext(TémaKontext);
    return <button style={{ background: tema === 'svetlo' ? '#eee' : '#000' }}>Tlačidlo s témou</button>;
}

// useRef
function VstupRef() {
    const vstupEl = useRef(null);

    const naFokus = () => {
        vstupEl.current.focus();
    };

    return (
        <div>
            <input ref={vstupEl} type="text" />
            <button onClick={naFokus}>Zameriť sa na vstup</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Pocitadlo />
            <InformacieOUzivatelovi uzivatelId={1} />
            <TémaKontext.Provider value="tmavé">
                <TlačidloSTémou />
            </TémaKontext.Provider>
            <VstupRef />
        </div>
    );
}

export default App;
