import React from 'react'
import {Container, Box, Paper, Typography} from '@material-ui/core/'
import {makeStyles} from '@material-ui/styles/'
import { blueGrey, brown } from '@material-ui/core/colors/';

const useStyles = makeStyles(theme => ({
    
    bgaColor:{
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "green",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
    }
    ,thefont:{
        fontSize: "28px"
    }
    
    
  }));


export default function Maint(){
const classes = useStyles()
    return(<div >
        <Box className={classes.bgaColor}>
            <Typography className={classes.thefont}>This page is under construction</Typography>
            
        </Box>

    </div>)


}