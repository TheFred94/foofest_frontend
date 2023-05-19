import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function Contact() {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const forms = [];

    for (let i = 0; i < randomNumber; i++) {
      forms.push(<ContactForm key={i} />);
    }

    setContactForms(forms);
  }, []);

  return <>{contactForms}</>;
}

function ContactForm() {
  return (
    <>
      <form>
        <TextField className="bg-color-white" required id="outlined-required" label="Full Name" variant="filled" />
        <TextField className="bg-color-white" required id="outlined-required" label="Email" variant="filled" />
        <TextField className="bg-color-white" required id="outlined-required" label="Phone" variant="filled" />
      </form>
    </>
  );
}

export default Contact;
