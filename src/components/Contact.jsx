import { Grid } from "@mui/material";
import React, {useRef} from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import SendMessageIcon from "../assets/icons/send-message.png";
import PaperPlane from "../assets/icons/paper-plane.png";
import Arrow from "../assets/icons/arrow.png";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
   console.log(process.env.REACT_APP_SERVICE_ID);

   const form = useRef();
      
   const sendEmail = (e) => {
      console.log('Sending Email');
      e.preventDefault();

      emailjs
         .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
         })
         .then(
            () => {
               console.log('SUCCESS!');
               form.current.reset();
               toast.success("Message Sent Successfully 👍", {
                  position: "bottom-right",
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            },
            (error) => {
               console.log('FAILED...', error.text);
               toast.error(error.text, {
                  position: "bottom-right",
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            },
         );
    };
    

   return (
      <>
         {/* <ToastContainer position='bottom-right' /> */}
         <section id="contact" className="bg-[#212121]">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 lg:py-20">
               <h2 className="text-accent bg-transparent pb-12 text-end mr-4">
                  Contact Me
               </h2>
               <h3 class="font-bold text-3xl lg:text-5xl tracking-tight mb-20 text-end ">
                  Shoot me a Mail 📧
               </h3>
               <Grid
                  container
                  columnSpacing={7}
                  rowSpacing={8}
                  justifyContent="center"
               >
                  <Grid item xs={12} lg={6} className="relative">
                     <div className="mt-6">
                        <img src={PaperPlane} alt="Paper Plane" className="w-14 absolute top-8 left-10 " />
                        <img src={Arrow} alt="Paper Plane" className="w-10 absolute top-[290px] right-28 hidden md:block" />
                        <h3 className="font-normal text-3xl lg:text-3xl -tracking-normal mb-10 max-w-5xl mx-auto text-center text-accent">
                           Have a question or want to work together? <br />
                           Send me a message or Find me in:
                        </h3>
                        <div className="flex gap-4 items-center justify-center mb-10">
                           <a href="https://www.facebook.com/prwsantmangayak/" target='_blank' rel='noreferrer' className="text-xl border-2 border-slate-400 rounded-md p-2 hover:scale-110 hover:-rotate-18 transition-transform duration-200">
                              <FaFacebookF />
                           </a>
                           <a href="https://x.com/prashantmgk" target='_blank' rel='noreferrer' className="text-xl border-2 border-slate-400 rounded-md p-2 hover:scale-110 hover:-rotate-18 transition-transform duration-200">
                              <FaXTwitter />
                           </a>
                           <a href="https://www.linkedin.com/in/prashant-gayak-927a67195/" target='_blank' rel='noreferrer' className="text-xl border-2 border-slate-400 rounded-md p-2 hover:scale-110 hover:-rotate-18 transition-transform duration-200">
                              <FaLinkedinIn />
                           </a>
                           <a href="https://www.instagram.com/prashantmgk/" target='_blank' rel='noreferrer' className="text-xl border-2 border-slate-400 rounded-md p-2 hover:scale-110 hover:-rotate-18 transition-transform duration-200">
                              <FaInstagram />
                           </a>
                        </div>
                        <h4 className="font-normal text-2xl lg:text-lg -tracking-tighter mb-10 max-w-5xl mx-auto text-center">
                           for quicker response :)
                        </h4>
                     </div>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                     <form ref={form} onSubmit={sendEmail}>
                        <Grid container rowSpacing={4} justifyContent="start">
                           <Grid item xs={12}>
                              <input type="text" id="name" name="from_name" placeholder="Full Name" required className="w-full p-2 px-4 text-slate-800 text-lg rounded-md" />
                           </Grid>
                           <Grid item xs={12}>
                              <input type="email" id="email" name="from_email" placeholder="YourMail@email.com" required className="w-full p-2 px-4 text-slate-800 text-lg rounded-md"/>
                           </Grid>
                           <Grid item xs={12}>
                              <textarea id="message" name="message" required rows={4} placeholder="Write your Message!" className="w-full p-2 px-4 text-slate-800 text-lg rounded-md" />
                           </Grid>
                           <Grid item xs={12} className="flex justify-start">
                              <button type="submit" className="btn btn-primary group btn-wide bw-on-hover" title="Send Me Message"> 
                                 <img src={SendMessageIcon} alt="Send Message Icon" style={{ width: '20px', background: 'transparent' }} /> Send Message
                              </button>
                           </Grid>
                        </Grid>
                     </form>
                  </Grid>
               </Grid>
            </div>
         </section>
      </>
   );
};

export default Contact;
