import { Card, CardContent, Grid } from '@mui/material';
import '../styles/Location.scss';
import { useLanguage } from "./LanguageProvider";

function Location() {
    
    const { language } = useLanguage();
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5466300550406!2d25.589231376614887!3d45.65992562035769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b99d0b3bdd5%3A0xbcf6421902e9c51!2sLaDespani!5e0!3m2!1sro!2sro!4v1721387669240!5m2!1sro!2sro";

    const textContent = {
        EN: {
            title: "LOCATION",
            content: "The guesthouse offers a perfect location for a stay in Brașov. Located just 10 minutes from the city center, it is the ideal place to visit all the tourist attractions in the area, but also for a relaxing vacation."
        },
        RO: {
            title: "LOCATIE",
            content: "Pensiunea oferă o locație perfectă pentru un sejur la Brașov. Situată la doar 10 minute de centrul orașului, aceasta reprezintă locul ideal pentru a vizita toate atracțiile turistice din zonă, dar și pentru o vacanță relaxantă."
        }
    }

    const content = textContent[language];

    return (
        <Grid container className="location">
            <Grid item xs={12}>
                <h1 className="chtitle" id="location">{content.title}</h1>
            </Grid>
            <Grid item xs={11} md={5} className="map">
                <iframe src={location} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={11} md={5} className="location-info">
                <Card className="card">
                    <CardContent>
                        <p 
                            className="chtext secondary" 
                            dangerouslySetInnerHTML={{ __html: content.content }}> 
                        </p>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Location;