import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1526029655228-b7ee496c7819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "3rem",
        textTransform: "uppercase"
    }

})


const Jumbotron = () => {
    const classes= useStyles();




    return(
        <>
        <Box className={classes.hero}>
            <Box>
                Christian Reimers Ferreira
            </Box>
        </Box>
        </>
    )
};


export default Jumbotron;