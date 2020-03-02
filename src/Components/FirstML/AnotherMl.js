import React from "react";
import * as tf from '@tensorflow/tfjs';
import LineGraph from '../../Components/ChartJs/Charts.js'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import aPic from 'C:/NewReactResume/resm/src/assets/img/indicator.gif'
//import Play from '../../Components/PlayGround/PlayGround.js'
import Graphing from '../../Components/Graphs/Graphing.js'
import CustomLinearProgress from '../../Components/LinearProgress/LinearProgress.js'
export var theindata

export var adata = {data:[0], loss: [0], flagtrain: false, labelsdata:[], labelsdata1:[]}

export var thelabels;

const model = tf.sequential({
    layers: [
      tf.layers.dense({inputShape: [4], units: 4, activation: 'relu'}),
      tf.layers.dense({units:25, activation:'relu'}),
      //tf.layers.dense({units:10, activation:'relu'}),
      tf.layers.dense({units: 4, activation: 'relu'}),
    ]
   });
var prediction_;
export var data_;
var labels;
var vlafs;
var dummy;
var dummy1;

const useStyles = makeStyles(theme => ({
    root: {
      marginTop:theme.spacing(10),
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#FFF',
    },
  }));

  model.compile({
    optimizer: 'adam',
    learningrate: 0.003,
    dropout: 0.3,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });
export var state;

export default class AnotherMl extends React.Component{
    
    constructor(props) {

        super(props);

      }
        state = {
            isTfReady:false,
            trained:false,
            isitraining: false,
            x : null, 
            y : null,
            loss: null,
            measure: null,
            measure1:null,
            datasets : null, 
            counter : 0,
            prediction:null
        }  

        theindata  = {}
    
    async componentDidMount() {
        // Wait for tf to be ready.
        await tf.ready();
        // Signal to the app that tensorflow.js can now be used.
        this.setState({isTfReady: true})
        this.setState({trained: false})
        await this.trainTheModel()
    }
    trainTheModel(){

        // Generate dummy data.
        data_ = tf.randomNormal([100, 4]);
        labels = tf.randomUniform([100, 4]);
        
        this.setState({x:data_.toString()})
        this.setState({y:labels.toString()})
        this.setState({isitraining:true})
        let counter = 0;
        
        var i = 1
        var flag = false
        var index = 0
        arr = [0]

        function onBatchEnd(batch, logs) {
            
            console.log(`Accuracy: ${logs.acc}`,  `loss: ${logs.loss}`,  `epoch: ${counter}`);
            flag = false

            for (i ; !flag; )
            {
                if (!adata.data[1] && !adata.loss){
                    adata.data[1] = parseFloat(logs.acc)
                    adata.loss[1] = parseFloat(logs.loss)
                    adata.labelsdata[1] =  i
                    adata.labelsdata1[1] = i
                }
                else if (!adata.data[i] && !adata.loss[i]){
                    
                    adata.data[i] = parseFloat(logs.acc)
                    adata.loss[i] = parseFloat(logs.loss)
                    adata.labelsdata[i] =  i
                    adata.labelsdata1[i] = i
                }else
                {
                    
                    adata.data[i+1] = parseFloat(logs.acc)
                    adata.loss[i+1] = parseFloat(logs.loss)
                    adata.labelsdata1[i+1] =  i
                }
                i += 1
                
                index += 1
                flag = true
            }
            counter += 1;
        }
        

        function updateChart(logs) {
            
            //console.log('Accuracy', logs.acc, 'loss', logs.loss, 'epoch', counter);
        }

        
        model.fit(data_, labels, {
        epochs: 15, 
        batchSize: 10,
        callbacks: {onBatchEnd}
        }).then(info => {
            this.setState({isitraining:false})
            this.setState({trained:true})
            this.setState({flag:true})
            this.thePrediction()
            console.log(adata)
        
        });

    }
    

    async thePrediction(){

        if(this.state.trained)
            {
                prediction_ = await model.predict(tf.randomNormal([10, 4]));
                this.setState({prediction: prediction_.toString(prediction_.print())})
              
            }
        this.randomm()
        
        //console.log(model.getWeights().toString())
        
    }

    async randomm(){
        for (let index = 0; index < 1; index++){
            adata["flagtrain"] = true
        }
    }
    
    render()
        {
            const { isTfReady, trained, flagged, isitraining, measure, x, y, prediction } = this.state
            var arr1 = []
            
            thelabels = {labels: { labels:["app","app","app","app","app","app","app","app","app","app","app","app",]
            
                }
            }
            return (
            <div>
             <Grid container>
             <Grid item xs={3}>
                 <Card>
                 <CardHeader
        
                    title="Is TensorFlow Ready?"
                        />
                        
                     <CardContent>
                        {this.state.isTfReady?<p>Yes Ready</p>:<p>Not Ready</p>}
                    </CardContent>
                </Card>
               </Grid>

               <Grid item xs={3}>
                   <Card>
                   <CardHeader
        
                        title="Is the model Training?"
                            />
                    <CardContent>
                        {this.state.isitraining?<p>Yes Training...</p>:<p>Not Training</p>}
                    </CardContent>
                    </Card>
                </Grid>

                <Grid container>
                
                    <Grid item md={12}>
                        <Card>
                            <CardContent>
                            <CardHeader
        
                                title="Training Data"
                                    />
                                {this.state.x? <p>{this.state.x} </p>: <div><p>Loading</p><CustomLinearProgress /></div>}
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container>
                
                <Grid item md={12}>
                    <Card>
                        <CardContent>
                        <CardHeader
    
                            title="Target Data"
                                />
                            {this.state.y? <p>{this.state.y} </p>: <div><p>Loading</p><CustomLinearProgress /></div>}
                            
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                
                
                <Grid container>
                
                    <Grid item md={12}>
                        <Card>
                            <CardContent>
                            <CardHeader
        
                                title="Prediction Results"
                                    />
                                {this.state.prediction && this.state.trained? <p>{this.state.prediction} </p>: <div><p>Loading</p><CustomLinearProgress /></div>}
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                <Grid item md={12}>
                    <Card>
                    <CardHeader
        
                        title="Weights from Model"
                            />
                        <CardContent>
                            
                            {this.state.trained?<p>{model.getWeights().toString()}</p>:<div><p>Loading</p><CustomLinearProgress /></div>}
                        </CardContent>
                    </Card>
                </Grid>

                </Grid>
                <Grid container>
                    <Grid item md={12}>
                        <Card>
                        <CardHeader
            
                            title="Visualized Metric"
                                />
                            <CardContent>
                                {this.state.trained?<Graphing/>:<div><p>Loading</p><CustomLinearProgress /></div>}
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                
            </div>
            );
        }
}
export var arr