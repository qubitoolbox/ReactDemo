import React from 'react'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Toggle from '@material-ui/lab/ToggleButton'
import Input from '@material-ui/core/InputBase'
import FilledInput from '@material-ui/core/FilledInput'
import Checkbox from '@material-ui/core/Checkbox'
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.js"

//import {Slider} from 'react-native';

const anotherStyle = makeStyles(customInputStyle)
const useStyles = makeStyles(theme => ({
    root: {
      marginTop:theme.spacing(10),
      marginLeft:theme.spacing(10),
      marginRight:theme.spacing(10),
      marginBottom:theme.spacing(10)
    },
    grid1: {
        marginTop:theme.spacing(10),
        marginRight:theme.spacing(18)
      },
      grid2: {
        marginTop:theme.spacing(10)
      }
  }));

var dat;


export default class Play extends React.Component{

//this.classes = useStyles();
  constructor(props) {

    super(props);
    this.inputField = React.createRef()
    this.state = {
      eta: 50,
      dout: null,
      momemtum: null,
      epoch: null,
      bsize: null,
      ioptim: null,
      inLoss:null,
      inMetric: null,
      unitX: null,
      shapeX: null,
      unitY: null,
      shapeY: null,
    };
    
    //this.publish = this.publish.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
      this.setState(()=>{
        return {
          eta: parseFloat(value),
        }
      });

      //dat = this.state.target.value
      this.publish()
    }
  
    publish() {
      console.log( this.state.eta );
      //console.log(this.dat)
    }

      render(){
        const {eta} = this.state
        return (
            <div>
                <Container display="flex" >
                    <Grid container>
                      
                      
                       <Grid item md={4} >
                         <Container>
                       <h4>Learning Rate</h4>
                           <Slider step={0.00003} valueLabelDisplay={"auto"} onValueChange={this.handleChange.bind(this)} value={eta}/>
                      <Box fontSize={26}>Dropout</Box> 
                            
                            <Toggle disabled={false}>  
                              
                              <Switch size={'medium'}/>
                          
                            </Toggle>
                          
                          <Slider onChange={dout=>this.handleChange(dout)} color={'secondary'}valueLabelDisplay={'auto'} marks={true} min={0} max={1} step={0.018} />

                          <h4>Momentum</h4> 
                          <Toggle>  
                              
                              <Switch/>
                          
                            </Toggle>
                            
                          <Slider/>
                      <h4>Epochs</h4>
                           <Slider  valueLabelDisplay={'auto'} marks={true} min={1} max={100} step={10}/>
                      <h4>batch Size</h4>
                           <Slider valueLabelDisplay={'auto'} marks={true} min={0} max={32} step={2}/>
                        </Container> 
                        </Grid>
                        
                        
                        <Grid item md={4}>
                          <Container>
                            <h4>Input Optimizer</h4>
                            <FilledInput value={this.state.onLoss} onChange={this.handleChange}/>
                            <input 
                                type="text" 
                                name="ioptim" 
                                placeholder="Input Optimizer" 
                                value={this.state.ioptim}
                                onChange={ this.handleChange } 
                              />
                            <h4>Input Loss</h4>
                            <Input defaultValue={'categoricalCrossentropy'}/>
                            <h4>Input Metrics</h4>
                            <FilledInput defaultValue={'accuracy'}/>
                            <h5>Optional Choose network Type, LSTM, Etc</h5>
                            <Button onClick={ this.publish }>Publish</Button>
                          </Container>
                        
                        </Grid>
                        
                        
                        <Grid item md={4} >
                          <Container>
                            <h4>Units Input x</h4>
                              <Slider valueLabelDisplay={'auto'} marks={true} min={1} max={12} step={1}/>
                            <h4>Multiple Layers?</h4>
                              <Slider valueLabelDisplay={'auto'} marks={true} min={1} max={5} step={1}/>
                            <h4>Input Shape x</h4>
                              <Slider/>
                            <ToggleButtonGroup>
                                <Toggle>
                                  <Toggle>
                                  <Switch/>
                                </Toggle>
                                </Toggle>
                                
                                <Toggle/>
                                <Toggle/>
                                <Toggle/>
                                <Toggle/>
                            </ToggleButtonGroup>
                            <h4>Units Input y</h4>
                            <Slider valueLabelDisplay={'auto'} marks={true} min={1} max={15} step={1}/>
                            <h4>Input Shape y</h4>
                            <Slider valueLabelDisplay={'auto'} marks={true} min={1} max={15} step={1}/>
                            <Slider/>
                        </Container>
                        </Grid>
                    </Grid>
                    <Checkbox/>
                </Container>
            </div>
        )
      }
}

    
    










    
