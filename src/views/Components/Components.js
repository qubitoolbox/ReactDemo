import React from "react";
import Header from "../../Components/Header/Header.js";
import Intro from "../../Components/Intro/Intro.js";
import Parallax from "../../Components/Parallax/Parallax.js";
import HorizontalLinearStepper from '../../Components/Stepper/Stepper.js'
import imag2 from "../../assets/img/logom1.png"
import Container from '@material-ui/core/Container/Container.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Instr from '../../Components/WelcomeGame/PlayInstructions.js'
import ProfileTab from '../../Components/Profile_/ProfileTab.js'
import Maint from '../../Components/Maint/maint.js'

export default function Components() {
  const matches = useMediaQuery('(min-width : 1300px)');

//const classes = useStyles();
  return (
    <span>

      {
        matches
      ?
      <div></div>
      /*
      <div>
        
          <Container>
            <Header/>
            <Parallax image={imag2} />
            <ProfileTab />
            <Intro />
            <Instr />
            
            <HorizontalLinearStepper />
            
          </Container>
          
          </div>
          */
          
        :
        <div><Maint/></div>
        /*
          <div>
          <h1>
            Sorry, Page only Viewable on Desktops/Laptops
            Tablets, need be flipped.
          </h1>
          </div>*/
          }
    </span>
  );
}