import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AnotherMl from 'C:/NewReactResume/resm/src/Components/FirstML/AnotherMl.js'
import LineGraph from 'C:/NewReactResume/resm/src/Components/ChartJs/Charts.js'
import DataS from 'C:/NewReactResume/resm/src/Components/DataSet/DataS.js'
import Gist from 'react-gist'
import Box from '@material-ui/core/Box'
//import Toxicity1 from '../../Components/FirstML/Toxic.js'
//import Play from '../../Components/PlayGround/PlayGround.js'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  agist:{
    maxWidth: '250px',
    maxHeight: '250px',
    width: '250px',
    height: '250px'
  }
}));

function getSteps() {
  return ['Train an ML Model','ML Model View', 'Null', 'Null'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (<div>
          <Typography>
              <h5>This line of code produces training data in back-end</h5>
          </Typography>
          <Box className={useStyles.agist}>
            <Gist id='31c8187702d577bafc707de7e41adb69'/>
          </Box>
          
      </div>)
    case 1:
        //if not object, return skeleton else, the item
      return (<div>
          <AnotherMl />
      </div>)
    case 2:
      return (<div>
       
    </div>);
    default:
      return 'Unknown step';
  }
}


export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">press f12 for more details</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
