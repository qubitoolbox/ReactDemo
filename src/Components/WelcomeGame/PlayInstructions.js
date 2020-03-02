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
                training. Once finished, it will Display the results of the pre-configures
                model..
                
                
                </Typography>
                <Typography>
                Additionally, two Charts will be diplayed depicting accuracy and
                gradient descent of the once trained model.

                </Typography>
                        </ListItemText>
                    </ListItem>
                </ListItemAvatar>
                <ListItemAvatar>
                    <ListItem>
                        <ListItemText>
                        <Typography>
                    
                        <b>Disclaimer: </b> <i>Due to heaviness in performance nature of
                    training an ML model, I have limited the mode to 100 iterations
                    of batch size 10.. Only for model purposes.
                    </i>
                </Typography>

                <Typography>
                    Happy <i>Training</i>!
                </Typography>
                        </ListItemText>
                    </ListItem>
                </ListItemAvatar>

            </List>

            <Divider/>
            
                

                
        </div>
    )



}