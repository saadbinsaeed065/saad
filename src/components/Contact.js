import React, { useState ,useRef } from "react";
import {RiLinkedinBoxLine} from "react-icons/ri"
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Grid,TextField ,Button} from '@mui/material'
import { useFormik } from "formik";
import * as yup from 'yup'
import Stack from '@mui/material/Stack';
import emailjs from 'emailjs-com'




const validationSchema = yup.object({
  name: yup
      .string('Enter your name')
      .required('Name is required'),
  email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  phoneNumber: yup
      .number('Enter your number')
      .typeError("Enter valid Phone Number")
      .required('Required'),
  message: yup
      .string('Enter your message')
      .required('Message is required'),
  
});

const Contact = () => {

//   const formik = useFormik({
//     validationSchema: validationSchema,
//     initialValues: {
//         name: '',
//         email: '',
//         phoneNumber:'',
//         message:'',
//          MediaKeyMessageEvent:''
//     },
//     onSubmit: values => {
//       // values.preventDefault()
//         emailjs.sendForm(
//           'service_0x40cjt',
//           'template_qg9fjqc',
//           values.target,
//           'IDFK8TLSxHPSdBMxU')
//           .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         }); 
//     }
// });


const [data, setdata] = useState({name:'',email:'',phoneNumber:'',message:'',disabled:true})

const handleSubmit=(e) =>{
 
   e.preventDefault();
    emailjs.sendForm(
      'service_0x40cjt',
      'template_qg9fjqc',
      e.target,
      'IDFK8TLSxHPSdBMxU')
  
      .then(res => {
        console.log(res);
    }).catch(err=>console.log(err));
    alert('Message Sent')
    setdata({name:'',email:'',phoneNumber:'',message:''})
}

                                                                  

const handlechange=(e)=>{
  
if(e.target.value.length>=1){
  
  setdata({
    disabled:false
  })
 
}
}

  return (
    <>
<Grid  container className="contact container">
   <Grid item xs={12}>
       <h1 className="contacthead">Contact Here</h1>
   </Grid>

<Grid item xs={12}  >

<div className="contactform">
<form  onSubmit={handleSubmit}>

            <Stack spacing={2}>

            <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
           
            onChange={handlechange}
            name="name"
            value={data.name}
            // value={formik.values.name}
            // onChange={formik.handleChange}

            // error={formik.touched.name && Boolean(formik.errors.name)}
            // helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Email"
            variant="outlined"

            onChange={handlechange}
            name="email"
            value={data.email}
            // value={formik.values.email}
            // onChange={formik.handleChange}

            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            />

           
         
            <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label=" Number"
            variant="outlined"

            onChange={handlechange}
            name="phoneNumber"
            value={data.phoneNumber}
            // value={formik.values.phoneNumber}
            // onChange={formik.handleChange}

            // error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            // helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

          
            <TextField
            fullWidth
            color="primary"
            id="filled-basic"
            label="Message"
            variant="outlined"
            size=""

            onChange={handlechange}
            name="message"
            value={data.message}
            // value={formik.values.message}
            // onChange={formik.handleChange}

            // error={formik.touched.message && Boolean(formik.errors.message)}
            // helperText={formik.touched.message && formik.errors.message}
            />

            <button  disabled={data.disabled}  type="submit"><span>Send</span></button>
            </Stack>

    </form>

</div>
        


</Grid>

    <Grid item xs={12}>
              <div >
                      
                      {/* <div className="contactSection-logo">
                        <img src="/images/logo.png" alt="" />
                      </div> */}
                      
                      <ul className="contactCircles">
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
                  
            </div>
              
     </Grid>
    
     
    
 
 </Grid>

   
    </>
  );
};

export default Contact;
