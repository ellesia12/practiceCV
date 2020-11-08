import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: 600
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  
  function getSteps() {
    return ['Education', 'Languages', 'Work Experience', 'Higher Education'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `In 2015 I graduated with my high school diploma from Espirito Santo, with a GPA of 1.7. I also was my class
        president and a member of the football team.`;
      case 1:
        return 'Apon arrival in Germany I began to study German and recieved a diploma for the level B2. My actual German language knowledge is now C1/C2.';
      case 2:
            return 'In my most recent position I worked as a customer service contract specialist for Oticon GmbH. There I was in charge of properly writing contracts, customer support through email, chat and calls. I also was in charge of customer relationship management, and was applauded for my quick learning pace.';
      case 3:
        return `I am currently enrolled in an apprenticeship and working at a company called Mühlenchemie. By working and studying I am able to learn a lot of practical knowledge for the workplace.`;
      default:
        return 'Unknown step';
    }
  }











const Cv = () =>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return(
        <>
         <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Do you want to go through my CV again? </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
        </>
    )
}

export default Cv;