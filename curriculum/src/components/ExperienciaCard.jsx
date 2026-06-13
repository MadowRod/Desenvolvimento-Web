function ExperienciaCard({empresa, cargo, periodo}) {
    return (
        <div className="experiencia-card">
            <h3>{empresa}</h3>
            <p>{cargo}</p>
            <p>{periodo}</p>
        </div>
    );
}

export default ExperienciaCard;