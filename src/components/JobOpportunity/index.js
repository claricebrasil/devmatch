import './style.css';
import Skills from '../Skills/index';

function JobOpportunity({
    img_url,
    name,
    description,
    requirements,
    seniority,
    salary,
    benefits
}) {
    return (
        <div className="container-job-opportunity">
            <img src={img_url} alt="logo" className="logo" />
            <h2>{name}</h2>
            <div className="details">
                <strong>Descrição</strong>
                <p>{description}</p>
            </div>
            <div className="details">
                <strong>Requisitos</strong>
                <Skills skills={requirements} addButton={false} />
            </div> 
            <div className="details">
                <strong>Senioridade</strong>
                <span>{seniority}</span>
            </div>
            <div className="details">
                <strong>Salário / Benefícios</strong>
               <span>R$ {salary} / {benefits.map((item, index) => (
                   <span>{item}{index + 1 < benefits.length && ', '}</span>
               ))}
               </span>
            </div>
        </div>
    )
}

export default JobOpportunity;