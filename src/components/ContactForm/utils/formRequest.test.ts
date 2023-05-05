import axios from 'axios';
import { formRequest } from './formRequest';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const onSuccessSpy = jest.fn();
const onErrorSpy = jest.fn();
const inputs = {
  email: 'johndoe@gmail.com',
  subject: 'Hello',
  message: 'Lets connect',
};
const token = 'abc123';

const mockRequestParams = {
  onSuccess: onSuccessSpy,
  onError: onErrorSpy,
  inputs,
  token,
};

beforeEach(() => {
  jest.resetAllMocks();
});

test('[components:ContactForm] formRequest: should handle successful request', async () => {
  mockedAxios.post.mockResolvedValue({ status: 201 });

  await formRequest(mockRequestParams);

  expect(onSuccessSpy).toHaveBeenCalled();
  expect(onErrorSpy).not.toHaveBeenCalled();
});

test('[components:ContactForm] formRequest: should handle bad request', async () => {
  mockedAxios.post.mockResolvedValue({ status: 400 });

  await formRequest(mockRequestParams);

  expect(onSuccessSpy).not.toHaveBeenCalled();
  expect(onErrorSpy).toHaveBeenCalled();
});

test('[components:ContactForm] formRequest: should handle rejected request', async () => {
  mockedAxios.post.mockRejectedValue({ status: 500 });

  await formRequest(mockRequestParams);

  expect(onSuccessSpy).not.toHaveBeenCalled();
  expect(onErrorSpy).toHaveBeenCalled();
});

test('[components:ContactForm] formRequest: should handle empty token', async () => {
  mockedAxios.post.mockResolvedValue({ status: 400 });

  await formRequest({
    onSuccess: onSuccessSpy,
    onError: onErrorSpy,
    inputs,
  });

  expect(onSuccessSpy).not.toHaveBeenCalled();
  expect(onErrorSpy).toHaveBeenCalled();
});
