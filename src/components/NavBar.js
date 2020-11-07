import React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from "@material-ui/core/styles";


const navLinks = [
    { title: `My CV`, path:`/cv`},
    { title: `En Español`, path: `/spanish`}
    
]


const useStyles = makeStyles({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    appBar: {
        background: `#0A2342`
    }
});


const NavBar = () => {

    const classes = useStyles();
    
    return(
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
             <Container className={classes.navbarDisplayFlex}>
                <a href="/" className={classes.linkText}>
                <IconButton edge="start" color="inherit" aria-label="game">
                    <HomeIcon fontSize="large" />
                </IconButton>
                </a>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {navLinks.map(({ title, path}) =>(
                            <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                            </a>
                ))}
                    </List>
             </Container>
            </Toolbar>
        </AppBar>
    
    
        )}
    // can take out maxWidth="md" to change how the icons line up
    //<AppBar style={{ background: '#2E3B55' }}>
    export default NavBar;