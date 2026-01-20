import {Box} from "@mui/material";
import { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import hamburger from '../../public/assets/img/icons/hamburger.png';
import Logo from '/assets/img/logo/logo.png';
import '../index.css';

import icon_menu from '../../public/assets/img/petrolier/menu_icon.png';


export default function Navbar() {
    const [rotate, setRotate] = useState({rotated:false});
    const [hover, sethovered] = useState({hovered:false});
        const [hover1, sethovered1] = useState({hovered1:false});
            const [hover2, sethovered2] = useState({hovered2:false});
                const [hover3, sethovered3] = useState({hovered3:false});
                    const [hover4, sethovered4] = useState({hovered4:false});
                    const [toggle, setToggle] = useState({toggles:false});
                    const cancelRef = useRef(null);
                    const [activeLink, setActiveLink] = useState(null);
                    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
                    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

    return (
        <Box>
            <Box className="navbar" sx={{padding:'20px 0px', backgroundColor:'#ffffff26',borderBottom:'0.5px solid #ffffff6e',zIndex:80,position:'relative'}}>
                <Box className="navbar-content" sx={{display:'grid', gridTemplateColumns:'1fr 1.5fr 1fr',gap:2, alignItems:'center',justifyContent:'space-between', width: '100%', '& button': { m: 1 }, margin:'0px', padding:'0 0px'}}>
                    <div className="logo_2bn nav_item" style={{padding:'0 0px 0 50px'}}><h2 style={{fontSize:'16px'}}><Link to="/"><img src={Logo} alt="2BN International Logo" width="100%" style={{height: '40px'}} /></Link></h2></div>
                    <div className="menu nav_item">
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/about">A propos</Link></li>
                            <li onMouseOver={() => { clearTimeout(cancelRef.current); setRotate({ rotated: true }) }}  onMouseOut={() => { cancelRef.current = setTimeout(() => setRotate({ rotated: false }), 300); }}><Link to="#" className="icon_menu"><span>Nos missions</span><span className="img_icon_rotate"><img src={icon_menu} alt="icon_menu" width='50%' style={{transform: rotate.rotated ? 'rotate(180deg)' : 'rotate(0deg)'}} /></span></Link>
                                <Box className="mega_menu" onMouseEnter={() => { clearTimeout(cancelRef.current); setRotate({ rotated: true }) }} onMouseLeave={() => { cancelRef.current = setTimeout(() => setRotate({ rotated: false }), 300); }}
                                    sx={{display: rotate.rotated ? 'flex':'none',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',padding:'2% 4%', zIndex:90,position:'absolute', width:'100%',left:'0',top:'100%',gap:2}}>
                                    <div className="mega_menu_item active" style={{width:'23%',background: hover.hovered ? '#032859' : ''}} onMouseOver={() => sethovered({hovered:true})} onMouseOut={() => sethovered({hovered:false})}><Link to="/assurances"><span>Secteur assurances</span></Link></div>
                                    <div className="mega_menu_item" onClick={() => {setActiveLin('petrole')}} style={{width:'23%',background: activeLink === 'petrole' || hover1.hovered1 ? '#032859' : '',color: activeLink === 'petrole' || hover1.hovered1 ? '#ffffff' : ''}} onMouseOver={() => sethovered1({hovered1:false})} onMouseOut={() => sethovered1({hovered1:false})}><Link to="/petrole"><span>Secteur Pétrolier & Minier</span></Link></div>
                                    <div className="mega_menu_item" style={{width:'23%',background: hover2.hovered2 ? '#032859' : '',color: hover2.hovered2 ? '#ffffff' : ''}} onMouseOver={() => sethovered2({hovered2:false})} onMouseOut={() => sethovered2({hovered2:false})}><Link to="/energy_verte"><span>Secteur Énergie & Conseil Vert</span></Link></div>
                                    <div className="mega_menu_item" style={{width:'23%',background: hover4.hovered4 ? '#032859' : '',color: hover4.hovered4 ? '#ffffff' : ''}} onMouseOver={() => sethovered4({hovered4:false})} onMouseOut={() => sethovered4({hovered4:false})}><Link to="/industries"><span>Industries & Services</span></Link></div>
                                </Box>
                            </li>
                            <li><Link to="/carriere">Carrière</Link></li>
                        </ul>
                    </div>
                        <div className="nav_item nav_contact_btn" style={{display:'grid',placeItems:'center', gridTemplateColumns:'repeat(2, 1fr)',textAlign:'center',gap:'0',textAlign:'right',padding:'0 50px 0 0px'}}>
                            <Link to="/schedule"><Button variant="contained" size="small" sx={{fontSize:'9px', padding:'6px 13px 4px 13px!important',minWidth: '100px', borderRadius:'50px',backgroundColor:'#03285973'}}>Rencontrez-nous</Button></Link>
                           <Link to="/contact" className="right_button"><Button variant="contained" size="small" sx={{fontSize:'9px', padding:'6px 13px 4px 13px!important',minWidth: '100px', borderRadius:'50px',backgroundColor:'#03285973'}}>Contactez-nous</Button></Link>
                        </div>
                </Box>
            </Box>










            <Box className="mobile_navbar" sx={{padding:'20px 20px 20px 0px',boxSizing:'border-box', backgroundColor:'#ffffff26',borderBottom:'0.5px solid #ffffff6e',zIndex:80,position:'relative'}}>
                <Box className="navbar-content" sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '100%', '& button': { m: 1 }, margin:'0px', padding:'0 0px'}}>
                    <div className="logo_2bn nav_item" style={{padding:'0 0px 0 50px'}}><h2 style={{fontSize:'16px'}}><Link to="/"><img src={Logo} alt="2BN International Logo" width="100%" style={{height: '40px'}} /></Link></h2></div>
                    <div className="menu_mobile" onClick={() => setMobileMenuOpen(true)} style={{cursor:'pointer'}}>
                        <img src={hamburger} alt="menu" width="70%"/>
                    </div>
                </Box>

                {/* Menu mobile slider */}
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    right: mobileMenuOpen ? 0 : '-100%',
                    width: '80%',
                    maxWidth: '400px',
                    height: '100vh',
                    backgroundColor: '#032859',
                    transition: 'right 0.3s ease-in-out',
                    zIndex: 999,
                    overflowY: 'auto',
                    padding: '20px'
                }}>
                    {/* Bouton fermeture */}
                    <Box sx={{display:'flex', justifyContent:'flex-end', marginBottom:'30px'}}>
                        <span onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', fontSize:'30px', cursor:'pointer'}}>×</span>
                    </Box>

                    {/* Menu items */}
                    <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'16px', padding:'10px 0', borderBottom:'1px solid #ffffff33'}}>Accueil</Link>
                        
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'16px', padding:'10px 0', borderBottom:'1px solid #ffffff33'}}>A propos</Link>
                        
                        <Box>
                            <Box onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)} sx={{color:'#fff', fontSize:'16px', padding:'10px 0', borderBottom:'1px solid #ffffff33', cursor:'pointer', display:'flex',paddingLeft:'50px',gap:2,justifyContent:'center', alignItems:'center'}}>
                                <span>Nos missions</span>
                                <img src={icon_menu} alt="icon_menu" width='20px' style={{transform: mobileSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.3s'}} />
                            </Box>
                            
                            {/* Sous-menu */}
                            <Box sx={{
                                display: mobileSubMenuOpen ? 'flex' : 'none',
                                flexDirection: 'column',
                                gap: '10px',
                                paddingLeft: '20px',
                                marginTop: '10px'
                            }}>
                                <Link to="/assurances" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'14px', padding:'8px 0'}}>Secteur assurances</Link>
                                <Link to="/petrole" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'14px', padding:'8px 0'}}>Secteur Pétrolier & Minier</Link>
                                <Link to="/energy_verte" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'14px', padding:'8px 0'}}>Secteur Énergie & Conseil Vert</Link>
                                <Link to="/industries" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'14px', padding:'8px 0'}}>Industries & Services</Link>
                            </Box>
                        </Box>
                        
                        <Link to="/carriere" onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', textDecoration:'none', fontSize:'16px', padding:'10px 0', borderBottom:'1px solid #ffffff33'}}>Carrière</Link>
                        
                        {/* Boutons contact */}
                        <Box sx={{display:'flex', flexDirection:'column', gap:'15px', marginTop:'20px'}}>
                            <Link to="/schedule" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="contained" fullWidth sx={{fontSize:'12px', padding:'10px', borderRadius:'50px', backgroundColor:'#fff', color:'#032859'}}>Rencontrez-nous</Button>
                            </Link>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="contained" fullWidth sx={{fontSize:'12px', padding:'10px', borderRadius:'50px', backgroundColor:'#fff', color:'#032859'}}>Contactez-nous</Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* Overlay */}
                {mobileMenuOpen && (
                    <Box onClick={() => setMobileMenuOpen(false)} sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 998
                    }} />
                )}
            </Box>
        </Box>
    )
}