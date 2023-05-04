import React from 'react';
import { Grid, Image, Link, ListBox, ListBoxItem } from '../../components/base';
import { NavigationLink, Paragraph } from '../../components';

export function About() {
  return (
    <>
      <Paragraph>
        {"Hi, I'm Ashley, a Software Engineer with a passion for creating user-friendly and visually appealing " +
          "web applications. When I'm not coding away or exploring the latest technology trends, you'll find me " +
          'playing the flute, hiking through scenic trails, or seeking out thrilling experiences at theme parks with my husband.'}
      </Paragraph>
      <Grid
        gap={4}
        columns={[1, 1, 2, '1fr 2fr']}
        sx={{
          alignItems: 'center',
          justifyItems: 'center',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Image
          alt="Ashley hiking"
          src="hiking.jpeg"
          sx={{
            boxShadow: 'unset',
            width: ['250px', '250px', '350px', '350px'],
            height: ['250px', '250px', '350px', '350px'],
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
        <Paragraph>
          My journey began in college, where I initially pursued my dreams of becoming a
          professional flutist by majoring in music. After three years, I reevaluated my career path
          and decided to venture into the technology industry. Upon consulting with industry
          professionals, Quality Assurance (QA) seemed like an ideal starting point. To transition
          into the tech industry quickly, I landed a QA internship while finishing my degree in
          Psychology. As I gained more experience in QA, I recognized the potential of automation in
          testing. I taught myself Python and computer science basics, subsequently using my
          newfound skills to script automated tests with Selenium WebDriver as a full-time QA
          Analyst. Collaborating closely with software engineers, I absorbed valuable coding
          expertise and decided to change my career path once more. As a software engineer, I have
          created design systems, web applications, development tools, and automated test
          frameworks. Now, with experience in several programming languages, I am passionate about
          providing high quality full-stack solutions. Please visit the{' '}
          <NavigationLink to="/career">Career</NavigationLink> page for more in depth details on my
          professional experience.
        </Paragraph>
      </Grid>
      <Paragraph>
        Outside of my professional life, I like to keep myself engaged and inspired through my
        hobbies and interests:
        <Paragraph>
          <ListBox style={{ paddingInlineStart: '20px' }}>
            <Grid
              columns={[1, 1, 3, 3]}
              gap={3}
              sx={{
                alignItems: 'start',
                justifyItems: ['center', 'center', 'center', 'start'],
                marginTop: 2,
                marginBottom: 2,
                gridRowStart: 'span 2',
              }}
            >
              <ListBoxItem>
                Flute: As a devoted flutist, I volunteer with the{' '}
                <Link href="http://www.nathanmuehl.com/spcbands/ws.html" target="_blank">
                  Wind Symphony of St. Petersburg College
                </Link>
                , embracing opportunities to perform in small ensembles such as flute choirs and
                other wind groups.
              </ListBoxItem>
              <Image
                alt="Ashley playing flute"
                src="flute.jpg"
                sx={{
                  boxShadow: 'unset',
                  width: ['250px', '250px', '250px', '350px'],
                  height: ['250px', '250px', '250px', '350px'],
                  objectFit: 'cover',
                  borderRadius: '20px',
                  gridRowStart: [2, 2, 1, 1],
                  gridRowEnd: [2, 2, 1, 1],
                }}
              />
              <ListBoxItem>
                Hiking: My love for the outdoors has led me to explore numerous national and state
                parks, including Yosemite, Olympic, Mt. Rainier, North Cascades, and the Great Smoky
                Mountains.
                {
                  " To further fuel this passion, I'm excited to be relocating to the Pacific Northwest "
                }
                from Florida.
              </ListBoxItem>
              <Image
                alt="kayaking"
                src="kayak.jpeg"
                sx={{
                  boxShadow: 'unset',
                  width: ['250px', '250px', '250px', '350px'],
                  height: ['250px', '250px', '250px', '350px'],
                  objectFit: 'cover',
                  borderRadius: '20px',
                  gridRowStart: [4, 4, 1, 1],
                  gridRowEnd: [4, 4, 1, 1],
                }}
              />
              <ListBoxItem>
                Theme Parks: The engineering marvels and immersive experiences at theme parks have
                always captivated me. The fusion of technology, storytelling, and exhilarating rides
                consistently inspires me and sparks fresh ideas.
              </ListBoxItem>
              <Image
                alt="EPCOT"
                src="EPCOT.jpeg"
                sx={{
                  boxShadow: 'unset',
                  width: ['250px', '250px', '250px', '350px'],
                  height: ['250px', '250px', '250px', '350px'],
                  objectFit: 'cover',
                  borderRadius: '20px',
                  gridRowStart: [6, 6, 1, 1],
                  gridRowEnd: [6, 6, 1, 1],
                }}
              />
            </Grid>
          </ListBox>
        </Paragraph>
      </Paragraph>
      <Paragraph>
        {"I'm grateful to have a career that allows me to combine my passion for technology with my " +
          "love for creativity, all while continuously learning and growing. If you'd like to know more "}
        about my professional journey or explore potential collaboration opportunities, feel free to
        visit the <NavigationLink to="/career">Career</NavigationLink> and{' '}
        <NavigationLink to="/contact">Contact</NavigationLink> pages.
      </Paragraph>
    </>
  );
}

export default About;
