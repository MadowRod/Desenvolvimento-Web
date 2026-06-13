import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Contato from "./components/Contato.jsx";
import Habilidade from "./components/Habilidade.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Formacao from "./components/Formacao.jsx";
import Rodape from "./components/Rodape.jsx";
import SobreMim from "./components/SobreMim.jsx";

function App() {
    const [modoEscuro, setModoEscuro] = useState(false);

    return (
        <div className={modoEscuro ? "dark" : "light"}>
            <div className="container">

                <button
                    onClick={() => setModoEscuro(!modoEscuro)}
                >
                    {modoEscuro
                        ? "☀️ Ativar Modo Claro"
                        : "🌙 Ativar Modo Escuro"
                    }
                </button>

                <Header />

                <main className="conteudo">
                    <div className="coluna-esquerda">
                        <Contato />
                        <Habilidade />
                    </div>

                    <div className="coluna-direita">
                        <SobreMim />
                        <Experiencia />
                        <Formacao />
                    </div>
                </main>

                <Rodape />

            </div>
        </div>
    );
}

export default App;