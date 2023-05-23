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

const ValidationTextFieldPhone = styled(TextField)(({ inputValue }) => ({
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
      borderColor: inputValue === 11 ? "green" : "black",
      borderWidth: 2,
    },
  },
}));

const ValidationTextFieldZip = styled(TextField)(({ inputValueZip }) => ({
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
      borderColor: inputValueZip === 4 ? "green" : "black",
      borderWidth: 2,
    },
  },
}));

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
  const [currentAccordionIndex, setCurrentAccordionIndex] = useState(0);

  const handleNextTicket = () => {
    setCurrentAccordionIndex(currentAccordionIndex + 1);
  };

  return (
    <>
      <form>
        {[...Array(5)].map((_, index) => (
          <ContactForm numOfTickets={index + 1} key={index} isExpanded={index === currentAccordionIndex} onNextTicket={handleNextTicket} onClickAccordion={() => setCurrentAccordionIndex(index)} />
        ))}
        <Button className=" rounded-none border-2 border-solid place-self-center border-color-yellow h-10 mb-10 px-6 text-color-yellow hover:bg-color-yellow hover:text-color-black font-sans font-semibold gap-5 ">
          <span className="pt-1">Go to payment</span>
        </Button>
      </form>
    </>
  );
}

function ContactForm(props) {
  const [zipCode, setZipCode] = useState("");
  const [values, setValues] = React.useState({
    textmask: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeZip = (event) => {
    const limit = 4;

    setZipCode(event.target.value.slice(0, limit));
    // console.log(event.target.value.length);
  };

  const inputValue = values.textmask.length;
  const inputValueZip = zipCode.length;

  return (
    <Accordion className="bg-color-white " expanded={props.isExpanded}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" onClick={props.onClickAccordion}>
        <Typography className="text-color-black">Ticket #{props.numOfTickets} </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ValidationTextField fullWidth type="text" label="First name" required variant="outlined" defaultValue="" id="validation-outlined-input" />
        <ValidationTextField fullWidth className="mt-4" type="text" label="Last name" required variant="outlined" defaultValue="" id="validation-outlined-input" />
        <ValidationTextFieldPhone className="mt-4" onChange={handleChange} name="textmask" id="formatted-text-mask-input" InputProps={{ inputComponent: TextMaskCustom }} fullWidth label="Phone number" required variant="outlined" value={values.textmask} inputValue={inputValue} />
        <ValidationTextField type="email" fullWidth className="mt-4" label="Email" required variant="outlined" defaultValue="" id="validation-outlined-input" />
        <ValidationTextField fullWidth className="mt-4" type="text" label="Street and house number" required variant="outlined" defaultValue="" id="validation-outlined-input" />
        <ValidationTextFieldZip type="number" fullWidth className="mt-4" label="Zip code" required variant="outlined" value={zipCode} defaultValue="" id="validation-outlined-input" onChange={handleChangeZip} inputValueZip={inputValueZip} />
      </AccordionDetails>
      <Button className=" rounded-none border-2 border-solid place-self-center border-color-black h-10 mb-10 px-6 text-color-black hover:bg-color-black hover:text-color-yellow font-sans font-semibold gap-5 " onClick={props.onNextTicket}>
        <span className="pt-1">Next ticket</span>
      </Button>
    </Accordion>
  );
}

export default Contact;
