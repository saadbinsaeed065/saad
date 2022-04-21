import React from "react";
import Avatar from '@mui/material/Avatar';
import {RiLinkedinBoxLine} from "react-icons/ri"
import {NavLink as Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "Hi, I'am  ",
    text:
      " I'am Saad, professional MERN Stack Web Developer with long time \
    experience in this field​",
    image: "/images/saad.jpg",
  });
  return (
   
    <Grid  container className="banner container">
    
    <div className="mainservice">  
         <Grid item xs={12} sm={6}>
                   
                      <div className="header__section">
                  
                        <ul className="header__ul">
                          <li>
                          <a href="https://www.facebook.com/saadrajpoot.boxer" target="_blank">
                          <FaFacebookF className="headerIcon"  />
                        </a>
                          
                          </li>

                          <li>
                          <a href="">
                          <FaGithub className="headerIcon" />
                        </a>
                          
                          </li>

                          <li>
                        <a href="https://www.linkedin.com/in/saad-bin-saeed-15756a1bb/" target="_blank">
                        <RiLinkedinBoxLine className="headerIcon" />
                        </a>
                          
                          </li>
                          
                          <li>
                          <a href="https://www.instagram.com/saadbinsaeed_/" target="_blank">
                            <FaInstagram className="headerIcon" />
                          </a>
                            
                      
                          
                          </li>
                        </ul>
                        <div className="banner__info">
                              <h1>{state.title} <span className="high_name">Saad</span></h1>
                              <p>{state.text}</p>
                        </div>
                        <div className="btn">
                        <Link to="/contact"  >
                            <button ><span>Contact Me</span> </button>
                        </Link>
                          
                          &nbsp;&nbsp;&nbsp;
                          <a href="images/saadcv.pdf" download='Resume'>
                              <button  ><span>Download Resume</span> </button>
                          </a>
                        </div>
                
                      
                      </div>
                   
          </Grid>
         
          <Grid item xs={12} md={6}>
              <div className="banner__img">
                <Avatar
                                      alt="Remy Sharp"
                                      src={state.image}
                                      // sx={{ width: 500, height: 500 }}
                                      variant="round"
                                      className="banimg"
                                  
                  />                   
              </div>
      </Grid>
         
  </div>    
 </Grid>
    

  );
};

export default Banner;
