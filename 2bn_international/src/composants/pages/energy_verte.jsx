import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from '/assets/img/energy_vert/banner.webp';
import section_one from '/assets/img/energy_vert/section_one.webp';
import team from '/assets/img/energy_vert/team.webp';

export default function EnergyVerte() {
    const [currentSlide, setCurrentSlide] = useState(0);
    return(
        <Box className="body">
            <div className="about_banner" style={{padding:'20% 0% 5% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                <h1 style={{fontWeight:'300',position:'relative'}}>Nos missions - Secteur Énergie & Conseil Vert</h1>
            </div>

            <div className="energy_section_one body_padding">
                <div className="energy_title"><h4>Partenaire de la Transition Énergétique</h4> <p>Face aux défis de la transition énergétique et de l’impératif de développement durable, 2BN International se positionne comme votre partenaire stratégique. Notre objectif est d'intégrer le « Conseil vert » à vos opérations, en vous aidant à améliorer votre système énergétique et à maîtriser votre impact environnemental.</p></div>
                <div className="energy_picture"><img src={section_one} alt="deux_fermiere_qui_discute" width="65%"/></div>
            </div>

            <Box className="page_content body_padding">
                <div className="energy_section_two">
                    <div className="energy_section_two_item">
                        <h3>1. Optimisation du Système Énergétique et Transition</h3>
                        <div><p>Nous accompagnons nos clients (États, grandes firmes et PME) dans l’amélioration de leur cadre stratégique et institutionnel en matière énergétique, et proposons des solutions concrètes pour une performance énergétique durable.</p><span><h4>Notre Offre en Énergie Verte</h4><p>Nous vous fournissons des solutions complètes pour une gestion énergétique autonome et optimisée :</p></span></div>
                    </div>
                    <div className="energy_section_two_item_slide">
                        <div className="slideElements">                            
                            <div className="slide01" style={{marginLeft: currentSlide === 1 ? '-105%' : '0'}}>
                                <h4>Solutions d’Auto-Génération Énergétique</h4>
                                <p>Proposition et mise en œuvre de solutions personnalisées 100% renouvelables (tout solaire, tout éolien, mini-hydro, tout biogaz, tout biomasse ou systèmes hybrides).</p>
                             </div>
                            <div className="slide02">
                                <h4>Performance et Contrats</h4>
                                <p>- Mise en place de Contrats de Performance Énergétique et d’assistance technique. <br /> <br />- Optimisation de votre système énergétique existant et de vos contrats d’abonnement d’électricité.</p>
                            </div>
                        </div>
                            <div className="slide_controler">
                                <span 
                                    className={`previous controler ${currentSlide === 0 ? 'active' : ''}`} 
                                    onClick={() => setCurrentSlide(0)}></span>
                                <span 
                                    className={`next controler ${currentSlide === 1 ? 'active' : ''}`} 
                                    onClick={() => setCurrentSlide(1)}></span>
                            </div>      
                    </div>
                </div>

                <div className="energy_section section_three">
                    <h3>2. Conseil Vert et Conformité Environnementale (ESG)</h3>
                    <div className="third_section_contain">
                        <div className="content01">
                            <p>L'intégration des critères ESG (Environnementaux, Sociaux et de Gouvernance) est cruciale. Nous vous aidons à évaluer, maîtriser et améliorer l'impact de vos activités sur l'environnement et la société.</p>
                            <h4>Audit et Études d'Impact</h4>
                            <p>Nous réalisons des missions d'audit et d'évaluation visant à sécuriser vos projets :</p>
                            <div className="energy_section energy_section_three">
                                <div className="slideElements">                            
                                    <div className="slide01">
                                        <h4>Conformité et Durabilité :</h4>
                                        <p>Accompagnement dans la réalisation d'Audits environnementaux pour garantir la conformité aux normes.</p><br />
                                        <p>Conseil et audit des pratiques en matière de politique de gestion des ressources humaines (promotion du personnel local et utilisation des entreprises locales), contribuant à la dimension sociale (S) et de gouvernance (G) de la RSE.</p>
                                    </div>
                                </div>     
                            </div>
                        </div>
                        <div className="content02">
                            <h4>Notre Valeur Ajoutée</h4>
                            <p>Travailler avec 2BN International signifie bénéficier des connaissances d'experts de qualité qui vous proposeront des solutions innovantes à forte valeur ajoutée. Notre expertise nous permet d'assurer :</p>
                            <div className="energy_section energy_section_three">
                                <div className="slideElements">                            
                                    <div className="slide01">
                                        <h4>Valeur Ajoutée Garantie</h4>
                                        <p>Valeur Ajoutée Garantie : Des solutions sur mesure pour l'optimisation de vos coûts énergétiques et l'accès au Financement "vert".</p><br />
                                        <p>Préservation des Intérêts Publics : Notre travail contribue à assurer que les intérêts de la République sont préservés dans le cadre de la transition énergétique.</p>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <div className="energy_section section_four" style={{backgroundImage:`url(${team})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white'}}>
                <p>En choisissant de collaborer avec 2BN International, vous avez l'assurance de bénéficier directement des connaissances pointues de nos experts de haut niveau, dont l'expérience est reconnue et l'approche innovante. Notre cabinet mobilise des compétences diversifiées et spécialisées pour vous accompagner, garantissant des analyses rigoureuses du marché, un décryptage précis des enjeux complexes de votre secteur, et une proposition de solutions audacieuses, personnalisées et stratégiques.</p><br />
                <p>Cette synergie d'expertises nous permet de générer une forte valeur ajoutée pour l'ensemble de vos projets et de vos opérations, car notre engagement va au-delà du conseil : notre expertise est un pilier sur lequel repose l'intégralité de notre accompagnement.</p>
            </div>
        </Box>
    )
}