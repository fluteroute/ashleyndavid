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

    try {
      const token = recaptchaRef?.current?.getValue();
      const response = await axios({
        method: 'POST',
        url: 'https://formbold.com/s/oaPkK',
        data: {
          ...inputs,
          'g-recaptcha-response': token,
        },
      });

      if (response.status === 201) {
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
      }
    } catch (error) {
      setButtonState({
        success: false,
        failed: true,
        isLoading: false,
      });
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
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ marginLeft: 2, marginTop: 3, marginBottom: 3 }}>
          <ReCAPTCHA ref={recaptchaRef} sitekey="6LcuGdIlAAAAAOPlwb_U_3zuYC8rP30TMs0TQkLX" />
        </Box>
        <Box>
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
