import React from 'react';
import { Box, ListBox, ListBoxItem, Typography } from '../../components/base';
import { CareerExperience, TechnologyListBoxItem } from '../../components';

export const technologies: Array<{ tech: string; values: string }> = [
  { tech: 'SDLC', values: 'Scrum, Agile, Kanban, Waterfall' },
  { tech: 'Project Management', values: 'Jira, VersionOne' },
  { tech: 'Test Management', values: 'TestRail, QASpace, XRay' },
  { tech: 'OS', values: 'MacOs, Windows' },
  {
    tech: 'Languages/Runtimes',
    values: 'TypeScript, JavaScript, NodeJS, C#, SQL, Python',
  },
  {
    tech: 'UI Frameworks/Libraries',
    values: 'React, Emotion, Storybook, MaterialUI',
  },
  { tech: 'CMS', values: 'Contentful' },
  {
    tech: 'IDEs',
    values: 'Visual Studio Code, Visual Studio, DataGrip, PyCharm, Atom, Postman',
  },
  { tech: 'Source Control', values: 'Git' },
  {
    tech: 'CI',
    values: 'GitLab, GitHub Actions, Azure DevOps/VSTS, Jenkins, TFS, TeamCity',
  },
  { tech: 'Databases', values: 'Postgres, Microsoft SQL Server' },
  {
    tech: 'Functional Test Frameworks',
    values: 'Cypress.io, Coded UI, Selenium WebDriver, SpecFlow, Behave, Robot',
  },
  {
    tech: 'Unit Test Frameworks',
    values: 'React Testing Library, Jest, Mocha, NUnit, MSTest',
  },
  { tech: 'Misc. Testing Platforms', values: 'Percy, BrowserStack' },
  {
    tech: 'Productivity Software',
    values: 'Microsoft Office Suite, Google G Suite',
  },
  {
    tech: 'Other',
    values: 'NextJS, Express.js, Firebase, Chrome Dev Tools, Bash, VirtualBox, Hyper-V, MediaWiki',
  },
];

export function Career() {
  return (
    <>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography variant="h2">Technologies</Typography>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <ListBox>
          {technologies.map(({ tech, values }, index) => (
            <TechnologyListBoxItem key={`${tech.toLowerCase()}-${index}`} tech={tech}>
              {values}
            </TechnologyListBoxItem>
          ))}
        </ListBox>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography variant="h2">Experience</Typography>
      </Box>
      <CareerExperience
        company="project44"
        dateRange="Jan. 2021 - Present"
        jobTitle="Senior Software Engineer"
      >
        Originally joined the Austin based startup, Convey, which was acquired by project44 in
        October 2021. Former Convey teams are now known as Last Mile within project44, as they focus
        on shipments from retailers to end consumers. Developed B2B and B2C solutions with unique
        design languages for shipments. Key projects include Dolly, a design system for all Last
        Mile applications; Shipments Portal, a web app for managing shipments and tracking
        configurations; and Tracking Page 2.0, a configurable solution for retailers. Also automated
        visual regression workflows, created and maintained API endpoints, contributed to
        {" project44's front-end guild, and implemented visual component tests in the open-source "}
        design system, Manifest.
      </CareerExperience>
      <CareerExperience
        company="Malwarebytes"
        dateRange="Dec. 2017- Oct. 2020"
        jobTitle="Software Engineer III"
      >
        Led a team of developers and QA engineers in the design and execution of a testing strategy
        for consumer and enterprise products. Implemented two highly successful UI testing
        frameworks, Ninja Cat and Laika, for both desktop and web applications. This enabled
        non-technical QA members to contribute toward test automation with an easy-to-use platform.
        As a result, QA throughput more than doubled. Through Laika, spearheaded almost 1000
        automated UI test cases within four months, achieving over 90% feature coverage, and
        improved testability by strategically placing data attributes in HTML elements for targeted
        queries. Also, utilized React to create a test data tool for QA engineers and product
        developers and implemented an internal API Client NPM package for Malwarebytes Enterprise
        product test suites. Additionally, onboarded new employees, established a process for
        prioritizing test automation development, inspected product code in various languages to
        identify test coverage blind spots, and documented defects in high detail, including logs,
        screenshots, and videos.
      </CareerExperience>
      <CareerExperience
        company="Accusoft"
        dateRange="Dec. 2014 – Oct. 2017"
        jobTitle="QA Analyst II"
      >
        Joined the Internal Services team as their independent QA resource. Established a QA process
        on the team. Pursued automated testing to better improve the continuous integration process
        and establish a quicker feedback loop. As Scrum Master, improved the team’s deliverables by
        fostering a transparent environment which promoted collaboration amongst team members.
        Researched and implemented the first performance tests within the SaaS department. Revealed
        performance issues with Accusoft’s Customer Portal through performance tests. Improved
        development team response time for production support issues and overall customer
        satisfaction. Substituted product manager and development manager roles when needed.
        Continued to provide domain and system knowledge to new development and managerial team
        members.
      </CareerExperience>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography variant="h2">Education</Typography>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography variant="h3">University of South Florida</Typography>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <Typography variant="h4">
          Bachelor of Arts in Psychology – College of Arts and Sciences{' '}
        </Typography>
      </Box>
      <Box sx={{ marginTop: '1em', marginBottom: '2em' }}>
        <Typography variant="body2">Related coursework:</Typography>
        <ListBox>
          <ListBoxItem
            style={{
              fontSize: '16px',
              paddingTop: '4px',
              paddingBottom: '4px',
            }}
          >
            Information Technology Concepts
          </ListBoxItem>
          <ListBoxItem
            style={{
              fontSize: '16px',
              paddingTop: '4px',
              paddingBottom: '4px',
            }}
          >
            Research Methods and Statistics
          </ListBoxItem>
        </ListBox>
      </Box>
    </>
  );
}

export default Career;
