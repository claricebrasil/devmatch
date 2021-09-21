import './style.css';

function Skills({ skills, addButton }) {
    return (
        <div className="flex-row items-center">
            {skills.map(skill => (
                <div key={skill} className="badge blue">
                    {skill}
                </div>
            ))}
            {
                addButton && <button className="badge blue-outline add-skills">
                    Adicionar
                </button>
            }
        </div>
    );
}

export default Skills;