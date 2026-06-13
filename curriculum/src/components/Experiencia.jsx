import experiencias from "../data/experiencias.js";
import ExperienciaCard from "../components/ExperienciaCard.jsx";

function Experiencia () {
    return (
        <section className="card">
            <h2>Experiências</h2>

            {experiencias.map ((experiencia, index) => (
                <ExperienciaCard
                    key={index}
                    empresa={experiencia.empresa}
                    cargo={experiencia.cargo}
                    periodo={experiencia.periodo}
                />
            ))}
        </section>
    )
}

export default Experiencia;