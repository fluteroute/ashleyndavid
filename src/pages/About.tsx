import React from "react";
import { Link, Typography } from "../components";

export function About() {
  return (
    <>
      <p>
        <Typography variant="body1">
          Hi, I'm Ashley, a Software Engineer with a passion for creating
          user-friendly and visually appealing web applications. When I'm not
          coding away or exploring the latest technology trends, you'll find me
          playing the flute, hiking through scenic trails, or seeking out
          thrilling experiences at theme parks with my husband
        </Typography>
      </p>
      <p>
        <Typography variant="body1">
          My journey began in college, where I initially pursued my dreams of
          becoming a professional flutist by majoring in music. After three
          years, I reevaluated my career path and decided to venture into the
          technology industry. Upon consulting with industry professionals,
          Quality Assurance (QA) seemed like an ideal starting point. To
          transition into the tech industry quickly, I secured a QA internship
          and changed my major to Psychology, enabling me to complete my
          bachelor's degree on time. As I gained more experience in QA, I
          recognized the future potential of automation. With determination, I
          taught myself Python and computer science basics, subsequently using
          my newfound skills to script automated tests with Selenium WebDriver
          as a full-time QA Analyst. Collaborating closely with software
          engineers, I absorbed valuable coding expertise and decided to change
          my career path once more. As a software engineer, I have created
          design systems, web applications, and automated test frameworks. Now,
          with experience in several programming languages, I am passionate
          about providing end-to-end full-stack solutions. Please see the Career
          page for more details.
        </Typography>
      </p>
      <p>
        <Typography variant="body1">
          Outside of my professional life, I like to keep myself engaged and
          inspired through my hobbies and interests:
        </Typography>
        <p>
          <Typography variant="body1">
            <ul>
              <li>
                Flute: As a flutist, I relish the challenges and rewards of
                mastering new pieces and the emotional connection that music
                brings. I've found that the focus and creativity required in
                music also enhance my problem-solving skills as a software
                engineer.
              </li>
              <li>
                Hiking: Few experiences match the sense of accomplishment and
                tranquility that comes from reaching a summit or completing a
                challenging trail. Hiking enables me to clear my mind, maintain
                fitness, and appreciate nature's beauty.
              </li>
              <li>
                Theme Parks: The engineering marvels and immersive experiences
                at theme parks have always captivated me. The fusion of
                technology, storytelling, and exhilarating rides consistently
                inspires me and sparks fresh ideas.
              </li>
            </ul>
          </Typography>
        </p>
      </p>
      <p>
        <Typography variant="body1">
          I'm grateful to have a career that allows me to combine my passion for
          technology with my love for creativity, all while continuously
          learning and growing. If you'd like to know more about my professional
          journey or explore potential collaboration opportunities, feel free to
          visit the <Link href="/career">Career</Link> and{" "}
          <Link href="/contact">Contact</Link> pages.
        </Typography>
      </p>
    </>
  );
}

export default About;
