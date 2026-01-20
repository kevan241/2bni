import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CompanyBanner from '../../public/assets/img/company_banner.webp'
import CompanyMap from '../../public/assets/img/afrique.webp'
import ExpensionImg01 from '../../public/assets/img/expansion01.png'
import ExpensionImg02 from '../../public/assets/img/expansion02.png'
import ExpensionImg03 from '../../public/assets/img/expansion03.png'
import ExpensionImg04 from '../../public/assets/img/expansion04.png'
import '../index.css'

export default function Body_content() {
    return (
        <Box className='body' sx={{display:'flex', flexDirection:'column',color:'black',overflow:'hidden', padding:'50px 100px',gap:'30px'}}>
            <div className="body_section_one">
                <div className="description_company">
                    <h2>Une expérience qui fait la différence !</h2>
                    <p>Depuis 2015, une expertise concrète s’est forgée au cœur des réalités africaines et internationales. Fort d’un parcours consolidé par des missions à fort enjeu dans plus de 6 pays, notre équipe regroupe des experts-comptables diplômés, anciens managers de grands cabinets internationaux.<br/>
                        Nous mettons cette richesse d’expérience au service de nos clients, dans des secteurs stratégiques comme les assurances, l’énergie, les industries extractives ou encore les services publics.
                        Notre approche repose sur des pratiques éprouvées, une maîtrise des référentiels internationaux (IFRS, CIMA, ARCA).</p>
                        <p>
                            <ul style={{fontWeight:'bold'}}>
                                <li>10+ années d’expérience cumulée dans l’audit, le conseil et la finance</li>
                                <li>Une équipe pluridisciplinaire d’experts-comptables, consultants et docteurs en gestion</li>
                                <li>Des missions menées dans 6 pays d’Afrique de l’Ouest et Centrale</li>
                                <li>Une forte expertise sectorielle (assurances, oil & gas, mines, secteur public)</li>
                            </ul>
                        </p>
                </div>
                <div className="image_company">
                        <Button className="btn" component={Link} to="/about" variant="contained" sx={{marginTop:'0%',fontSize:'12px!important',textTransform:'unset!important', padding:'1% 5%', borderRadius:'30px',backgroundColor:'#ffffffe9',color:"#032859",fontWeight:'bold',zIndex:80}}>Découvrez nous</Button>
                </div>
            </div>










            <div className="body_section_two ">
                <div className="description_company">
                    <h2>Votre partenaire de confiance en Afrique de l'Ouest et du Centre.</h2>
                    <p>Notre présence sur le terrain est notre plus grande force. Avec 5 bureaux déjà établis et 2 en cours de création, 
                        et une équipe de 30 professionnels et 3 associés dans 6 pays et territoires, nous offrons bien plus qu'une simple 
                        expertise. Nous nous engageons à vous fournir des solutions adaptées aux spécificités de chaque marché, tout en vous 
                        garantissant un service de qualité et une connaissance approfondie des réalités locales.Notre mission est de simplifier 
                        vos projets en agissant comme un véritable pont entre vos ambitions et les opportunités qu'offrent les marchés d'Afrique 
                        de l'Ouest et du Centre. Que ce soit au Sénégal, en Côte d'Ivoire, au Cameroun, ou dans d'autres pays de la région, 
                        notre réseau étendu vous assure une approche personnalisée et efficace.</p>
                </div>
                <div className="image_company">
                    <img src={CompanyMap} alt="company_banner" style={{width:'100%', height:'100%', objectFit:'cover',backgroundRepeat:'no-repeat',position:'relative'}}/>
                        <Button component={Link} to="/assurances" variant="contained" sx={{marginTop:'-20%',fontSize:'12px!important',textTransform:'unset!important', padding:'1% 5%', borderRadius:'30px',backgroundColor:'#ffffffe9',color:"#032859",fontWeight:'bold',zIndex:80}}>Découvrez nos missions</Button>
                </div>
            </div>


            <div className="body_section_three">
                <div className="expansion"><span><img src={ExpensionImg01} alt="expansion" width={35}/></span><span>6 pays et territoires</span></div>
                <div className="expansion"><span><img src={ExpensionImg02} alt="expansion" width={35}/></span><span>30 professionnels</span></div>
                <div className="expansion"><span><img src={ExpensionImg03} alt="expansion" width={35}/></span><span>3 associés</span></div>
                <div className="expansion"><span><img src={ExpensionImg04} alt="expansion" width={35}/></span><span>5 bureaux</span></div>
            </div>
        </Box>
    )
}