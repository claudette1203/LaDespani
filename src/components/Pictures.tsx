import { Card, CardContent, Grid } from "@mui/material";
import MediaSlider from "./MediaSlider";
import "../styles/Pictures.scss";
import { useLanguage } from "./LanguageProvider";

function Pictures() {
    const { language } = useLanguage();

    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg"
    ];

    const textContent = {
        EN: {
            title: "PICTURES",
            content: "The guesthouse offers its guests an unforgettable experience. In addition to the comfort of the rooms, the guesthouse is equipped with a swimming pool, sauna, a beautiful covered terrace in the garden and other facilities for relaxation."
        },
        RO: {
            title: "POZE",
            content: "Pensiunea La Despani oferă oaspeților săi o experiență de neuitat. Pe lângă comfortul camerelor, pesiunea este dotată cu piscină, saună, o terasă frumoasă acoperită în grădină și alte facilități pentru relaxare."
        }
    };

    const content = textContent[language];

    return (
        <>
            <Grid container className="pictures" id="pictures">
                <Grid item xs={12} className="ptitle">
                    <h1 className="chtitle">{content.title}</h1>
                </Grid>
                <Grid item md={10} xs={11} className="pcontainer">
                    <Card className="card">
                        <CardContent>
                            <p 
                                className="chtext secondary"
                                dangerouslySetInnerHTML={{ __html: content.content }}
                                >
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item container md={12} xs={12} className="pcontainer">
                    <MediaSlider images={images} auto={true} />
                </Grid>
            </Grid >
        </>
    )
}

export default Pictures;
