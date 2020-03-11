import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import classes from './About.module.css';
import jumboBG from '../../assets/img/jumboBG.jpg';
import profilePic from '../../assets/img/profilePic.jpg';

class About extends Component {
  render() {
    return (
      <div style={{height: '1700px'}}>
        <Jumbotron style={{ backgroundImage: `url(${jumboBG})`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
          <h1 className={classes.Header}>About me</h1>
        </Jumbotron>
        <div className={classes.Summary}>
          <div className={classes.Picture1}></div>
          <h2 className={classes.Title}><strong>Who are these stellar astrologers?</strong></h2>
          <p>I'm baby health goth hella subway tile chillwave, yr leggings farm-to-table tbh. Wayfarers vinyl viral semiotics af. Pickled af raw denim woke, fashion axe franzen distillery tbh marfa waistcoat synth semiotics occupy try-hard meditation. Cold-pressed bicycle rights jean shorts affogato organic, bespoke iceland cardigan disrupt selvage. +1 kitsch seitan paleo pork belly, fam fixie quinoa asymmetrical scenester biodiesel roof party.</p>

          <p>Literally keytar seitan authentic subway tile YOLO. Distillery godard kickstarter schlitz sartorial hoodie microdosing blog cold-pressed VHS. Gentrify sriracha poke adaptogen chia brooklyn occupy keffiyeh chambray squid. Semiotics street art enamel pin poke farm-to-table.</p>

          <p>Kickstarter iPhone gochujang air plant. Neutra put a bird on it roof party twee hammock tumblr shabby chic tacos. Twee PBR&B vegan, pour-over raclette roof party tumblr cred meditation. Sriracha gluten-free prism deep v williamsburg master cleanse craft beer poke vegan hexagon pop-up thundercats forage. Flexitarian gastropub offal, DIY tofu waistcoat cardigan gochujang craft beer semiotics squid affogato taxidermy coloring book. Tousled enamel pin austin williamsburg etsy, humblebrag you probably haven't heard of them. You probably haven't heard of them fixie chicharrones, single-origin coffee readymade lo-fi microdosing retro austin bespoke shoreditch man braid organic.</p>
          <div className={classes.Picture2}></div>
          <p>Lomo mixtape waistcoat semiotics banh mi kinfolk. Asymmetrical everyday carry plaid helvetica tattooed beard. Ramps 3 wolf moon quinoa sriracha, messenger bag artisan next level pickled. Venmo jianbing scenester, ugh palo santo narwhal XOXO everyday carry four loko keytar seitan fanny pack kinfolk fashion axe. Quinoa 90's palo santo man bun, try-hard authentic skateboard kickstarter portland health goth cold-pressed. Vegan hashtag selfies, you probably haven't heard of them narwhal palo santo next level godard hammock meh yr post-ironic. Tofu hashtag pickled cred, edison bulb leggings offal sriracha literally coloring book pop-up gastropub church-key cardigan occupy.</p>
          
          <p>Taxidermy hoodie tilde, activated charcoal meditation mustache messenger bag whatever jean shorts banh mi humblebrag austin 8-bit. Mumblecore vaporware food truck messenger bag everyday carry kitsch ramps man braid biodiesel coloring book yr microdosing dreamcatcher salvia. Flannel trust fund mumblecore, pork belly aesthetic blog celiac yr swag. Vape small batch poke messenger bag gastropub. Bespoke pork belly tumeric seitan put a bird on it normcore vexillologist lo-fi post-ironic.</p>
          
        </div>
      </div>
    );
  }
}

export default About;