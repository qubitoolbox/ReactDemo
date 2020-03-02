import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LineGraph1 from "../ChartJs/Charts1.js";
import LineGraph from "../ChartJs/Charts.js";
//import {adata} from 'C:/NewReactResume/resm/src/Components/FirstML/AnotherMl.js';


const useStyles = makeStyles(theme => ({
    root: {
      position: 'center'
    },
    theintro: {
      background: 'linear-gradient(45deg, #F8B8B 40%, #AA8EFF 90%)',
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    },
    grid1: {
      marginLeft: theme.spacing(12),
      boxShadow: '0 3px 5px 2px rgba(25, 145, 154, .4)',
      border: 0,
        borderRadius: 3,
    },
    grid2: {
      marginLeft: theme.spacing(18),
      boxShadow: '0 3px 5px 2px rgba(25, 175, 154, .4)',
      border: 0,
      borderRadius: 3,
    },
  
    grid3: {
      background: 'linear-gradient(45deg, #BF8B 40%, #AA8EFF 90%)',
      marginLeft: theme.spacing(17)
    }
  }));

  export default function Graphing(){

    const classes = useStyles();

    return (

        <div>
          
            <Grid container spacing={10} className={classes.theintro}>
          
                <Grid item xs={4} className={classes.grid1}>
                    <LineGraph/>
                </Grid>

                <Grid item xs={4} className={classes.grid2}>
                    <LineGraph1/>
                </Grid>
            </Grid>
        </div>


    );







  }
