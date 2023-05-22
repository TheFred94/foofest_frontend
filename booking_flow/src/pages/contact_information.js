import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IMaskInput } from "react-imask";
import { NumericFormat } from "react-number-format";

const ValidationTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1D1C29",
    },
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
  },
});

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00 00 00 00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

function Contact() {
  const [contactForms, setContactForms] = useState([]);

  // We use useEffect to avoid hydration issues and discrepancies between client and serverside rendering of the form
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const forms = [];

    for (let i = 0; i < randomNumber; i++) {
      forms.push(<ContactForm randomNumber={randomNumber} key={i} />);
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

function ContactForm(props) {
  const [values, setValues] = React.useState({
    textmask: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Accordion className="bg-color-white ">
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography className="text-color-black">Ticket #{props.randomNumber} </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ValidationTextField fullWidth className="mt-4" label="CSS validation style" required variant="outlined" defaultValue="" id="validation-outlined-input" />
      </AccordionDetails>
      <AccordionDetails>
        <ValidationTextField value={values.textmask} onChange={handleChange} name="textmask" id="formatted-text-mask-input" InputProps={{ inputComponent: TextMaskCustom }} fullWidth className="mt-4" label="Phone number" required variant="outlined" />
      </AccordionDetails>

      <Button className=" rounded-none border-2 border-solid place-self-center border-color-black h-10 mb-10 px-6 text-color-black hover:bg-color-black hover:text-color-yellow font-sans font-semibold gap-5 ">
        <span className="pt-1">Next ticket</span>
      </Button>
    </Accordion>
  );
}

export default Contact;
