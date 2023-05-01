import React from "react";
import {
  Box,
  CareerExperience,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Typography,
  Paragraph,
} from "../components";

const CareerListBoxItem = ({
  children,
  tech,
  ...other
}: ListBoxItemProps & { tech: string }) => (
  <ListBoxItem
    style={{ paddingTop: "4px", paddingBottom: "4px", fontSize: "16px" }}
    {...other}
  >
    <Typography variant="body1" sx={{ fontWeight: 800, fontSize: "18px" }}>
      {tech}
    </Typography>{" "}
    {children}
  </ListBoxItem>
);

export function Career() {
  return (
    <>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h2">Summary</Typography>
      </Box>
      <Paragraph>
        Highly motivated and ambitious Software Engineer with experience in
        building design systems, web applications, and automated test
        frameworks. Interested in career growth in full stack development and
        leadership. Experienced in working in Agile environments, including
        Scrum Master duties on high-performance teams.
      </Paragraph>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h2">Technologies</Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <ListBox>
          <CareerListBoxItem tech="SDLC:">
            Scrum, Agile, Kanban, Waterfall{" "}
          </CareerListBoxItem>
          <CareerListBoxItem tech="Project Management:">
            Jira, VersionOne
          </CareerListBoxItem>
          <CareerListBoxItem tech="Test Management:">
            TestRail, QASpace, XRay
          </CareerListBoxItem>
          <CareerListBoxItem tech="OS:">MacOS, Windows</CareerListBoxItem>
          <CareerListBoxItem tech="Languages/Runtimes:">
            TypeScript, JavaScript, NodeJS, C#, SQL, Python{" "}
          </CareerListBoxItem>
          <CareerListBoxItem tech="UI Frameworks/Libraries:">
            React, Emotion, Storybook, MaterialUI
          </CareerListBoxItem>
          <CareerListBoxItem tech="CMS:">Contentful</CareerListBoxItem>
          <CareerListBoxItem tech="IDEs:">
            Visual Studio Code, Visual Studio, DataGrip, PyCharm, Atom, Postman
          </CareerListBoxItem>
          <CareerListBoxItem tech="Source Control:">Git</CareerListBoxItem>
          <CareerListBoxItem tech="CI:">
            GitLab, GitHub Actions, Azure DevOps/VSTS, Jenkins, TFS, TeamCity
          </CareerListBoxItem>
          <CareerListBoxItem tech="Databases:">
            Postgres, Microsoft SQL Server
          </CareerListBoxItem>
          <CareerListBoxItem tech="Functional Test Frameworks:">
            Cypress.io, Coded UI, Selenium WebDriver, SpecFlow, Behave, Robot
          </CareerListBoxItem>
          <CareerListBoxItem tech="Unit Test Frameworks:">
            React Testing Library, Jest, Mocha, NUnit, MSTest
          </CareerListBoxItem>
          <CareerListBoxItem tech="Misc. Testing Platforms:">
            Percy, BrowserStack
          </CareerListBoxItem>
          <CareerListBoxItem tech="Productivity Software:">
            Microsoft Office Suite, Google G Suite
          </CareerListBoxItem>
          <CareerListBoxItem tech="Other:">
            NextJS, Express.js, Firebase, Chrome Dev Tools, Bash, VirtualBox,
            Hyper-V, MediaWiki
          </CareerListBoxItem>
        </ListBox>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h2">Experience</Typography>
      </Box>
      <CareerExperience
        company="project44"
        dateRange="Jan. 2021 - Present"
        jobTitle="Senior Software Engineer"
      >
        Originally joined the Austin based startup, Convey, which was acquired
        by project44 in October 2021. Former Convey teams are now known as Last
        Mile within project44, as they focus on shipments from retailers to end
        consumers. Developed B2B and B2C solutions with unique design languages
        for shipments. Key projects include Dolly, a design system for all Last
        Mile applications; Shipments Portal, a web app for managing shipments
        and tracking configurations; and Tracking Page 2.0, a configurable
        solution for retailers. Also automated visual regression workflows,
        created and maintained API endpoints, contributed to project44's
        front-end guild, and implemented visual component tests in the
        open-source design system, Manifest.
      </CareerExperience>
      <CareerExperience
        company="Malwarebytes"
        dateRange="Dec. 2017- Oct. 2020"
        jobTitle="Software Engineer III"
      >
        Led a team of developers and QA engineers in the design and execution of
        a testing strategy for consumer and enterprise products. Implemented two
        highly successful UI testing frameworks, Ninja Cat and Laika, for both
        desktop and web applications. This enabled non-technical QA members to
        contribute toward test automation with an easy-to-use platform. As a
        result, QA throughput more than doubled. Through Laika, spearheaded
        almost 1000 automated UI test cases within four months, achieving over
        90% feature coverage, and improved testability by strategically placing
        data attributes in HTML elements for targeted queries. Also, utilized
        React to create a test data tool for QA engineers and product developers
        and implemented an internal API Client NPM package for Malwarebytes
        Enterprise product test suites. Additionally, onboarded new employees,
        established a process for prioritizing test automation development,
        inspected product code in various languages to identify test coverage
        blind spots, and documented defects in high detail, including logs,
        screenshots, and videos.
      </CareerExperience>
      <CareerExperience
        company="Accusoft"
        dateRange="Dec. 2014 – Oct. 2017"
        jobTitle="QA Analyst II"
      >
        Joined the Internal Services team as their independent QA resource.
        Established a QA process on the team. Pursued automated testing to
        better improve the continuous integration process and establish a
        quicker feedback loop. As Scrum Master, improved the team’s deliverables
        by fostering a transparent environment which promoted collaboration
        amongst team members. Researched and implemented the first performance
        tests within the SaaS department. Revealed performance issues with
        Accusoft’s Customer Portal through performance tests. Improved
        development team response time for production support issues and overall
        customer satisfaction. Substituted product manager and development
        manager roles when needed. Continued to provide domain and system
        knowledge to new development and managerial team members.
      </CareerExperience>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h2">Education</Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h3">University of South Florida</Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h4">
          Bachelor of Arts in Psychology – College of Arts and Sciences{" "}
        </Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "2em" }}>
        <Typography variant="body2">Related coursework: </Typography>
        <ListBox>
          <ListBoxItem
            style={{
              fontSize: "16px",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
          >
            Information Technology Concepts
          </ListBoxItem>
          <ListBoxItem
            style={{
              fontSize: "16px",
              paddingTop: "4px",
              paddingBottom: "4px",
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
