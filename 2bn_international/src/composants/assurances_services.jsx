import { Box } from "@mui/material"
import '../index.css';
import arrowNext from '/assets/img/about/next.png';
import arrowPrev from '/assets/img/about/prev.png';
import { useState,useEffect } from "react";

export default function Assurances_services() {

    const services = [
        {title:'1. Audit et certification des comptes', 
            content:'Audit financier et comptable selon les référentiels CIMA, ARCA, IFRS 17 & 9, Commissariat aux comptes et audits contractuels ; Analyse de la fiabilité des données et des provisions techniques, Évaluation de la solvabilité et de la couverture réglementaire.'},
        {title:'2. Conseil stratégique pour améliorer la performance et la gouvernance', 
            content:'Optimisation des processus opérationnels et financiers ; Renforcement de la gouvernance d’entreprise et des pratiques de gestion des risques ; Élaboration de stratégies de croissance durable et d’innovation dans les produits d’assurance.'},
        {title:'3. Mise en conformité avec les normes internationales et locales', 
            content:'Accompagnement dans l’adoption des normes IFRS 17 & 9 et autres régulations locales ; Formation des équipes aux exigences réglementaires et aux meilleures pratiques du secteur ; Suivi continu des évolutions réglementaires et adaptation des politiques internes.'},
        {title:'4. Digitalisation des outils de gestion et de reporting', 
            content:'Implémentation de solutions technologiques pour automatiser les processus comptables et financiers ; Développement de tableaux de bord interactifs pour le suivi en temps réel des performances ; Intégration de systèmes de gestion des risques et de conformité.'},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [putAnimation, setPutanimation] = useState(false);

    const handleAnimation = () => {
        setPutanimation(true);
        setTimeout(() => {
            setPutanimation(false);
        }, 500);
    }

    return(
        <Box className="assurances_services" sx={{color:'black',textAlign:'left',display:'flex',flexDirection:'row',gap:3}}>
            <div className="animated_element" style={{width:'100%'}}>
                <h4>Nos domaines d’intervention</h4>
                <div>
                    <h3>{services[currentIndex].title}</h3>
                    {services[currentIndex].content} 
                </div>
            </div>

            <div className="arrow_container">
                    <span onClick={() => {setCurrentIndex((currentIndex + 1) % services.length); handleAnimation();}} style={{backgroundColor:'rgb(243 243 243)',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}><img src={arrowNext} alt="flèche suivante" width='90%'/></span>
                    <span onClick={() => {setCurrentIndex((currentIndex - 1 + services.length) % services.length); handleAnimation();}} style={{backgroundColor:'rgb(243 243 243)',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}><img src={arrowPrev} alt="flèche précédente" width='90%'/></span>
            </div>
        </Box>
    )
}