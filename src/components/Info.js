import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import pic from '../pic.jpg';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 400,
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: '3%'
     
        
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    h:{
        fontFamily: "roboto",
        fontWeight: "900",
        fontSize:"2em",
        textTransform: "uppercase"
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap"
        
    },
    grid:{
        display: 'flex',
        flexWrap: `wrap`,
        justifyContent: `center`,
        alignContent: `space-between`,
      
        paddingBottom: `10%`
    },
    large: {
        width: theme.spacing(45),
        height: theme.spacing(45),
        padding: '5%'
      },
      words: {
          color: 'primary',
          noWrap: 'false',
          fontFamily: 'arial'
      }
}));



const Info = () =>{
    const classes = useStyles();




    return(
        <>
            <Box m={2}>
                <Typography  variant="h4" component="h4" className={classes.h}>
                    About Me
                </Typography>
            </Box>
           
            <Container className={classes.grid}>
                <Avatar alt="Christian" src={pic} className={classes.large}/>
                <Card className={classes.root}>
                    <CardContent>
                       <Typography className={classes.words}>
                           Born and raised in Bolivia South America, I immigrated to Germany in 2016.
                           My family and I lived in Germany for a while when I was younger, and I always dreamed of getting back to my roots and living abroad.
                           I learned German within a year of living here and began working. I decided I needed more of a challenge, so I started studying, "Groß- und Außenhandelsmanagement",
                           roughly translated to import and export management. I am doing my apprenticeship for a food production giant here in Hamburg. 
                           My personal interests include singing, playing ukelele and working out. 
                       </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}



export default Info;