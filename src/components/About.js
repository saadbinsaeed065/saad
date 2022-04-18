import React from "react";
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material'

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "I'AM a MERN Stack Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Saad Bin Saeed" },
    { id: 2, title: "Email:", text: "saadbinsaeed259@gmail.com" },
    { id: 3, title: "Phone:", text: "+923458894941" },
    { id: 4, title: "Linkedin", text: "saad-bin-saeed-15756a1bb" },
  ]);
  return (
    <>
    <Grid  container className="about container">
    
                  <Grid item xs={12} >
                        <div className="common">
                              <h1 className="mainHeader">{header.subHeader}</h1>
                              <p className="mainContent">{header.text}</p>
                          
                        </div>
                   </Grid>
     <div className="mainservice">              
                <Grid item xs={12} sm={6}>
                 
                     <div className="banner__img">
                                <Avatar
                                      alt="Remy Sharp"
                                      src='/images/saad.jpg'
                                      sx={{ width: 500, height: 500 }}
                                      variant="circular"
                                      className="banimg"
                                                    
                                    /> 
                      </div>
                 
                        
                   
               </Grid>

               <Grid item xs={8} sm={6}>
             
                      <div className="about__info">
                            <h1 style={{color:'orange'}}>HI There!</h1>
                            <div className="about__info-p1">
                                      I'AM Saad, <span style={{color:'greenyellow'}}>MERN Stack Developer</span> , currently doing my Bachelor's in 
                                      Computer Science (BSCS) from <span style={{color:'greenyellow'}}>Bahria University Karachi, Pakistan</span>.
                            </div>
                            <div className="about__info-p2">
                                      I build Static and Dynamic Websites, and work on MERN Stack responsive websites 
                                      based on ReactJS, MongoDB, Express and NodeJS.
                            </div>
                            <div className="info__contacts">
                              <div className="row">
                                        {state.map((info) => (
                                        <div className="col-6">
                                        <strong>{info.title}</strong>
                                        <p style={{color:'yellow'}}>{info.text}</p>
                              </div>
                                ))}
                              </div>
                            </div>
                      </div>
                 
          </Grid>
    </div>
      
      </Grid>
   
    </>
  );
};

export default About;
