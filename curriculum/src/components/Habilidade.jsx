import habilidades from "../data/habilidades.js";

function Habilidade() {
    return (
        <section className="card">
            <h2>Habilidades</h2>

            {habilidades.map((habilidade, index) => (
                <div
                    key={index}
                    className="skill"
                >
                    <div className="skill-info">
                        <span>{habilidade.nome}</span>
                        <span>{habilidade.nivel}%</span>
                    </div>

                    <div className="skill-bar">
                        <div
                            className="skill-progress"
                            style={{
                                width:`${habilidade.nivel}%`
                            }}
                        ></div>
                    </div>
                </div>
            ))
            }
        </section>
    )
}

export default Habilidade;