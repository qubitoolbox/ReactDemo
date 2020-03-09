import React from 'react'
import Typography from '@material-ui/core/Typography'
import colors from '@material-ui/core/colors'
import Tooltip from '@material-ui/core/Tooltip/'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import GridItem from '../Grid/GridItem'
import Gist from 'react-gist'
import Box from '@material-ui/core/Box'

export default function Instr(){

    return (

        <div>

        <Divider/>
            <List>
                <ListItemAvatar>
                    <ListItem>
                        <ListItemText>
                        <Typography>
                
                Welcome to my demo of ML in action.
                </Typography>
                        </ListItemText>
                    </ListItem>
                </ListItemAvatar>
                <ListItemAvatar>
                    <ListItem>
                        <ListItemText>
                        <Typography>
                
                All you have to do is press next below. And the model will begin
                training. Once finished, it will Display the results of the pre-configured
                model. .
                
                
                </Typography>
                <Typography>
                Additionally, two Charts will be displayed depicting accuracy and
                gradient descent of the once trained model.

                </Typography>
                <Typography>
                    Lastly, I compare three different models with respect to their error
                    rate. The parameters are as follow:
                </Typography>
                <Grid>
                    <GridItem column="md-2"  >
                            <Gist id='0cc51698aae592771e9e37647b30ab1d'/>
                    </GridItem>
                </Grid>
                        </ListItemText>
                    </ListItem>
                </ListItemAvatar>
                <ListItemAvatar>
                    <ListItem>
                        <ListItemText>
                        <Typography>
                    
                        <b>Disclaimer: </b> <i>Due to heaviness in performance nature of
                    training an ML model, I have limited the model to 100 iterations
                    of batch size 10.. Only for model purposes.
                    </i>
                </Typography>

                <Typography>
                    See the error differences for yourself. Happy <i>Training</i>!
                </Typography>
                        </ListItemText>
                    </ListItem>
                </ListItemAvatar>

            </List>

            <Divider/>
            
                

                
        </div>
    )



}