import { Box } from "@mui/material";
import cardImg01 from '../../public/assets/img/expertise_comptable.webp'
import cardImg02 from '../../public/assets/img/audit.webp'
import cardImg03 from '../../public/assets/img/ingenierie.webp'
import cardImg04 from '../../public/assets/img/conseil.webp'
import servicesIcons from '../../public/assets/img/icon_services.png'
import React from "react";

export default function Services() {
    return (
        <Box className='body' sx={{display:'flex', flexDirection:'column',color:'black',padding:'0px 100px 22px 100px', margin:0}}>
            <div className='title_section'>
                    <h2 style={{flex: 1}}>Nos services</h2>
                    <p style={{flex: 2}}>Une approche globale et sur mesure pour accompagner chaque structure dans ses défis comptables. Des solutions concrètes, fiables et adaptées.</p>
                    <div className="service_controler" style={{display:'flex',gap:'30px',flex: 1,textAlign:'right'}}><span id="services_next">Suivant</span><span id="services_prev">Précédent</span></div>
            </div>
            <div className="services_slide">
                <div className="service_card" style={{ backgroundImage: `url(${cardImg01})`, backgroundSize: 'cover', backgroundPosition: 'center'}}><span className="title-services">Expertise comptable</span><span><img src={servicesIcons} alt="Icons_services_comptable" width={22} /></span></div>
                <div className="service_card" style={{ backgroundImage: `url(${cardImg02})`, backgroundSize: 'cover', backgroundPosition: 'center'}}><span className="title-services">Audit</span><span><img src={servicesIcons} alt="Icons_services_comptable" width={22} /></span></div>
                <div className="service_card" style={{ backgroundImage: `url(${cardImg03})`, backgroundSize: 'cover', backgroundPosition: 'center'}}><span className="title-services">Ingenerie financière</span><span><img src={servicesIcons} alt="Icons_services_comptable" width={22} /></span></div>
                <div className="service_card" style={{ backgroundImage: `url(${cardImg04})`, backgroundSize: 'cover', backgroundPosition: 'center'}}><span className="title-services">Conseils & formation</span><span><img src={servicesIcons} alt="Icons_services_comptable" width={22} /></span></div>
            </div>
        </Box>
    )
}