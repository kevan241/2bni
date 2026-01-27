import {useState} from "react";
import { Box } from "@mui/material";
import Banner from '/assets/img/petrolier/petrolier_banner.webp';
import team from '/assets/img/petrolier/2bn_team.webp';
import flag01 from '/assets/img/petrolier/country/chad.webp';
import flag02 from '/assets/img/petrolier/country/mali.webp';
import flag03 from '/assets/img/petrolier/country/niger.webp';
import flag04 from '/assets/img/petrolier/country/senegal.webp';
import contact_us from '/assets/img/petrolier/contact_us.webp';
import '../../index.css';

export default function Petrole() {

        const [activeSecteur, setActiveSecteur] = useState('petrol_gas');

        const secteurPetroleTitle = [
            {title:"Audit des contrats de partage de production."},
            {title:"Audit des coûts pétroliers déclarés par les opérateurs."},
            {title:"Audit des frais de siège et d'assistance technique."},
            {title:"Audit technique des projets pétroliers."},
            {title:"Audit des points de mesurage."},
            {title:"Audit des contrats d'association"},
            {title:"Audit des contrats de marketing agreement."},
            {title:"Audit juridique des contrats pétroliers"}
        ]


        const secteurMineTitle = [
            {title:"Audit technique des projets miniers."},
            {title:"Audit comptable et financier des projets."},
            {title:"Audit de la conformité des opérations minières"},
            {title:"Audit environnemental des projets miniers."},
            {title:"Établissement d'un manuel de suivi des projets"},
            {title:"Mise en place d'un Outil de suivi des projets"},
            {title:"Audit des pratiques en matière de politique de gestion des RH"}
        ]


        const paysFlag = [
            {pays: 'Sénégal', flag: flag04, description:"Audit des Coûts Pétroliers ou Cost Oil Audit"},
            {pays: 'Niger', flag: flag03, description:"Audit des Coûts Pétroliers ou Cost Oil Audit"},
            {pays: 'Mali', flag: flag02, description:" Ministère de l’Economie et des finances- Audit financier et comptables des mines d’or en activités"},
            {pays: 'Tchad', flag: flag01, description:"Audit des Coûts Pétroliers ou Cost Oil Audit"},
        ]

        const [selectedPays, setSelectedPays] = useState(paysFlag[0]);

        const displayedTitles = activeSecteur === "petrol_gas"
        ? secteurPetroleTitle
        : secteurMineTitle;



    return (
        <Box className="page_container">
            <div className="about_banner" style={{padding:'20% 0% 5% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                <h1 style={{fontWeight:'300',position:'relative'}}>Nos missions - Secteur pétrolier & Minier</h1>
            </div>

            <Box className="page_content body_padding petrole_page">
                <div className="first_section_container overflow_hidden">
                    <div className="first_section_element01 overflow_hidden"><p>Nous sommes en mesure de comprendre les projets pétroliers et miniers et de vous proposer des solutions adaptées.
                        <br /><br />Nous avons accompagné plusieurs États dans l'audit des coûts pétroliers, l'audit technique et comptable des projets miniers, ainsi que dans l'audit des contrats de marketing agreement, avec des résultats très satisfaisants.</p></div>
                    <div className="first_section_element02 overflow_hidden"><div className="secteur_title"><span 
                                className={`petrol_gas_title ${activeSecteur === 'petrol_gas' ? 'span_active' : ''}`}onClick={() => setActiveSecteur('petrol_gas')}>Pétrole et Gas</span>  <span className={`mining_title ${activeSecteur === 'mining' ? 'span_active' : ''}`} onClick={() => setActiveSecteur('mining')}>Secteur Minier</span></div> <div className="expertise_company"><p>Grâce à notre expertise, nous intervenons sur un large éventail de missions d'audit et de conseil, en proposant des solutions sur mesure et à forte valeur ajoutée.</p></div> 
                        <div className="secteur_content">{displayedTitles.map((item, index) => (<span key={index} className="secteur_item">{item.title}</span>))}</div></div>
                </div>


                <div className="second_section_container overflow_hidden">
                    <h2>Les Principaux Avantages de travailler avec <span className="upfront">2BN International</span></h2>
                    <div className="team overflow_hidden"><img src={team} alt="Team 2BN International" width="100%" height="100%"/></div>
                    <Box className="petrole_value_container" sx={{display:'flex',alignItems:'baseline'}}><div className="petrole_value_title"><h2>Valeur ajouté et contribution</h2></div> <div className="petrole_value_desc"><div className="value_item active"><h3>Valeur ajoutée garantie</h3><p>Notre expertise approfondie et notre capacité à mobiliser des experts nous permettent d'apporter une valeur ajoutée à nos clients.</p></div> <div className="value_item"><h3>Préservation des intérêts publics</h3><p>Nous travaillons aux côtés de nos clients pour nous assurer que les intérêts de la République sont préservés</p></div>   <div className="value_item"><h3>Harmonisation des pratiques</h3><p>Notre équipe favorise la richesse des échanges avec les agents du Ministère, contribuant à l'harmonisation vers les meilleures pratiques.</p></div></div></Box>
                </div>

                <div className="troisieme_section overflow_hidden">
                    <div className="trusted_companies overflow_hidden">
                            <h2>Ils nous ont fait confiance</h2>
    
                        <div style={{display:'flex', gap:'5px', margin:'20px 0'}}>
                            {paysFlag.map((item, index) => (
                                <img 
                                    key={index}
                                    src={item.flag} 
                                    alt={item.pays} 
                                    width='10%'
                                    onClick={() => setSelectedPays(item)}
                                    style={{opacity: selectedPays?.pays === item.pays ? 1 : 0.6}}
                                />
                            ))}
                        </div>

                        {selectedPays && (
                            <div className="flag_description overflow_hidden" style={{marginTop:'20px'}}>
                                <h3>{selectedPays.pays}</h3>
                                <p>{selectedPays.description}</p>
                            </div>
                            )}
                    </div>

                        <div className="contact_us overflow_hidden">
                            <img src={contact_us} alt="Contact Us" width="100%" />
                        </div>
                </div>
            </Box>
        </Box>
        
    )
}