/* eslint-disable */
import React, { useContext, useState } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import { useAuth } from "../Components/context/AuthContext";
import { Redirect } from "react-router-dom";
import StripeContainer from "./StripeContainer";

import { SocketContext } from "../SocketContest";

const useStyles = makeStyles((theme) => ({
    video: {
        width: "550px",
        [theme.breakpoints.down("xs")]: {
            width: "300px",
        },
    },
    gridContainer: {
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },
    paper: {
        padding: "10px",

        margin: "10px",
    },
}));

const VideoPlayer = () => {
    const [successGlobal, setSuccessGlobal] = useState(false);

    const { currentUser } = useAuth();

    const { callAccepted, myVideo, userVideo, callEnded, stream } =
        useContext(SocketContext);
    const classes = useStyles();

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            {false ? (
                <StripeContainer setSuccessGlobal={setSuccessGlobal} />
            ) : (
                <Grid container className={classes.gridContainer}>
                    {stream && (
                        <Paper className={classes.paper}>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                ></Typography>
                                <video
                                    playsInline
                                    muted
                                    ref={myVideo}
                                    autoPlay
                                    className={classes.video}
                                />
                            </Grid>
                        </Paper>
                    )}
                    {callAccepted &&
                        !callEnded(
                            <Paper className={classes.paper}>
                                <Grid item xs={12} md={6}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                    ></Typography>
                                    <video
                                        playsInline
                                        ref={userVideo}
                                        autoPlay
                                        className={classes.video}
                                    />
                                </Grid>
                            </Paper>
                        )}
                </Grid>
            )}
        </div>
    );
};

export default VideoPlayer;
