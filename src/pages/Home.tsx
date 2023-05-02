import React from "react";
import {
  Grid,
  Flex,
  Iframe,
  Image,
  Link,
  NavigationLink,
  Paragraph,
  FLToWA,
} from "../components";

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
      <FLToWA />
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
        husband (Gerry Hernandez) are known for their spectacular Christmas
        light show, which has been featured on the local news,{" "}
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
