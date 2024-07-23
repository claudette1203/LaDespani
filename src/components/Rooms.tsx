import { Card, CardContent, Grid } from "@mui/material";
import "../styles/Rooms.css";
import MediaSlider from "./MediaSlider";

function Rooms() {
    const rooms = [
        {
            images: ["1_1.jpg", "1_2.jpg", "1_3.jpg", "1_4.jpg"],
            description: {
                title: "Room 1",
                text: "Un dormitor cu pat dublu, TV, și baie proprie dotată cu cadă.",
            },
        },
        {
            images: ["2_1.jpg", "2_2.jpg", "2_3.jpg", "2_4.jpg"],
            description: {
                title: "Room 2",
                text: "Un dormitor cu pat dublu, TV, și baie proprie dotată cu cadă.",
            },
        },
        {
            images: ["3_1.jpg", "3_2.jpg", "3_3.jpg", "3_4.jpg", "3_5.jpg"],
            description: {
                title: "Room 3",
                text: "Un dormitor cu pat dublu, TV, și baie proprie dotată cu cadă. De asemeni, are și un balcon cu vedere la grădină.",
            },
        },
        {
            images: ["4_1.jpg", "4_2.jpg", "4_3.jpg", "4_4.jpg"],
            description: {
                title: "Room 4",
                text: "Un dormitor cu pat dublu, TV, și baie proprie dotată cu cadă. De asemeni, are și un balcon cu vedere la grădină.",
            },
        },
    ];

    return (
        <Grid container className="rooms" id="rooms">
            <Grid item xs={12} className="ptitle">
                <h1 className="chtitle">ROOMS</h1>
            </Grid>
            {rooms.map((room, index) => (
                <Grid item md={5} xs={10} className="pcontainer" key={index}>
                    <Grid item container md={12} xs={12} className="pcontainer">
                        <MediaSlider images={room.images} auto={false} />
                    </Grid>
                    <Card className="card">
                        <CardContent>
                            <h1 className="chsubtitle secondary underlined">{room.description.title}</h1>
                            <p className="chtext secondary">{room.description.text}</p>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Rooms;
