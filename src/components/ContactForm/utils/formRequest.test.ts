import axios from 'axios';
import { formRequest } from './formRequest';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const inputs = {
  email: 'johndoe@gmail.com',
  subject: 'Hello',
  message: 'Lets connect',
};
const token = 'abc123';

test('[components:ContactForm] formRequest: should handle successful request', async () => {
  mockedAxios.post.mockResolvedValue({ status: 201 });

  const onSuccessSpy = jest.fn();
  const onErrorSpy = jest.fn();

  await formRequest({
    onSuccess: onSuccessSpy,
    onError: onErrorSpy,
    inputs,
    token,
  });

  expect(onSuccessSpy).toHaveBeenCalled();
  expect(onErrorSpy).not.toHaveBeenCalled();
});

test('[components:ContactForm] formRequest: should handle bad request', async () => {
  mockedAxios.post.mockResolvedValue({ status: 400 });

  const onSuccessSpy = jest.fn();
  const onErrorSpy = jest.fn();

  await formRequest({
    onSuccess: onSuccessSpy,
    onError: onErrorSpy,
    inputs,
    token,
  });

  expect(onSuccessSpy).not.toHaveBeenCalled();
  expect(onErrorSpy).toHaveBeenCalled();
});

test('[components:ContactForm] formRequest: should handle rejected request', async () => {
  mockedAxios.post.mockRejectedValue({ status: 500 });

  const onSuccessSpy = jest.fn();
  const onErrorSpy = jest.fn();

  await formRequest({
    onSuccess: onSuccessSpy,
    onError: onErrorSpy,
    inputs,
    token,
  });

  expect(onSuccessSpy).not.toHaveBeenCalled();
  expect(onErrorSpy).toHaveBeenCalled();
});

test('[components:ContactForm] formRequest: should handle empty token', async () => {
  mockedAxios.post.mockResolvedValue({ status: 400 });

  const onSuccessSpy = jest.fn();
  const onErrorSpy = jest.fn();

  await formRequest({
    onSuccess: onSuccessSpy,
    onError: onErrorSpy,
    inputs,
  });

  expect(onSuccessSpy).not.toHaveBeenCalled();
  expect(onErrorSpy).toHaveBeenCalled();
});
