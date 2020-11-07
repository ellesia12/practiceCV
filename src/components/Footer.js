import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
/* import { FacebookIcon, TwitterIcon, GitHubIcon } from "@material-ui/icons"; */
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    root: {
        width: `100%`,
        background: `#0A2342`
    },
    navColor: {
        background: `white`
    }
});



const Footer = () => {

    const classes = useStyles();
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    };
    
    
    
    return (
    <>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} >   
          <BottomNavigationAction label="@christianreimersferreira" value="facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="@c.reimers_official" value="instagram" icon={<InstagramIcon />} />
        </BottomNavigation>
    </>
    
    )}
    
    export default Footer;