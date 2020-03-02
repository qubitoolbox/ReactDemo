import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Content from '../Content/Content.js'
import Content1 from '../Content/Content1.js'
import Content2 from '../Content/Content2.js'
import Content3 from '../Content/Content3.js'
import Content4 from '../Content/Content4.js'
import Content5 from '../Content/Content5.js'


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
    background: 'linear-gradient(45deg, #FFF 40%, #FFF 90%)',
    marginLeft: theme.spacing(5),
    boxShadow: '0 3px 5px 2px rgba(25, 115, 154, .4)',
    border: 0,
    borderRadius: 3,
  },
  grid2: {
    background: 'linear-gradient(45deg, #FFF 40%, #FFF 90%)',
    marginLeft: theme.spacing(15),
    boxShadow: '0 3px 5px 2px rgba(25, 115, 154, .4)',
    border: 0,
    borderRadius: 3,
  },

  grid3: {
    background: 'linear-gradient(45deg, #FFF 40%, #FFF 90%)',
    marginLeft: theme.spacing(17),
    boxShadow: '0 3px 5px 2px rgba(25, 115, 154, .4)',
    border: 0,
    borderRadius: 3,
  }, 
  typo1: {
    marginTop: theme.spacing(12),
    marginRight: theme.spacing(15)
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div >
      <div>
        <Grid container spacing={10} className={classes.theintro}>
          
          <Grid item xs={3} className={classes.grid1}>
            <Content/>
          </Grid>

          <Grid item xs={3} className={classes.grid2} >
            <Content1/>
          </Grid>
          
          <Grid item xs={3} className={classes.grid3}>
            <Content2/>
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.theintro}>
          
          <Grid item xs={3} className={classes.grid1}>
            <Content3/>
          </Grid>
          <Grid item xs={3} className={classes.grid2} >
            <Content4/>
          </Grid>
          <Grid item xs={3} className={classes.grid3}>
            <Content5/>
          </Grid>
        </Grid>
      </div>
        
    </div>
  );
}
