import React from 'react';
import { Box, Flex, Typography } from '../base';

export type CareerExperienceProps = {
  children: React.ReactNode;
  company: string;
  dateRange: string;
  jobTitle: string;
};

export function CareerExperience(props: CareerExperienceProps) {
  const { children, company, dateRange, jobTitle } = props;
  return (
    <section>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Flex
          sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography as="h3" variant="h3">
              {company}
            </Typography>
          </Box>
          <Box>
            <Typography as="h3" variant="h3">
              {dateRange}
            </Typography>
          </Box>
        </Flex>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography as="h4" variant="h4">
          {jobTitle}
        </Typography>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography variant="body2">{children}</Typography>
      </Box>
    </section>
  );
}

export default CareerExperience;
