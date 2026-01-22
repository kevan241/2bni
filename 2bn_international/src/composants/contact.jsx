import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import contact_banner from '/assets/img/contact/contact.webp';
import '../index.css';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const data = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ebaneth1402@gmail.com", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Une erreur est survenue. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Erreur de connexion. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    const SuccessMessage = (
        <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#032859' }}>
            <Typography className="sucessMessage" variant="h5" color="white" gutterBottom>
            Merci pour votre message !
            </Typography>
            <Typography className="sucessMessage" variant="body1" color="white">
                Votre demande a été transmise à nos experts. Un spécialiste de votre secteur vous contactera très rapidement pour une discussion stratégique.
            </Typography>
        </Paper>
    );

    return (
        <Box className="contact_container">
            <div className="sous_container_form_banner">
                <div className="form">
                    <h3>Contactez Nos Experts</h3>
                    <p>Remplissez ce formulaire pour nous exposer brièvement votre besoin. Un expert spécialisé dans votre secteur vous contactera rapidement pour une discussion stratégique.</p>
                    
                    {isSubmitted ? (
                        SuccessMessage
                    ) : (
                        <form onSubmit={handleSubmit}> 
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            
                            <TextField 
                                label="Nom complet" 
                                type="text" 
                                variant="outlined" 
                                margin="normal" 
                                required 
                                name="Nom complet"
                                fullWidth
                            />
                            <TextField 
                                label="Adresse e-mail" 
                                type="email" 
                                variant="outlined" 
                                margin="normal" 
                                required 
                                name="Email"
                                fullWidth
                            />
                            <TextField 
                                label="Contact" 
                                type="tel" 
                                variant="outlined" 
                                margin="normal" 
                                required 
                                name="Contact téléphonique"
                                fullWidth
                            />
                            <TextField 
                                label="Sujet" 
                                type="text" 
                                variant="outlined" 
                                margin="normal" 
                                required 
                                name="Sujet"
                                fullWidth
                            />
                            
                            <Button 
                                variant="contained" 
                                type="submit"
                                fullWidth
                                disabled={isLoading}
                                sx={{
                                    backgroundColor:'#032859', 
                                    borderRadius:'5px',
                                    padding:"10px 0", 
                                    fontSize:"13px",
                                    mt: 2
                                }}
                            >
                                {isLoading ? "Envoi en cours..." : "Envoyer"}
                            </Button>
                        </form>
                    )}
                </div>

                <div className="banner">
                    <img src={contact_banner} alt="comptable_service_client" width="100%" />
                </div>
            </div>
        </Box>
    )
}