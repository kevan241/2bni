import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography, Paper } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');
import Banner from '/assets/img/carriere/banner.webp';
import '../index.css';

export default function Carriere() {

    const [profil, setProfil] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs());
    const [isLoading, setIsLoading] = useState(false);
    const [cvFile, setCvFile] = useState(null);
    const [diplomesFile, setDiplomesFile] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = new FormData(e.target);
        
        // Ajouter les fichiers au FormData
        if (cvFile) {
            data.append('CV', cvFile);
        }
        if (diplomesFile) {
            data.append('Diplomes', diplomesFile);
        }
        
        console.log('Données envoyées:', Object.fromEntries(data));

        try {
            const response = await fetch("https://formsubmit.co/ebaneth1402@gmail.com", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok || response.status === 200 || response.status === 422) {
                setIsSubmitted(true);
            } else {
                alert("Une erreur est survenue lors de l'envoi.");
            }
        } catch (error) {
            console.error("Erreur de soumission:", error);
            alert("Erreur de connexion. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const SuccessMessage = (
        <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#032859', mt: 3, mb: 3 }}>
            <Typography className="sucessMessage" variant="h5" color="success.main" gutterBottom>
                Candidature envoyée avec succès !            </Typography>
            <Typography className="sucessMessage" variant="body1">
                Merci pour votre intérêt à rejoindre 2BN International. Notre équipe RH étudiera votre dossier et vous contactera dans les plus brefs délais.            </Typography>
        </Paper>
    );

    return (
        <Box>
            <div className="about_banner contact_banner mobile_banner" style={{padding:'13% 0% 3% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                <h1 style={{fontWeight:'300',position:'relative'}}>Rejoignez nos équipes</h1>
            </div>

            <Box className="schedule_form body" sx={{ padding: { xs: '20px', md: '50px 15%' } }}>
                {isSubmitted ? (
                    SuccessMessage
                ) : (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <Typography className="carriere" variant="body1" sx={{ mb: 2, lineHeight: 1.8, textAlign: 'justify',color:'black' }}>
                                Chez 2BN International, nous sommes convaincus que notre force réside dans les talents 
                                qui composent nos équipes. Entreprise dynamique et innovante, nous évoluons dans un 
                                environnement en constante mutation où chaque collaborateur joue un rôle clé dans notre 
                                réussite collective.
                            </Typography>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_cc" value="pierre.ebaneth@2bni.ga,lady.jarod@2bni.ga" />
                            
                            <TextField label="Nom" type="text" name="Nom" variant="outlined" fullWidth sx={{ margin: '20px 0 10px 0' }} required />
                            <TextField label="Prénom" type="text" name="Prénom" variant="outlined" fullWidth sx={{ margin: '20px 0 10px 0' }} required />
                            <TextField label="Adresse e-mail" type="email" name="Email" variant="outlined" fullWidth sx={{ margin: '10px 0 20px 0' }} required />
                            
                            <TextField 
                                select
                                label="Indicatif"
                                name="Indicatif"
                                defaultValue="+241"
                                variant="outlined"
                                sx={{ width: '30%' }}
                                required
                            >
                                <MenuItem value="+241">🇬🇦 +241</MenuItem>
                                <MenuItem value="+33">🇫🇷 +33</MenuItem>
                                <MenuItem value="+1">🇺🇸 +1</MenuItem>
                                <MenuItem value="+237">🇨🇲 +237</MenuItem>
                                <MenuItem value="+225">🇨🇮 +225</MenuItem>
                                <MenuItem value="+242">🇨🇬 +242</MenuItem>
                                <MenuItem value="+212">🇲🇦 +212</MenuItem>
                            </TextField>  
                            
                            <TextField 
                                label="Numéro de téléphone" 
                                type="tel" 
                                name="Numéro" 
                                variant="outlined" 
                                sx={{ width: '70%' }}
                                placeholder="01 23 45 67 89"
                                required 
                            />

                            <Box sx={{ margin: '20px 0' }}>
                                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    fullWidth
                                    sx={{ 
                                        textAlign: 'left', 
                                        justifyContent: 'flex-start',
                                        borderColor: '#032859',
                                        color: cvFile ? '#032859' : 'text.secondary',
                                        padding: '12px 16px'
                                    }}
                                >
                                    {cvFile ? cvFile.name : 'Votre CV ici'}
                                    <input
                                        type="file"
                                        name="CV"
                                        hidden
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => setCvFile(e.target.files[0])}
                                        required
                                    />
                                </Button>
                            </Box>

                            <Box sx={{ margin: '20px 0' }}>
                                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    fullWidth
                                    sx={{ 
                                        textAlign: 'left', 
                                        justifyContent: 'flex-start',
                                        borderColor: '#032859',
                                        color: diplomesFile ? '#032859' : 'text.secondary',
                                        padding: '12px 16px'
                                    }}
                                >
                                    {diplomesFile ? diplomesFile.name : 'Votre dernier diplome ici'}
                                    <input
                                        type="file"
                                        name="Diplomes"
                                        hidden
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => setDiplomesFile(e.target.files[0])}
                                    />
                                </Button>
                            </Box>

                            <TextField 
                                label="Description courte"
                                name="lettre_motivation"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6} 
                                sx={{ margin: '20px 0' }}
                                placeholder="Parlez-nous de votre parcours et de vos motivations..."
                            />
                            <Button 
                                className="schedule_button"
                                variant="contained" 
                                type="submit" 
                                fullWidth 
                                disabled={isLoading}
                                sx={{ backgroundColor: '#032859', borderRadius: '5px', padding: "12px 0", fontSize: "16px", mt: 2 }}
                            >
                                {isLoading ? "Envoi en cours..." : "Envoyez votre candidature"}
                            </Button>
                        </form>
                    </LocalizationProvider>
                )}
            </Box>
        </Box>
    );
}