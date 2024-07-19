import React, { useRef } from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import LeftArrow from '@mui/icons-material/KeyboardArrowLeft';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';
import "../styles/Pictures.scss";

interface MediaSliderProps {
    images: string[];
    auto: boolean;
}

const MediaSlider: React.FC<MediaSliderProps> = ({ images , auto}) => {
    const slider = useRef<Slider>(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: auto,
        pauseOnHover: true,
        arrows: false,
    };

    const renderMedia = (image: string, index: number) => {
        const key = `${image}-${index}`;
        return (
            <Grid className="pimg" key={key}>
                {image.includes("mp4") ? (
                    <video autoPlay loop muted>
                        <source src={image} type="video/mp4" />
                    </video>
                ) : (
                    <img src={image} alt={image} />
                )}
            </Grid>
        );
    };

    return (
        <Grid container className="media-slider">
            <Grid item xs={1} className="buttonHolderPrev">
                <button type='button' className="slider-btn button-back"
                    onClick={() => slider?.current?.slickPrev()}>
                    <LeftArrow className="arrow-icon" />
                    <LeftArrow className="arrow-left-appear arrow-icon" />
                </button>
            </Grid>
            <Grid item xs={10}>
                <Slider ref={slider} {...settings}>
                    {images.map(renderMedia)}
                </Slider>
            </Grid>
            <Grid item xs={1} className="buttonHolderNext">
                <button type='button' className="slider-btn button-next"
                    onClick={() => slider?.current?.slickNext()}>
                    <RightArrow className="arrow-icon" />
                    <RightArrow className="arrow-right-appear arrow-icon" />
                </button>
            </Grid>
        </Grid>
    );
};

export default MediaSlider;
