import React from "react";
import { Box } from "@mui/material";

export default function Footer() {
    return(
        <Box className="footer_container" sx={{backgroundColor:'#032859', color:'white', display:'flex', flexDirection:'column', padding:'30px 100px',margin:'0', gap:'50px'}}>
            <div className="footer" style={{display:'flex', flexDirection:'row',justifyContent:'space-between', gap:'20px',textAlign:'left'}}>
                <div>2BN international</div>
                <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <h3>Liens utiles</h3>
                    <span>Qui sommes-nous</span>
                    <span>Nos services</span>
                    <span>Carrière recrutement</span>
                    <span>Nos process</span>
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <h3>Mentions légales et politique</h3>
                    <span>Mentions légales</span>
                    <span>Politique de confidentialité </span>
                    <span>Conditions générales d’utilisation</span>
                </div>
            </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div className="footer_copyright" style={{fontSize:'12px', opacity:'0.7',borderTop:'1px solid white', paddingTop:'25px', width:'50%'}}>© 2025 2BN International - Tous droits réservés</div>
                </div>
        </Box>
    )
}