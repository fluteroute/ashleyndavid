import axios from 'axios';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '../../utils/setupTests';
import { ContactForm } from './ContactForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fillOutForm = () => {
  const email = screen.getByLabelText('Email*');
  const subject = screen.getByLabelText('Subject*');
  const message = screen.getByLabelText('Message*');

  fireEvent.change(email, { target: { value: 'johndoe@gmail.com' } });
  fireEvent.change(subject, { target: { value: 'hello' } });
  fireEvent.change(message, { target: { value: 'Hello!' } });

  fireEvent.click(screen.getByText('Send Message'));
};

test('[components] ContactForm: should render and submit successfully', async () => {
  mockedAxios.post.mockResolvedValue({ status: 201 });
  render(<ContactForm />);

  const email = screen.getByLabelText('Email*');
  const subject = screen.getByLabelText('Subject*');
  const message = screen.getByLabelText('Message*');

  fireEvent.change(email, { target: { value: 'johndoe@gmail.com' } });
  fireEvent.change(subject, { target: { value: 'hello' } });
  fireEvent.change(message, { target: { value: 'Hello!' } });

  expect(email).toHaveAttribute('value', 'johndoe@gmail.com');
  expect(subject).toHaveAttribute('value', 'hello');
  expect(message.innerHTML).toEqual('Hello!');
  expect(screen.getByText('Send Message')).toBeDefined();

  fireEvent.click(screen.getByText('Send Message'));

  await waitFor(() => expect(screen.getByText('Success!')).toBeDefined());

  // Check form is reset
  expect(email).toHaveAttribute('value', '');
  expect(subject).toHaveAttribute('value', '');
  expect(message.innerHTML).toEqual('');
});

test('[components] ContactForm: submit failed with a bad request response', async () => {
  mockedAxios.post.mockResolvedValue({ status: 400 });
  render(<ContactForm />);

  fillOutForm();
  await waitFor(() => expect(screen.getByText('Try again!')).toBeDefined());
});

test('[components] ContactForm: submit failed with a bad request', async () => {
  mockedAxios.post.mockRejectedValue({ status: 500 });
  render(<ContactForm />);

  fillOutForm();
  await waitFor(() => expect(screen.getByText('Try again!')).toBeDefined());
});
