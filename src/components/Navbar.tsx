import { Grid } from '@mui/material';
import '../styles/Navbar.scss';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import ParticleText from './ParticleText';
import { useLanguage } from './LanguageProvider';

function Navbar() {
    const [smallScreen, setSmallScreen] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrollDistance(window.scrollY);
        const handleResize = () => setSmallScreen(window.innerWidth < 900);

        window.addEventListener('scroll', handleScroll);
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - 100
        });
    }

    const renderNavItem = (text: string, targetId: string) => (
        <a onClick={() => scrollTo(targetId)}>
            <Parallax speed={10}>
                <div className="item scrollsection" style={{ fontSize: `${smallScreen ? '14px' : '25px'}` }}>
                    {text}
                </div>
            </Parallax>
        </a>
    );

    return (
        <Grid container className="navbar">
            <ParallaxProvider>
                <Grid item xs={12} className="node">
                    <img src="1.jpg" className="bg" alt="background" />
                </Grid>
                <Grid item xs={12} className="node text language" onClick={toggleLanguage}>
                    <img src={language === 'RO' ? 'RO.png' : 'EN.png'} className="icon" alt={language} />
                </Grid>   
                <Grid item xs={12} className="node ttl">
                    <ParticleText styleProp={{ transform: `translateY(${-1 * scrollDistance * 0.2}px)` }} 
                    textSizeProp={smallScreen ? 75 : 160} canvasWidthVal={smallScreen ? (window.innerWidth - 10) : 800} 
                    scanStepVal={smallScreen ? 220 : 160} particleSizeVal={smallScreen ? 2.6 : 3}
                    />
                </Grid>
                <Grid item xs={12} md={9} className="node text">
                    {renderNavItem('ABOUT', 'about')}
                    {renderNavItem('ROOMS', 'rooms')}
                    {renderNavItem('PICTURES', 'pictures')}
                    {renderNavItem('LOCATION', 'location')}
                </Grid>
            </ParallaxProvider>
        </Grid>
    );
}

export default Navbar;
