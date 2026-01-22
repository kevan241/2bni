import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography, Paper } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs'; 
import 'dayjs/locale/fr'; 

dayjs.locale('fr'); 
import Banner from '/assets/img/schedule/schedule.webp';
import '../index.css';

export default function Schedule() {

    const [profil, setProfil] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs()); 
    const [isLoading, setIsLoading] = useState(false); 

    const ProfilField = [
        'Personne physique',
        'Entreprise / Société',
        'Association / ONG',
        'Institution publique'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true); 

        const data = new FormData(e.target); 
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
            <Typography  className="sucessMessage" variant="h5" color="success.main" gutterBottom>
                Rendez-vous en cours de confirmation !
            </Typography>
            <Typography  className="sucessMessage" variant="body1">
                Merci d'avoir sollicité 2BN International. Un expert vous contactera sous peu.
            </Typography>
        </Paper>
    );


    return (
        <Box>
            <div className="about_banner contact_banner mobile_banner" style={{padding:'13% 0% 3% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                <h1 style={{fontWeight:'300',position:'relative'}}>Prenez rendez-vous</h1>
            </div>


            <Box className="schedule_form body" sx={{ padding: { xs: '20px', md: '50px 15%' } }}>
                {isSubmitted ? (
                    SuccessMessage
                ) : (

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <form onSubmit={handleSubmit}>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_cc" value="pierre.ebaneth@2bni.ga,lady.jarod@2bni.ga" />

                            <TextField 
                                select 
                                label="profils" 
                                name="profils" 
                                value={profil} 
                                onChange={(e) => setProfil(e.target.value)} 
                                variant="outlined" 
                             fullWidth 
                                sx={{ margin: '20px 0' }} 
                                required
                            >
                                {ProfilField.map((p, index) => (
                                    <MenuItem key={index} value={p}>
                                        {p}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField label="Nom personne morale/physique" type="text" name="Nom personne morale/physique" variant="outlined" fullWidth sx={{ margin: '20px 0 10px 0' }} required />
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
                            <DateTimePicker
                                label="Date et Heure du Rendez-vous"
                                value={selectedDateTime}
                                onChange={(newValue) => setSelectedDateTime(newValue)}
                                format="DD/MM/YYYY HH:mm"
                                sx={{ margin: '20px 0', width: '100%' }}
                            /><input 
                                    type="hidden" 
                                    name="Date et Heure du Rendez-vous" 
                                    value={selectedDateTime.format('DD/MM/YYYY HH:mm')} 
                                />


                            <Button className="schedule_button"
                                variant="contained" 
                                type="submit" 
                                fullWidth 
                                disabled={isLoading}
                                sx={{ backgroundColor: '#032859', borderRadius: '5px', padding: "12px 0", fontSize: "16px", mt: 2 }}
                            >
                                {isLoading ? "Envoi en cours..." : "Confirmer le rendez-vous"}
                            </Button>

                        </form>
                    </LocalizationProvider>
                )}
            </Box>
        </Box>
    );
}