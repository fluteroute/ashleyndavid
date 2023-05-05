import axios from 'axios';

export async function formRequest({
  onSuccess,
  onError,
  inputs,
  token,
}: {
  onSuccess(): void;
  onError(): void;
  inputs: { email: string; subject: string; message: string };
  token?: string | null;
}) {
  if (!token) {
    return onError();
  }

  let response;
  try {
    response = await axios.post('https://formbold.com/s/oaPkK', {
      ...inputs,
      'g-recaptcha-response': token,
    });
  } catch (error) {
    return onError();
  }

  if (response?.status === 201) {
    onSuccess();
  } else {
    return onError();
  }
}
