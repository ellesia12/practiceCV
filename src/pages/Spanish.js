import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

import Jumbotron from "../components/Jumbotron";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import InfoEspanol from "../components/InfoEspanol";

const useStyles = makeStyles({
    button: {
        color: "white",
        backgroundColor: "#040405",
        padding: 10,
        marginBottom: 15
    }
})

const Spanish = () =>{

const classes = useStyles();

    return(
        <>
         <Jumbotron /> 
         <InfoEspanol />
         <Link to="/cv">
            <Button variant="contained" className={classes.button} >
                Check Out My CV
            </Button>
            </Link>
        </>
    );
};

export default Spanish;