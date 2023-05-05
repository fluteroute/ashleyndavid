import React from 'react';
import { Box, Flex, TextField, TextArea } from '../base';
import { SubmitButton, SubmitButtonStates } from '../SubmitButton';
import { formRequest } from './utils';
import ReCAPTCHA from 'react-google-recaptcha';

type InputsState = {
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const [buttonState, setButtonState] = React.useState(SubmitButtonStates.Default);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState<InputsState>({
    email: '',
    subject: '',
    message: '',
  });

  const handleOnChange = (event: {
    persist: () => void;
    target: { id: string; value: string };
  }) => {
    event.persist();
    setInputs((prev: InputsState) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const onError = () => setButtonState(SubmitButtonStates.Failed);
  const onSuccess = () => {
    setButtonState(SubmitButtonStates.Success);

    // Reset form
    setInputs({
      email: '',
      subject: '',
      message: '',
    });
    recaptchaRef.current?.reset();
  };

  const handleOnSubmit = async (event: { preventDefault: () => void }) => {
    setIsLoading(true);

    event.preventDefault();

    const token = recaptchaRef?.current?.getValue();
    await formRequest({ onSuccess, onError, inputs, token });

    setIsLoading(false);
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
          <SubmitButton isLoading={isLoading} state={buttonState} />
        </Box>
      </Flex>
    </form>
  );
}
