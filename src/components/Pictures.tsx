import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import MediaSlider from "./MediaSlider";
import "../styles/Pictures.scss";

function Pictures() {
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

    return (
        <>
            <Grid container className="pictures" id="pictures">
                <Grid item xs={12} className="ptitle">
                    <h1 className="chtitle">PICTURES</h1>
                </Grid>
                <Grid item md={10} xs={10} className="pcontainer">
                    <Card className="card">
                        <CardContent>
                            <p className="chtext secondary">
                                Pensiunea La Despani oferă oaspeților săi o experiență de neuitat. Pe lângă comfortul camerelor, pesiunea este dotată cu piscină, saună o terasă frumoasă acoperită în grădină și alte facilități pentru relaxare.
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
