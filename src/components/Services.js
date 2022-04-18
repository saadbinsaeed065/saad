import React from "react";
import { Grid } from '@mui/material'
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "I'AM MERN Stack Web Developer providing the following services!",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Static Web Development",
      text:
        "I build static Websites based on HTML, CSS, JavaScript and Reactjs",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "MERN Stack Web Development",
      text:
        "I build MERN Websites based on MongoDB database, NodeJS, Express and ReactJS ",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "WordPress Web Development",
      text:
        "I build WordPress websites",
    },
    // {
    //   id: 4,
    //   icon: <FaApple className="commonIcons" />,
    //   heading: "App Devlopment",
    //   text:
    //     "COMING SOON",
    // },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "COMING SOON",
    },
    // {
    //   id: 6,
    //   icon: <FaSearchDollar className="commonIcons" />,
    //   heading: "SEO Expert",
    //   text:
    //     "Lorem Ipsum is simply dummy text of the printing typesetting\
    //     industry. simply dummy",
    // },
  ]);
  return (
    <>
<Grid  container className="services container">
    

    <Grid item xs={12}>
            <div className="common">
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
            </div>
              
     </Grid>
    
     <Grid item xs={12}  >

                <div className="mainservice">
                      {state.map((info) => (
                          
                          <div className="services__box">
                              {info.icon}
                            <div className="services__box-header">{info.heading}</div>
                            <div className="services__box-p">{info.text}</div>
                          </div>
                      
                      ))}
                </div>
                    
           
        
 </Grid>
    
 
 </Grid>

    </>
  );
};

export default Services;
