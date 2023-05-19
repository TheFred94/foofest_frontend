import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function Contact() {
  const [contactForms, setContactForms] = useState([]);

  // We use useEffect to avoid hydration issues and discrepancies between client and serverside rendering of the form
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const forms = [];

    for (let i = 0; i < randomNumber; i++) {
      forms.push(
        <div>
          <ContactForm key={i} />
        </div>
      );
    }

    // We use the setContactForms function to update the state and store the generated forms
    setContactForms(forms);
  }, []);

  return <form>{contactForms}</form>;
}

function ContactForm() {
  return (
    <>
      <TextField className="bg-color-white" required id="outlined-required" label="Full Name" variant="filled" />
      <TextField className="bg-color-white" required id="outlined-required" label="Email" variant="filled" />
      <TextField className="bg-color-white" required id="outlined-required" label="Phone" variant="filled" />
    </>
  );
}

export default Contact;
