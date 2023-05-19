import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Contact() {
  const [contactForms, setContactForms] = useState([]);

  // We use useEffect to avoid hydration issues and discrepancies between client and serverside rendering of the form
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const forms = [];

    for (let i = 0; i < randomNumber; i++) {
      forms.push(
        <>
          <ContactForm key={i} />
        </>
      );
    }

    // We use the setContactForms function to update the state and store the generated forms
    setContactForms(forms);
  }, []);

  return (
    <>
      <form>{contactForms}</form>
      <Button className=" rounded-none border-2 border-solid place-self-center border-color-yellow h-10 mb-10 px-6 text-color-yellow hover:bg-color-yellow hover:text-color-black font-sans font-semibold gap-5 ">
        <span className="pt-1">Go to payment</span>
      </Button>
    </>
  );
}

function ContactForm() {
  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="text-color-black">Collapsible Group Item </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField className="bg-color-white" required id="outlined-required" label="Full Name" variant="filled" />
          <TextField className="bg-color-white" required id="outlined-required" label="Email" variant="filled" />
          <TextField className="bg-color-white" required id="outlined-required" label="Phone" variant="filled" />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Contact;
