import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { CareerExperience } from './';

test('[components] CareerExperience: should render', () => {
  render(
    <CareerExperience company="Company" dateRange="Date Range" jobTitle="Job Title">
      description
    </CareerExperience>
  );

  expect(screen.getByText('Company')).toBeDefined();
  expect(screen.getByText('Date Range')).toBeDefined();
  expect(screen.getByText('Job Title')).toBeDefined();
  expect(screen.getByText('description')).toBeDefined();
});
