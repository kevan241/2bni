import React from "react";
import { Box } from "@mui/material";
import Banner from '/assets/img/about/missions.webp';
import Assurance_img from '/assets/img/about/assurance.webp';
import Cercle from '/assets/img/about/cercle.png';
import Assurances_services from "../assurances_services";
import '../../index.css';

export default function Assurances() {
    return (
        <Box className="body">
            <div className="about_banner mobile_banner" style={{padding:'20% 0% 5% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
            <h1 style={{fontWeight:'300',position:'relative'}}>Nos missions - Secteur assurances</h1>
            </div>

            <Box sx={{boxSizing:'border-box',padding:'20px 120px'}}>
                <div className="assurance_section_one" style={{display:'flex',flexDirection:'column', boxSizing:'border-box',borderRadius:'5px',padding:'30px 30px',margin:'40px 0 0 0'}}>
                    <div className="mobile circle_icon" style={{position:'relative',textAlign:'right',width:'100%'}}><img src={Cercle} alt="cercle_assurance" width='2%'/></div>
                    <div className="section_one_text_header">
                        <p>
                            Depuis plusieurs années, 2BN International accompagne les acteurs du secteur des assurances en Afrique et en Europe dans 
                            leurs enjeux de conformité réglementaire, de performance financière et de modernisation de leurs pratiques.
                        </p>
                    </div>
                    <div className="section_one_img_container">
                        <img src={Assurance_img} alt="image_agent_assurance" width="100%" height='450px'/>
                    </div>
                    <div className="section_one_text">
                        <h4>Nos missions</h4>
                        <p>
                            Apporter aux compagnies d’assurance, courtiers et institutions financières un accompagnement global alliant :
                        </p>
                            <ul>
                                <li>Audit rigoureux des processus comptables, financiers et opérationnels</li>
                                <li>Conseil stratégique pour améliorer la performance et la gouvernance</li>
                                <li>Mise en conformité avec les normes internationales et locales</li>
                                <li>Digitalisation des outils de gestion et de reporting</li>
                            </ul>
                    </div>
                </div>

                <div className="assurance_section_two spacing">
                    <Assurances_services />
                </div>

                <div className="assurance_section_three" style={{margin:'0 0 40px 0'}}>
                    <h4>Nos référentiels de référence</h4>
                    <div className="third_section_element_container">
                        <div className="third_section_element"><span className="third_element_title">CIMA</span><span>Conférence Interafricaine des Marchés d’Assurances</span></div>     <div className="third_section_element"><span className="third_element_title">ARCA</span><span>Autorité de Régulation et de Contrôle des Assurances (RDC)</span></div>   <div className="third_section_element"><span className="third_element_title">IFRS 17 & IFRS 9</span><span>Normes internationales d’information financière</span></div> <div className="third_section_element"><span className="third_element_title">Code français des assurances</span><span>(Règlement 2015-11, version 2020)</span></div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}