import React from "react";
import { Box, Button, Flex, TextField, TextArea } from "./";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactForm() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [inputs, setInputs] = React.useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (event: {
    persist: () => void;
    target: { id: string; value: string };
  }) => {
    event.persist();
    setInputs((prev: any) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const token = recaptchaRef?.current?.getValue();
      const response = await axios({
        method: "POST",
        url: "https://formbold.com/s/oaPkK",
        data: {
          ...inputs,
          "g-recaptcha-response": token,
        },
      });

      if (response.status === 201) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }

    recaptchaRef.current?.reset();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextField
        onChange={handleOnChange}
        value={inputs.email}
        id="email"
        type="email"
        name="email"
        label="Email"
        sx={{ marginTop: 0 }}
      />
      <TextField
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        label="Subject"
      />
      <TextArea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        label="Message"
        placeholder="Hi Ashley! I wanted to get in touch..."
      />
      <Flex
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ marginLeft: 2, marginTop: 3, marginBottom: 3 }}>
          <ReCAPTCHA ref={recaptchaRef} />
        </Box>
        <Box>
          <Button type="submit" sx={{ marginLeft: 3 }}>
            Send Message
          </Button>
        </Box>
      </Flex>
    </form>
  );
}
