import {Box} from '@mui/material'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../index.css'
import Slider from '../../public/assets/img/slider.webp'
import Slider02 from '../../public/assets/img/slide02.webp'
import { background } from 'storybook/internal/theming';


export default function Heros() {
    // ... (le tableau slides ne change pas)
    const slides = [
        {
            className: 'hero hero_slide01',
            style: { background: `url(${Slider})`, backgroundSize: 'cover',backgroundPosition:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'baseline'},
            content: 'Votre partenaire comptable de confiance, ici et ailleurs', // Texte pour la slide 1
            paragraph: 'Chez 2BN International, nous aidons entreprises, professionnels et institutions à structurer leur avenir financier avec rigueur, clarté et vision. De la comptabilité locale à l’expansion internationale, nous sommes à vos côtés à chaque étape.',
            buttonText:'En savoir plus',
            LinkTo:'/about'
            
        },
        {
            className: 'hero hero_slide02',
            style: { background: `url(${Slider02})`, backgroundSize: 'cover',backgroundPosition:'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'baseline'},
            content: 'Découvrez nos services', // Texte pour la slide 2
            paragraph: "2BN International vous offre une solution complète pour sécuriser, développer et pérenniser votre activité en Afrique et à l'international",
            buttonText:'En savoir plus',
            LinkTo:'/industries'
        },
       /* {
            className: 'hero hero_slide03',
            style: { backgroundColor: 'red' },
            content: 'Contactez-nous !', // Texte pour la slide 3
            paragraph: 'tt',
            buttonText:''
        }*/
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    

    const goToNext = () => {
        if (activeIndex < slides.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const goToPrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <Box className='heros_container' sx={{position:'relative', height: '90vh', width:'100%', overflow:'hidden'}}>
            
            <div 
                className="slides-container"
                style={{
                    display: 'flex',
                    height: '100%',
                }}
            >
                {slides.map((slide, index) => {
                    const slideStyle = {
                        height: '100%', 
                        width: '100%', 
                        flexShrink: 0,
                        transition: 'margin-left 0.5s ease-in-out', 
                        ...slide.style
                    };


                    if (index < activeIndex) {
                        slideStyle.marginLeft = '-100%';
                    }

                    return (
                        <div 
                            key={index}
                            className={`${slide.className} ${index === activeIndex ? 'slide_actif' : ''}`} 
                            style={slideStyle}
                        >
                            <h1 style={{color: 'white', textAlign: 'center', fontSize: '3rem'}}>{slide.content}</h1>
                            <p className='slide_text' style={{color: 'white', textAlign: 'center', fontSize: '1rem'}}>{slide.paragraph}</p>
                            {slide.buttonText && slide.LinkTo && (
                                <Link to={slide.LinkTo}>
                                    <button className='btn' style={{color:'white',backgroundColor:'black', display: 'block', margin: '20px 0', padding: '13px 35px', fontSize: '1rem'}}>
                                        {slide.buttonText}
                                    </button>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className='navigator_slide' style={{position:'absolute', backgroundColor:'rgba(0,0,0,0.5)', color: 'white', borderRadius: '10px', margin: 0,padding: '10px',left: '90%',top: '60%', transform: 'translateY(-10%)', display: 'flex', gap: '10px',zIndex:80}}>
                <span id='prev' onClick={goToPrev} style={{cursor: 'pointer', userSelect: 'none'}}>❮</span>
                <span id='next' onClick={goToNext} style={{cursor: 'pointer', userSelect: 'none'}}>❯</span>
            </div>
        </Box>
    )
}