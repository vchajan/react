import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Stránky
function Domov() {
    return <h2>Domovská stránka</h2>;
}

function O_nas() {
    return <h2>O nás</h2>;
}

function Kontakt() {
    return <h2>Kontakt</h2>;
}

// Aplikácia s routingom
function App() {
    return (
        <Router>
            <div>
                {/* Navigačné linky */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Domov</Link>
                        </li>
                        <li>
                            <Link to="/o-nas">O nás</Link>
                        </li>
                        <li>
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </nav>

                {/* Nastavenie ciest (routes) */}
                <Switch>
                    <Route path="/o-nas">
                        <O_nas />
                    </Route>
                    <Route path="/kontakt">
                        <Kontakt />
                    </Route>
                    <Route path="/">
                        <Domov />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
