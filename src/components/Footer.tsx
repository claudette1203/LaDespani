import { Grid, Tooltip } from "@mui/material";
import "../styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useLanguage } from "./LanguageProvider";

function Footer() {
    const { language } = useLanguage();

    return <>
        <Grid container className="footer">
            <Grid container className="row margin">
                <div className="ftext small">
                    Contact tel: +40721373747
                </div>
            </Grid>
            <Grid container className="row">
                <Grid item xs={3} md={2}><div className="line" /></Grid>

                <Grid item xs={4} md={2} className="social">
                    <a href="https://www.facebook.com/ladespani.guesthouse">
                        <Tooltip title="Facebook">
                            <FacebookIcon className="icon" />
                        </Tooltip>
                    </a>
                    <a href="https://www.instagram.com/ladespaniguesthouse/">
                        <Tooltip title="Instagram">
                            <InstagramIcon className="icon" />
                        </Tooltip>
                    </a>
                </Grid>

                <Grid item xs={3} md={2}><div className="line" /></Grid>
            </Grid>
            <Grid container className="row">
                <Grid item xs={12}>
                    <div className="ftext">
                        {language === "RO" ? "Pensiunea LaDespani" : "LaDespani Guesthouse"}
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Footer;