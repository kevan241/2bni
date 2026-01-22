import { Box, Button } from "@mui/material";
import { useState } from "react";
import '../../index.css';
import Banner from './../../../public/assets/img/about/about_banner.webp';
import img06 from './../../../public/assets/img/about/img06.jpg';
import img07 from './../../../public/assets/img/about/img07.jpg';
import Cercle from './../../../public/assets/img/about/cercle.png';
import img_value01 from './../../../public/assets/img/about/justice.png';
import img_value02 from './../../../public/assets/img/about/croissance.png';
import img_value03 from './../../../public/assets/img/about/hand.png';
import img_value04 from './../../../public/assets/img/about/ampoule.png';
import img_value05 from './../../../public/assets/img/about/img08.png';

export default function About() {
    const [hovered1, setHovered1] = useState({first: false});
    const [hovered2, setHovered2] = useState({second: false});

    return (
        <Box sx={{color:'black'}}>
           <div className="about_banner" style={{padding:'20% 0% 5% 8%',backgroundImage:`url(${Banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                <h1 style={{fontWeight:'300',position:'relative'}}>A propos de nous</h1>
           </div>

           <Box className="about_main_content body">
                <div className="main_container" style={{display:'flex',flexDirection:'column'}}>
                    <div>
                        <h2 style={{textAlign:'left',padding:'20px 0px',fontWeight:'300',fontSize:'35px'}}>Une vision panafricaine du conseil et de <span className="upfront">la performance</span></h2>
                    </div>
                    <div className="section_one_img" style={{padding:'15% 0',backgroundImage:`url(${img06})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',borderRadius:'10px'}}>
                    </div>

                    <div className="mobile about_section_une" style={{fontSize:'16px',padding:'0 20% 0 0'}}>
                        <p style={{textAlign:'left',padding:'20px 0px 0px',fontWeight:'300',lineHeight:'1.8'}}>
                            Fondé en 2015 au Gabon, 2BN International est un <span className='upfront'>cabinet de conseil, d’audit et d’ingénierie financière</span> engagé dans la transformation et la croissance durable des entreprises africaines.
                        </p>
                        <p style={{textAlign:'left',padding:'0px 0px 0px',fontWeight:'300',lineHeight:'1.8'}}>
                           <span className='upfront' style={{fontSize:'17px!important'}}>Notre ambition</span> : accompagner chaque organisation dans la structuration de sa performance financière, la maîtrise de ses risques et la valorisation de son potentiel, grâce à une expertise solide et des solutions innovantes. Apporter une valeur ajoutée mesurable à nos clients à travers des conseils stratégiques, des pratiques rigoureuses et des outils digitaux adaptés à leurs enjeux. Nous faisons le lien entre les standards internationaux et les réalités locales, afin d’offrir un accompagnement qui allie conformité, efficacité et impact.
                        </p>
                    </div>

                    <div className="value1">
                        <div className="animated_element" onMouseOver={() => setHovered1({first: true})} onMouseOut={() => setHovered1({first: false})} style={{backgroundColor: hovered1.first ? '#DDE9C9':'#203C73',padding:'15px 25px',display:'flex',flexDirection:'column', gap:'25px',borderRadius:'10px'}}>
                            <div><img src={Cercle} alt="icon_de_cercle" width='9%' /></div>
                        <div><span className="value_title" style={{ color: hovered1.first ? '#0A4021' : '', fontWeight: hovered1.first ? 'bold' : ''}}>Rigueur et qualité</span><br /><span className="value_description" style={{ color: hovered1.first ? '#0A4021' : '', fontWeight: hovered1.first ? '500' : ''}}>Nous plaçons la rigueur et la qualité au cœur de chacune de nos interventions. Chaque analyse, 
                                audit ou mission de conseil fait l’objet d’une méthodologie précise.</span></div>
                        </div>

                        <div className="animated_element" onMouseOver={() => setHovered2({second: true})} onMouseOut={() => setHovered2({second: false})} style={{backgroundColor: hovered2.second ? '#DDE9C9':'#203C73',padding:'25px',display:'flex',flexDirection:'column', gap:'25px',borderRadius:'10px'}}>
                            <div><img src={Cercle} alt="icon_de_cercle" width='9%' /></div>
                            <div><span className="value_title" style={{ color: hovered2.second ? '#0A4021' : '', fontWeight: hovered2.second ? '500' : ''}}>Innovation</span><br /><span className="value_description" style={{ color: hovered2.second ? '#0A4021' : '', fontWeight: hovered2.second ? '500' : ''}}>Nous intégrons l’innovation au service de la performance. Grâce à la data, nous concevons des solutions sur mesure qui facilitent la prise de décision stratégique 
                                et optimisent les processus internes.</span></div>
                        </div>

                        <div className="animated_element" style={{backgroundColor:'#DDE9C9',padding:'25px',display:'flex',flexDirection:'column', gap:'25px',borderRadius:'10px'}}>
                            <div><img src={Cercle} alt="icon_de_cercle" width='9%' /></div>
                            <div><span className="value_title green_title">Conseil vert</span><br /><span className="value_description green_description">nous accompagnons les entreprises et institutions dans l’optimisation de leur performance énergétique, la réduction de leurs coûts et la mise en 
                                œuvre de solutions responsables.</span></div>
                        </div>
                    </div>


                    <div className="value2">
                        <div className="value_banner"  style={{flex:1,backgroundImage:`url(${img07})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',borderRadius:'10px',position:'relative'}}>
                            <h2 style={{fontWeight:'500',fontSize:'40px',color:'#ffffffa9',zIndex:'800'}}>Nos valeurs</h2>
                        </div>
                        <div className="icon_banner">
                            <div className="value_text"><span className="value_img_icon"><img src={img_value01} alt="icon_justice_balance" width="55%"/></span><div className="value_container_description"><span className="description_title">Intégrité</span><span className="description_text">Nous croyons que la confiance est la base de toute collaboration.</span></div></div>
                            <div className="value_text"><span className="value_img_icon"><img src={img_value02} alt="icon_croissance_economique" width="55%"/></span><div className="value_container_description"><span className="description_title">Excellence</span><span className="description_text">L’excellence n’est pas une option, mais un engagement permanent.</span></div></div>
                            <div className="value_text"><span className="value_img_icon"><img src={img_value03} alt="icon_confiance" width="70%"/></span><div className="value_container_description"><span className="description_title">Engagement</span><span className="description_text">Notre engagement se traduit par une présence active et continue a vos côtés </span></div></div>
                            <div className="value_text"><span className="value_img_icon"><img src={img_value04} alt="icon_ampoule_innovation" width="70%"/></span><div className="value_container_description"><span className="description_title">Innovation durable</span><span className="description_text">Dans un environnement en constante évolution, l’innovation est essentielle pour rester compétitif.</span></div></div>
                        </div>
                    </div>

                    <div className="green_advise">
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><span style={{fontSize:'35px'}}>Le conseil <span style={{color:'#0A4021',fontWeight:'bold'}}>vert</span></span><span className="circle_icon"><img src={Cercle} alt="icon_de_cercle" width='9%' /></span></div><div className="conseil_vert_desc" style={{padding:'0 20% 0 0'}}><span>2BN International a développé une approche unique de conseil énergétique et environnemental, destinée à aider les entreprises et institutions à : <br /></span><span className="aligned_element">Optimiser leur consommation d’énergie,</span><br /><span className="aligned_element">Mettre en place des solutions d’auto-génération (solaire, éolien, biomasse, etc.)</span><br /><span className="aligned_element">Réduire leurs coûts tout en améliorant leur performance environnementale</span><br /><span>Cette démarche s’inscrit dans notre volonté de concilier croissance économique et durabilité.</span></div>
                        <div className="about_button"><Button variant="contained" sx={{marginTop:'0%',fontSize:'12px!important',textTransform:'unset!important', padding:'1% 5%', borderRadius:'10px',backgroundColor:'#ffffffe9',color:"#0A4021",fontWeight:'bold',zIndex:80}}>Explorez nos solutions durables</Button></div>
                    </div>

                    <div className="global_expert">
                        <div className="global_expert_content section">
                            <div><span style={{fontSize:'35px'}} className="global_expert_content_title">Une équipe d’experts à votre service</span></div>
                            <div><span className="">Notre force repose sur un collectif de professionnels expérimentés : anciens managers de cabinets internationaux tels que experts-comptables diplômés, spécialistes du secteur financier, assurantiel, extractif et public. Leur diversité de profils et leur complémentarité assurent une vision globale et une exécution précise de chaque mission.</span></div>
                            <div><Button variant="contained" sx={{padding:'0%',margin:'0%',fontSize:'12px!important',textTransform:'unset!important', padding:'1% 5%', borderRadius:'10px',backgroundColor:'#203C73',color:"#ffffff",fontWeight:'bold',zIndex:80}}>Découvrez l’équipe</Button></div>
                        </div>
                        <div className="global_img">
                            <img src={img_value05} alt="image_expert_global" width="80%" />
                        </div>
                    </div>
                </div>
           </Box>
        </Box>
    )
}