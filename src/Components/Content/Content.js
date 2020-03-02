import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, orange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import ControlledSlider from '../SliderInput/SliderInput.js'
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    backgroundColor: orange[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BitBucket"
        subheader="March 1st, 2016"
      />
      <CardMedia
        className={classes.media}
        

        title=""
      />
      <svg viewBox="0 0 128 128">
        <path fill="#205081" d="M47.962 108.392c-1.767 0-3.553.436-4.763.89v-6.622a.604.604 0 0 0-.605-.603h-3.57a.6.6 0 0 0-.6.603v22.802c0 .29.21.54.495.592 2.202.402 4.8.542 6.36.542 6.702 0 8.073-2.85 8.073-7.13v-4.99c0-4.04-1.814-6.084-5.39-6.084zm-2.477 14.06c-.904 0-1.652-.035-2.287-.11v-8.92c.983-.44 2.365-.884 3.474-.884 1.352 0 1.904.53 1.904 1.833v5.234c0 1.888-.477 2.848-3.09 2.848zM69.77 108.74h-3.564a.603.603 0 0 0-.603.6v11.294c-1.286.652-3.095 1.328-4.173 1.328-.803 0-1.1-.297-1.1-1.1V109.34c0-.328-.274-.6-.61-.6h-3.562a.6.6 0 0 0-.604.6v11.977c0 3.503 1.38 5.28 4.094 5.28 1.89 0 4.466-.65 6.64-1.672l.262.89c.078.257.31.434.58.434l2.64-.002c.333 0 .603-.27.603-.603V109.34c0-.33-.27-.6-.603-.6zM84.13 122.557a.612.612 0 0 0-.255-.41.615.615 0 0 0-.478-.09c-1.023.234-2.096.36-3.103.36-2.26 0-2.915-.576-2.915-2.566v-4.712c0-1.992.653-2.568 2.914-2.568.538 0 1.877.077 3.103.358a.602.602 0 0 0 .733-.5l.424-2.822a.6.6 0 0 0-.424-.666c-1.375-.405-2.986-.548-3.937-.548-5.39 0-7.588 1.963-7.588 6.78v4.644c0 4.816 2.198 6.78 7.588 6.78 1.308 0 2.817-.21 3.937-.546a.603.603 0 0 0 .424-.667l-.424-2.826zM108.702 108.392c-4.784 0-7.31 2.382-7.31 6.886v4.502c0 4.65 2.37 6.816 7.452 6.816 2.068 0 4.273-.362 6.048-.99a.613.613 0 0 0 .392-.695l-.53-2.55a.607.607 0 0 0-.754-.458c-1.642.463-3.197.69-4.772.69-2.597 0-3.06-.843-3.06-2.604v-.616h8.854a.6.6 0 0 0 .603-.605v-3.282c0-4.84-2.2-7.093-6.923-7.093zm-2.535 7.045v-.578c0-1.68.82-2.464 2.57-2.464 1.936 0 2.323.944 2.323 2.463v.577h-4.893zM22.913 108.733h-3.565a.605.605 0 0 0-.604.603v16.302c0 .334.27.604.604.604h3.565c.34 0 .607-.27.607-.604v-16.302a.602.602 0 0 0-.607-.603zM22.913 102.055h-3.565a.607.607 0 0 0-.604.605v3.07c0 .34.27.606.604.606h3.565a.6.6 0 0 0 .607-.605v-3.07a.604.604 0 0 0-.607-.605zM13.934 113.81c1.478-.812 2.12-1.95 2.12-3.703v-2.398c0-3.512-2.108-5.216-6.433-5.216H.82c-.33 0-.6.27-.6.602v22.54c0 .334.27.604.6.604h9.43c4.198 0 6.608-2.04 6.608-5.597v-2.476c0-2.12-1.077-3.705-2.922-4.356zm-8.803-7.17h3.965c1.795 0 2.045.783 2.045 1.62v2.055c0 1.336-.624 1.906-2.08 1.906h-.857a.605.605 0 0 0-.608.606v2.832c0 .335.27.606.608.606h1.55c1.557 0 2.188.602 2.188 2.08v1.742c0 1.503-.646 2.01-2.57 2.01H5.13V106.64zM36.307 122.777a.6.6 0 0 0-.258-.415.606.606 0 0 0-.484-.083c-.63.156-1.234.242-1.7.242-.882 0-1.273-.384-1.273-1.24v-8.64h3.463c.333 0 .603-.27.603-.603v-2.697a.604.604 0 0 0-.604-.603h-3.463v-4.153a.606.606 0 0 0-.69-.597l-3.566.496a.606.606 0 0 0-.52.6v3.654h-1.944a.605.605 0 0 0-.604.603v2.696c0 .333.27.603.603.603h1.944v9.198c0 3.157 1.657 4.76 4.93 4.76.934 0 2.516-.217 3.55-.576a.6.6 0 0 0 .4-.662l-.39-2.585zM127.384 122.776a.6.6 0 0 0-.74-.497c-.636.155-1.235.242-1.705.242-.88 0-1.278-.385-1.278-1.242v-8.638h3.467a.6.6 0 0 0 .6-.603v-2.697a.6.6 0 0 0-.6-.603h-3.468v-4.154a.59.59 0 0 0-.204-.454.606.606 0 0 0-.482-.143l-3.565.495a.605.605 0 0 0-.52.597v3.658h-1.942c-.33 0-.603.27-.603.603v2.696c0 .33.273.602.603.602h1.942v9.2c0 3.154 1.66 4.756 4.933 4.756.936 0 2.515-.216 3.55-.574a.606.606 0 0 0 .402-.662l-.39-2.586zM100.838 125.234l-4.767-7.87 4.6-7.75a.602.602 0 0 0-.52-.912h-3.937a.603.603 0 0 0-.523.302l-4.375 7.584v-13.925a.603.603 0 0 0-.604-.604h-3.564a.604.604 0 0 0-.604.603v22.975c0 .333.27.604.604.604h3.565c.334 0 .605-.27.605-.604v-7.52l4.655 7.79c.11.182.306.294.518.294h3.869a.605.605 0 0 0 .48-.968z"></path><path d="M64 4.43c-22 0-39.624 5.87-39.624 13.156 0 1.92 4.776 29.44 6.665 40.356.848 4.895 13.468 12.072 32.97 12.072l-.01-.058v.058c20 0 32.187-7.177 33.034-12.072 1.89-10.914 6.636-38.436 6.636-40.356C103.67 10.3 86 4.43 64 4.43zm.063 56.742c-6.962 0-12.606-5.645-12.606-12.606 0-6.963 5.644-12.606 12.606-12.606S76.67 41.603 76.67 48.566c0 6.962-5.645 12.606-12.607 12.606zm-.007-39.52c-14.026-.022-25.393-2.458-25.388-5.443.005-2.986 11.38-5.386 25.406-5.364 14.026.022 25.392 2.46 25.388 5.444-.005 2.986-11.38 5.385-25.406 5.363z"></path><path d="M92.565 68.88c-.603 0-1.086.428-1.086.428s-9.767 7.733-27.417 7.734c-17.65 0-27.416-7.734-27.416-7.734s-.483-.427-1.086-.427c-.72 0-1.402.485-1.402 1.552 0 .113.01.225.032.335 1.516 8.112 2.623 13.877 2.818 14.753C38.33 91.488 50.004 96 64.062 96h.002c14.058 0 25.732-4.512 27.055-10.48.193-.875 1.3-6.635 2.817-14.748.02-.11.032-.225.032-.338-.002-1.067-.685-1.553-1.405-1.553z"></path>
      </svg>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            I have gained experience using Bitbucket in a large Corporate Environment.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
