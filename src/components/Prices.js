import React from "react";
import { Grid } from '@mui/material'

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Pricing Plan",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: 50,
      msg1: "Static Website",
      msg2: "Based on HTML, CSS ",
       msg3: "JavaScript",
      // msg4: "100 Email Account",
      // msg5: "10 Free Domain Names",
    },
    {
      id: 2,
      heading: "Standard",
      price: 80,
      msg1: "Dynamic Website",
      msg2: "Hosting",
      msg3: "Domain",
      // msg4: "100 Email Account",
      // msg5: "10 Free Domain Names",
    },
    {
      id: 3,
      heading: "Premium",
      price: 160,
      msg1: "CMS or Ecommerce Website",
      msg2: "Hosting",
      msg3: "Domain",
      msg4: "Mongodb DataBase",
      // msg5: "10 Free Domain Names",
    },
  ]);
  return (
<>
    <Grid  container className="services container">
    

    <Grid item xs={12}>
            <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
            </div>
              
     </Grid>
    
     <Grid item xs={12}  >

             <div className="mainservice">
                {state.map((prices) => (
                     <div  key={prices.id}>
                         <div className="price">
                              <div className="priceHeading">${prices.heading}</div>
                              <div className="price__rs">
                                  <span>$</span>
                                  {prices.price}
                              </div>
                              <ul>
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                    <li>{prices.msg3}</li>
                                    <li>{prices.msg4}</li>
                                    <li>{prices.msg5}</li>
                              </ul>
                              <button className="price__btn">
                                  <a href="" >
                                  Purchase
                                  </a>
                              </button>
                         </div>
                     </div>
                 ))}
             </div>
                    
           
        
 </Grid>
    
 
 </Grid>

   
  </>
  );
};

export default Prices;
