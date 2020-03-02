import React, { Component } from 'react'
import Chart from "chart.js";
import { makeStyles } from '@material-ui/core/styles';
import classes from "../../assets/css/LineGraph.module.css";
import Grid from '@material-ui/core/Grid';
import {adata} from 'C:/NewReactResume/resm/src/Components/FirstML/AnotherMl.js';



export default class LineGraph1 extends Component {

    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: adata.labelsdata1,    
                datasets: [
                    {
                        label: "Gradient Descent",
                        data: adata.loss
                    }
                ]
            },
            options: {
                //Customize chart options
                width : '400px',
                height: '350px',
                animation: {
                    duration: 10000
                    
            }
            }
        });
    }
    render() {
        return (
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
             /> 
            </div>
        )
    }
}