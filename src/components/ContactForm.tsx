import React from 'react';
import { Box, Flex, TextField, TextArea, SubmitButton } from './';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

export function ContactForm() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [buttonState, setButtonState] = React.useState({
    success: false,
    failed: false,
    isLoading: false,
  });
  const [inputs, setInputs] = React.useState({
    email: '',
    subject: '',
    message: '',
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

    setButtonState({
      success: false,
      failed: false,
      isLoading: true,
    });

    const errorState = () =>
      setButtonState({
        success: false,
        failed: true,
        isLoading: false,
      });
    const successState = () => {
      setButtonState({
        success: true,
        failed: false,
        isLoading: false,
      });
      setInputs({
        email: '',
        subject: '',
        message: '',
      });
      recaptchaRef.current?.reset();
    };

    const token = recaptchaRef?.current?.getValue();
    if (!token) {
      return errorState();
    }

    let response;
    try {
      response = await axios({
        method: 'POST',
        url: 'https://formbold.com/s/oaPkK',
        data: {
          ...inputs,
          'g-recaptcha-response': token,
        },
      });
    } catch (error) {
      return errorState();
    }

    if (response?.status === 201) {
      successState();
    } else {
      return errorState();
    }
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
        isRequired
      />
      <TextField
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        label="Subject"
        isRequired
      />
      <TextArea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        label="Message"
        placeholder="Hi Ashley! I wanted to get in touch..."
        isRequired
      />
      <Flex
        sx={{
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ marginLeft: 2, marginBottom: 3 }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcuGdIlAAAAAOPlwb_U_3zuYC8rP30TMs0TQkLX"
            size="compact"
          />
        </Box>
        <Box sx={{ marginBottom: 3 }}>
          <SubmitButton
            success={buttonState.success}
            failed={buttonState.failed}
            isLoading={buttonState.isLoading}
          />
        </Box>
      </Flex>
    </form>
  );
}
