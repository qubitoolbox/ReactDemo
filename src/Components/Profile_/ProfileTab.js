import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import firstpic from "../../assets/img/sooocoool7.JPG"
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function ProfileTab(props) {
    const classes = useStyles(styles);
    const { ...rest } = props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={firstpic} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h4 className={classes.title}>Osman D. Morales</h4>
                    <h3>Aspiring Software Engineer</h3>
                  
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <Typography paragraph>
                <h3>
                I love the thought of coding. I am passionate with Data. I consume 
                the language of mathematics and passionate about the thought of qubits.
                I reminisce in code and dream in Code...
                </h3>
              </Typography>
              <Typography >
                <h3>
                Below I show a brief summary of the concepts I am knowledgeable about, followed
                by a quick demo of how ML trains and predicts random data.
                </h3>
              </Typography>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
               
              </GridItem>
            </GridContainer>
          </div>
        </div>
        </div>        );
        }