import React from "react";
import {
  Box,
  Grid,
  Flex,
  Image,
  Link,
  NavigationLink,
  Paragraph,
  Typography,
} from "../components";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLocationDot,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const Iframe = styled.iframe({
  border: "unset",
  "@media screen and (min-width: 64em)": {
    minHeight: "441px",
    minWidth: "784px",
  },
});

export function Home() {
  return (
    <>
      <Paragraph>
        A highly skilled senior software engineer with a passion for building
        innovative design systems, web applications, and automated test
        frameworks. Currently based in Tampa, FL, Ashley is excited to embark on
        a new journey by relocating to Seattle, WA. With vast experience in
        front end development, combined with Scrum Master expertise, Ashley has
        contributed to the success of high-performance teams, as well as working
        at dynamic startups.
      </Paragraph>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "column", "row", "row"],
            alignItems: "center",
            justifyContent: "center",
            margin: [0, 0, 0, 5],
            maxWidth: ["250px", "100%"],
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="100.000000pt"
              height="100.000000pt"
              viewBox="0 0 100.000000 100.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF"
                stroke="none"
              >
                <path d="M4 945 c-4 -9 -1 -28 4 -43 6 -15 12 -38 14 -52 3 -27 12 -28 104 -14 34 5 49 1 85 -22 24 -15 53 -38 64 -51 31 -35 119 -25 158 19 15 18 20 18 35 7 24 -19 52 -47 52 -54 0 -10 38 -43 57 -49 32 -10 47 -49 34 -86 -17 -51 -3 -134 30 -177 16 -20 34 -54 41 -75 6 -22 20 -43 30 -47 10 -4 26 -22 36 -41 10 -22 26 -36 39 -38 16 -2 25 -12 29 -30 7 -36 17 -54 37 -66 15 -10 21 -8 97 28 30 14 41 54 47 169 l4 87 -45 86 c-30 57 -44 93 -40 108 3 15 -6 36 -31 70 -35 45 -85 150 -85 178 0 7 -5 29 -10 49 -9 30 -16 38 -51 48 -37 11 -43 11 -63 -8 -20 -19 -34 -21 -164 -21 -131 0 -142 1 -152 20 -10 19 -21 20 -181 20 -142 0 -171 -2 -175 -15z m336 -45 c10 -19 21 -20 174 -20 158 0 164 -1 169 -21 8 -32 32 -17 32 20 0 54 28 33 46 -34 23 -81 54 -151 85 -187 15 -19 22 -37 19 -48 -4 -11 14 -55 45 -112 47 -90 50 -99 50 -171 0 -42 -4 -79 -10 -82 -5 -3 -10 -17 -10 -31 0 -15 -7 -27 -17 -30 -10 -3 -26 -10 -35 -15 -25 -13 -26 -13 -33 30 -5 32 -13 42 -41 56 -21 10 -34 23 -34 35 0 10 -11 27 -25 38 -14 11 -38 45 -54 75 l-29 56 24 16 c29 19 31 46 4 70 -15 14 -23 16 -32 7 -8 -8 -8 -15 0 -25 7 -8 9 -17 5 -20 -24 -25 -37 28 -22 88 10 40 9 51 -7 81 -11 19 -29 37 -41 41 -13 3 -23 8 -23 12 -1 11 -64 77 -92 94 -37 23 -79 22 -85 -2 -4 -17 -41 -41 -63 -41 -5 0 -43 23 -83 50 -60 40 -82 50 -116 50 -23 0 -51 -5 -62 -10 -15 -8 -19 -7 -19 4 0 8 -3 21 -6 30 -5 14 10 16 135 16 130 0 141 -1 151 -20z" />
                <path d="M973 123 c-9 -27 -45 -64 -72 -74 -17 -7 -21 -13 -14 -20 23 -23 113 59 113 101 0 17 -20 11 -27 -7z" />
                <path d="M803 26 c-34 -16 -28 -29 10 -21 41 9 49 14 42 26 -8 11 -23 10 -52 -5z" />
              </g>
            </svg>
            <Typography
              variant="label"
              sx={{ marginTop: 3, marginBottom: [3, 3, 0, 0] }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "8px" }}
              />
              Tampa, FL
            </Typography>
          </Flex>
          <Box
            sx={{
              margin: ["20px", "20px", "40px", "40px"],
              transform: "rotate(90deg)",
              "@media screen and (min-width: 52em)": {
                transform: "unset",
              },
            }}
          >
            <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
          </Box>
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="100.000000pt"
              height="100.000000pt"
              viewBox="0 0 100.000000 100.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF"
                stroke="none"
              >
                <path d="M249 819 c-9 -18 -7 -26 10 -50 22 -29 29 -99 11 -99 -5 0 -10 9 -10 19 0 31 -19 35 -52 11 -36 -27 -78 -22 -133 16 -21 14 -45 24 -54 22 -22 -4 -27 -89 -7 -120 8 -13 18 -43 22 -68 4 -25 11 -54 17 -65 6 -11 10 -52 9 -92 0 -56 4 -78 18 -95 15 -19 20 -21 34 -9 13 11 22 11 39 3 12 -5 29 -13 39 -15 10 -4 19 -22 23 -47 6 -36 12 -44 42 -57 39 -16 78 -11 105 14 12 11 25 13 45 8 51 -14 147 -14 170 1 12 8 28 11 35 9 8 -3 34 2 58 12 31 11 88 18 185 22 l140 6 -4 25 c-2 14 -6 147 -10 295 l-6 270 -357 3 c-356 2 -357 2 -369 -19z m691 -248 c0 -126 3 -243 6 -260 l7 -31 -110 0 c-82 0 -124 -5 -165 -19 -38 -13 -59 -16 -66 -9 -7 7 -20 3 -41 -13 -25 -19 -33 -20 -46 -9 -12 10 -20 11 -38 1 -17 -9 -30 -9 -51 -2 -45 18 -86 13 -105 -11 -26 -31 -67 -19 -76 24 -4 18 -14 41 -23 51 -24 27 -79 50 -107 45 -25 -5 -34 5 -15 17 14 9 13 48 -2 63 -9 9 -8 12 4 12 30 0 32 23 4 45 -20 16 -31 37 -37 70 -5 26 -16 61 -24 78 -8 17 -15 38 -15 47 0 15 6 14 47 -7 37 -19 59 -24 96 -20 41 4 53 0 78 -21 26 -21 33 -23 56 -13 20 9 24 16 18 34 -4 12 -10 42 -12 67 -3 24 -12 55 -20 67 l-15 23 326 0 326 0 0 -229z" />
                <path d="M143 788 c-28 -14 -29 -22 -3 -48 27 -27 39 -25 51 7 18 48 -1 64 -48 41z" />
              </g>
            </svg>
            <Typography variant="label" sx={{ marginTop: 3 }}>
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{ marginRight: "8px" }}
              />
              Seattle, WA
            </Typography>
          </Flex>
        </Flex>
      </Flex>
      <Paragraph>
        As a driven professional, Ashley is focused on career growth in full
        stack development and leadership, always striving to make a meaningful
        impact in the tech industry. Outside of her professional life, Ashley is
        an avid music enthusiast, playing piccolo and flute with the{" "}
        <Link
          href="http://www.nathanmuehl.com/spcbands/ws.html"
          target="_blank"
        >
          Wind Symphony of St. Petersburg College
        </Link>
        . She loves hiking and exploring theme parks with her husband, creating
        cherished memories together. During the holiday season, Ashley and her
        husband are known for their spectacular Christmas light show, which has
        been featured on the local news,{" "}
        <Link
          href="https://www.youtube.com/@GerryHernandezMusic"
          target="_blank"
        >
          Youtube
        </Link>
        , and even with{" "}
        <Link
          href="https://floridaorchestra.org/orchestra-of-lights/"
          target="_blank"
        >
          The Florida Orchestra
        </Link>
        .
      </Paragraph>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: [0, 0, 0, 3],
          paddingBottom: [0, 0, 0, 3],
          width: "100%",
        }}
      >
        <Iframe
          src="https://www.youtube.com/embed/nfnEsxo40Qs"
          title="YouTube video - Star Trek: The Light Show"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Flex>
      <Paragraph>
        At home, Ashley shares a special bond with Ninja, a beloved munchkin cat
        who adds joy and comfort to daily life. With a blend of technical
        prowess, leadership skills, and diverse hobbies, Ashley is a
        well-rounded individual, ready to take on new challenges and make a
        difference in the world of technology as the next chapter unfolds in
        Pacific Northwest.
      </Paragraph>
      <Grid
        gap={2}
        columns={[1, 1, 3, 3]}
        sx={{
          alignItems: ["center", "center", "center", "start"],
          justifyItems: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Image
          alt="Ninja, an orange munchkin cat"
          src="ninjaonbed.jpeg"
          sx={{
            boxShadow: "unset",
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
        <Image
          alt="Hiking in Pedernales Falls State Park"
          src="texashike.jpeg"
          sx={{
            boxShadow: "unset",
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
        <Image
          alt="Holiday Phontonic's Light Show"
          src="christmaslights.jpeg"
          sx={{
            boxShadow: "unset",
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Grid>
      <Paragraph>
        To learn more about Ashley's story, explore her career achievements, or
        get in touch, be sure to visit her{" "}
        <NavigationLink to="/about">About</NavigationLink>,{" "}
        <NavigationLink to="/career">Career</NavigationLink>, and{" "}
        <NavigationLink to="/career">Contact</NavigationLink> pages.
      </Paragraph>
    </>
  );
}

export default Home;
