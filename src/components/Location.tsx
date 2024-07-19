import Delete from '@mui/icons-material/Delete';
import Fastfood from '@mui/icons-material/Fastfood';
import LocalLibrary from '@mui/icons-material/LocalLibrary';
import OutdoorGrill from '@mui/icons-material/OutdoorGrill';
import Pool from '@mui/icons-material/Pool';
import SmokeFree from '@mui/icons-material/SmokeFree';
import { Card, CardContent, Grid, SvgIconProps } from '@mui/material';
import { ComponentType, ReactElement } from 'react';
import '../styles/Location.scss';
import React from 'react';

function Location() {
    
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5466300550406!2d25.589231376614887!3d45.65992562035769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b99d0b3bdd5%3A0xbcf6421902e9c51!2sLaDespani!5e0!3m2!1sro!2sro!4v1721387669240!5m2!1sro!2sro";

    return (
        <Grid container className="location">
            <Grid item xs={12}>
                <h1 className="chtitle" id="location">LOCATION</h1>
            </Grid>
            <Grid item xs={12} md={5} className="map">
                <iframe src={location} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={12} md={5} className="location-info">
                <Card className="card">
                    <CardContent>
                        <p className="chtext secondary">
                            Pensiunea este situată
                        </p>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Location;