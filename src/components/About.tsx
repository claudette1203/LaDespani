import { useEffect, useRef } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import "../styles/About.scss";

function About() {
    const options = {
        root: null, // the browser viewport is used
        rootMargin: '0px',
        threshold: 0.75
    };

    const imgShineContainerRef = useRef<HTMLDivElement>(null);
    const imgShineRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const makeShine = (entries: IntersectionObserverEntry[]) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;

                const imgElement = imgShineRef.current;
                const imgContainer = imgShineContainerRef.current;
                if (imgElement) {
                    imgElement.classList.add('img-shine');
                }
                if (imgContainer) {
                    imgContainer.classList.add('imgShineContainerGo');
                }
            }
        };

        const observer = new IntersectionObserver(makeShine, options);
        const imgElement = imgShineRef.current;
        if (imgElement) {
            observer.observe(imgElement);
        }
    }, []);

    const textContent = {
        title: 'ABOUT',
        subtitle: "Bine ați venit!",
        content: 'Pensiunea La Despani este situată într-o zonă rezidențială din Brașov, la 15 minute de mers pe jos de gara centrală și la 30 de minute de mers pe jos de centrul istoric al orașului. Puteți ajunge în centru și cu autobuzul. <br />Pensiunea se află la 300 de metri de Autogara 2, de unde pleacă autobuzele spre Castelul Bran și spre Cetatea Râșnov, astfel încât veți putea explora zona. La doar 100 de metri de Pensiunea La Despani se află supermarketul Sergiana, deschis non-stop. <br />Vă veți putea distra în cel mai mare parc acvatic acoperit din România, Paradisul Acvatic, situat la doar 1 km de proprietate. <br />Pensiunea La Despani are o terasă frumoasă acoperită în grădină, precum și o piscină și alte facilități pentru relaxare. Oaspeții pot găti în bucătăria comună excelent utilată. <br />Personalul internațional vorbește română, engleză, germană, italiană, estonă, finlandeză și rusă.',
    };

    return (
        <Grid container className="about" id="about">
            <Grid item xs={12} className="ptitle">
                <h1 className="chtitle">{textContent.title}</h1>
            </Grid>
            <Grid item xs={12} className="row">
                <Grid ref={imgShineContainerRef} item xs={12} md={5} className="imgShineContainer">
                    <img ref={imgShineRef} id="aboutImg" src="2.jpg" alt="laDespani" />
                </Grid>
                <Grid item xs={11} md={6} className="col">
                    <Card className="card">
                        <Grid item xs={12} md={10}>
                            <CardContent>
                                <div className="chsubtitle secondary bold underlined center">
                                    {textContent.subtitle}
                                </div>
                                <p 
                                    className="chtext secondary"
                                    dangerouslySetInnerHTML={{ __html: textContent.content }}
                                ></p>
                            </CardContent>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default About;
