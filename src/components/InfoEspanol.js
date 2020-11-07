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



const InfoEspanol = () =>{
    const classes = useStyles();




    return(
        <>
            <Box m={2}>
                <Typography  variant="h4" component="h4" className={classes.h}>
                    Sobre Mí
                </Typography>
            </Box>
           
            <Container className={classes.grid}>
                <Avatar alt="Christian" src={pic} className={classes.large}/>
                <Card className={classes.root}>
                    <CardContent>
                       <Typography className={classes.words}>
                           Vengo de la cidudad más bonita de América del Sur, Santa Cruz, Bolivia. Me decidí  a moverme a Alemania en 2016, para perseguir mis sueños de vivir en el extranjero y aprender una nueva idioma.
                           Cuando era niño, tenía la oportunidad de vivir en Alemania con mi familia, y me enamoré  del país.
                           Después de un año viviendo en el país por la segunda vez, logré  a hablar el idioma con fluidez, y empecé a trabajar.
                           Necesitaba un desafío más, y me decidí a estudiar. Ahora estoy estudiando algo llamado "Groß- und Außenhandelsmanagement",
                           en alemán, más o menos es como decir manager de importación y exportación. Disfruto la oportunidad de poder aprender en una empresa grande aquí en Hamburgo.
                           Mis intereses personales son viajar, cantar, tocar el ukelele y hacer deporte.
                       </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}



export default InfoEspanol;