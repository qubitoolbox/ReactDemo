import React, { Component } from 'react'
import Chart from "chart.js";
//import { makeStyles } from '@material-ui/core/styles';
//import classes from "../../assets/css/LineGraph.module.css";
//import Grid from '@material-ui/core/Grid';
import {adata} from '../FirstML/AnotherMl.js';


//const data = {data:[1,2,3,3,4]}
export default class LineGraph extends Component {

    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        //var progress = document.getElementById('animationProgress')
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                //in tree structured
                labels: adata.labelsdata,
                datasets: [
                    {
                        label:'Accuracy',
                        data: adata.data
                    }
                ]
                ,
                
            },
            options: {
                //Customize chart options
                width : '550px',
                height: '450px',
                animation: {
                    duration: 10000
                    
            }
            }
        });

        
    }
    render() {
        return (
            <div  >
                `<canvas
                id="myChart"
                ref={this.chartRef}
         />
            </div>

        )
    }
}