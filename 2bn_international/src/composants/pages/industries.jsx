import { useState } from "react";
import { Box } from "@mui/material";
import Banner from '/assets/img/industrie/banner.webp';
import team from '/assets/img/industrie/team.webp';
import icon_services from '/assets/img/icon_services.png';

export default function Industries() {

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    return(
        <Box>
            <div className="about_banner" style={{padding:'20% 0% 5% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                <h1 style={{fontWeight:'300',position:'relative'}}>Nos missions - Industries & Services</h1>
            </div>

            <Box className="page_content body_padding body">
                <div className="industry_section_one">
                    <p>Notre cabinet capitalise sur une expertise de haut niveau, directement issue des méthodologies rigoureuses des cabinets internationaux majeurs. Cette base de connaissance solide est constamment déployée sur le terrain pour vous accompagner vers l'optimisation maximale de vos performances et la sécurisation méthodique de votre croissance, en transformant les défis de votre secteur en opportunités.</p>
                </div>
            </Box>

            <div className="industry_section_two" style={{backgroundImage:`url(${team})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white'}}></div>
                
            <Box className="page_content body_padding accordion_section">
                <div className="accordion_item_container first_accordion">
                    <div className="accordion_body">
                        <div className="body_accordion">
                            <h4>1. Audit, Conseil et Fiscalité Transversaux</h4>
                            <p>Notre cabinet propose un service complet d'audit, de fiscalité et de conseil, indispensable à la bonne gestion et au développement maîtrisé de votre entreprise.</p>
                        </div>
                        <div className="accordion_trigger" onClick={() => toggleAccordion(1)}>
                            <img src={icon_services} alt="icon_ouverture_accordion" width="40px" style={{transform: openAccordion === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                        </div>
                    </div>
                    <div className="accordion_item" style={{display: openAccordion === 1 ? 'block' : 'none'}}>
                        <div className="item01">
                            <h3>Audit et Certification des Comptes</h3>
                            <p>Nos Experts-Comptables diplômés réalisent l'audit de vos comptes sociaux et consolidés. Ce service va au-delà de la simple certification : il offre une analyse approfondie et indépendante de vos processus financiers. Nous vous aidons à garantir la fiabilité de vos informations financières et à sécuriser votre conformité réglementaire, permettant une prise de décision éclairée pour l'ensemble de vos parties prenantes.</p>
                        </div>

                        <div className="item02">
                            <h3>Conseil en Fiscalité et Réglementation</h3>
                            <p>Nous vous assistons dans l'ensemble de vos obligations fiscales et réglementaires. Notre objectif est de minimiser les risques fiscaux et d'assurer une gestion optimale de vos déclarations, qu'il s'agisse de fiscalité nationale ou de questions douanières. Nous mettons en œuvre un accompagnement rigoureux pour le suivi du respect de l'ensemble des dispositions légales qui impactent votre activité</p>
                        </div>
                    </div>
                </div>




                <div className="accordion_item_container second_accordion">
                    <div className="accordion_body">
                        <div className="body_accordion">
                            <h4>2. Optimisation de la Gestion et des Ressources Humaines</h4>
                            <p>Notre équipe de consultants expérimentés, incluant des Experts-comptables, Doctorants et experts dans les domaines de la gestion des entreprises, la finance, les ressources humaines.</p>
                        </div>
                        <div className="accordion_trigger" onClick={() => toggleAccordion(2)}>
                            <img src={icon_services} alt="icon_ouverture_accordion" width="40px" style={{transform: openAccordion === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                        </div>
                    </div>
                    <div className="accordion_item" style={{display: openAccordion === 2 ? 'block' : 'none'}}>
                        <div className="item01">
                            <h3>Conseil en Organisation et Développement</h3>
                            <p>Nous vous aidons à faire face aux enjeux complexes de la gestion des entreprises et de la finance. Notre accompagnement porte sur l'amélioration de vos processus internes, la valorisation d'actifs (comme l'évaluation des marques), et l'élaboration de stratégies de croissance adaptées à votre contexte.</p>
                        </div>

                        <div className="item02">
                            <h3>Audit Social et RH</h3>
                            <p>Nous réalisons l'audit des pratiques en matière de politique de gestion des ressources humaines. Ces missions évaluent la conformité et l'efficacité de vos politiques concernant le personnel (expatrié et local), la promotion du personnel local et l'utilisation des entreprises locales. Cet accompagnement est essentiel pour une gestion sociale alignée sur les objectifs de Responsabilité Sociale de l'Entreprise (RSE) et les exigences locales.</p>
                        </div>
                    </div>
                </div>




                <div className="accordion_item_container third_accordion">
                    <div className="accordion_body">
                        <div className="body_accordion">
                            <h4>3. Digitalisation et Outils de Performance</h4>
                            <p>Nous sommes spécialisés dans le développement des outils digitaux utiles à la gestion et à la prise de décision</p>
                        </div>
                        <div className="accordion_trigger" onClick={() => toggleAccordion(3)}>
                            <img src={icon_services} alt="icon_ouverture_accordion" width="40px" style={{transform: openAccordion === 3 ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                        </div>
                    </div>
                    <div className="accordion_item" style={{display: openAccordion === 3 ? 'block' : 'none'}}>
                        <div className="item01">
                            <p>Notre service de transformation numérique est centré sur la mise en place d'outils d'évaluation et de pilotage de la performance (P.2). Ces outils permettent aux directions générales d'accéder à des indicateurs clés, de suivre en temps réel l'évolution des projets et de prendre des décisions stratégiques rapides et informées pour l'efficacité de leurs opérations.</p>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}