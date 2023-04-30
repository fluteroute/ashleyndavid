import React from "react";
import {
  Box,
  Flex,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Typography,
} from "../components";

const CareerListBoxItem = (props: ListBoxItemProps) => (
  <ListBoxItem style={{ paddingTop: "4px", paddingBottom: "4px" }} {...props} />
);

export function Career() {
  return (
    <>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="body1">
          Highly motivated and ambitious Software Engineer with experience in
          building design systems, web applications, and automated test
          frameworks. Interested in career growth in full stack development and
          leadership. Experienced in working in Agile environments, including
          Scrum Master duties on high-performance teams.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h2">Technologies</Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <ListBox>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              SDLC:
            </Typography>{" "}
            Scrum, Agile, Kanban, Waterfall{" "}
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Project Management:
            </Typography>{" "}
            Jira, VersionOne{" "}
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Test Management:
            </Typography>{" "}
            TestRail, QASpace, XRay
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              OS:
            </Typography>{" "}
            MacOS, Windows{" "}
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Languages/Runtimes:
            </Typography>{" "}
            TypeScript, JavaScript, NodeJS, C#, SQL, Python{" "}
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              UI Frameworks/Libraries:
            </Typography>{" "}
            React, Emotion, Storybook, MaterialUI
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              CMS:
            </Typography>{" "}
            Contentful
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              IDEs:
            </Typography>{" "}
            Visual Studio Code, Visual Studio, DataGrip, PyCharm, Atom, Postman
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Source Control:
            </Typography>{" "}
            Git
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              CI:
            </Typography>{" "}
            GitLab, GitHub Actions, Azure DevOps/VSTS, Jenkins, TFS, TeamCity
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Databases:
            </Typography>{" "}
            Postgres, Microsoft SQL Server
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Functional Test Frameworks:
            </Typography>{" "}
            Cypress.io, Coded UI, Selenium WebDriver, SpecFlow, Behave, Robot
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Unit Test Frameworks:
            </Typography>{" "}
            React Testing Library, Jest, Mocha, NUnit, MSTest
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Misc. Testing Platforms:
            </Typography>{" "}
            Percy, BrowserStack
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Productivity Software:
            </Typography>{" "}
            Microsoft Office Suite, Google G Suite
          </CareerListBoxItem>
          <CareerListBoxItem>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              Other:
            </Typography>{" "}
            NextJS, Express.js, Firebase, Chrome Dev Tools, Bash, VirtualBox,
            Hyper-V, MediaWiki
          </CareerListBoxItem>
        </ListBox>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h2">Experience</Typography>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Flex
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h3">project44</Typography>
          </Box>
          <Box>
            <Typography variant="h3">Jan. 2021 - Present</Typography>
          </Box>
        </Flex>
      </Box>
      <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
        <Typography variant="h4">Senior Software Engineer </Typography>
      </Box>
    </>
  );
}

export default Career;
