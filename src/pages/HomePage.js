import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from "react-router-dom";

/* import { Document, Page } from 'react-pdf'; */
import Pdf from "../cv.pdf";
import Button from "@material-ui/core/Button";
import Cv from "./Cv";




// import components for the home page here
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import Info from "../components/Info";



// make style for the button
const useStyles = makeStyles({
    button: {
        color: "white",
        backgroundColor: "#040405",
        padding: 10,
        marginBottom: 15
    }
})

const HomePage = ()=>{
    const classes = useStyles();
    


    return(
        <>
           <Jumbotron /> 
           <Info />
            <Link to="/cv">
            <Button variant="contained" className={classes.button} >
                Check Out My CV
            </Button>
            </Link>
        </>

    )
}


export default HomePage;