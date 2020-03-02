import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import thePic from '../../assets/img/dataset_.JPG';
//import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(theme => ({
    root: {
      marginTop:theme.spacing(10),
      marginRight:theme.spacing(-14)
    }
  }));

export default class DataS extends React.Component{

    constructor (props){
        super(props);
        
    }
    render(){
        
        return (
                <div>
                    <img src={thePic} width={250} height={100}  ></img>
                </div>
            );
    }
}