import React from "react";
import {
  Box,
  Button,
  Grid,
  Flex,
  IconButton,
  Paragraph,
  TextField,
  TextArea,
  Typography,
} from "../components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [inputs, setInputs] = React.useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (event: {
    persist: () => void;
    target: { id: string; value: string };
  }) => {
    event.persist();
    setInputs((prev: any) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const token = recaptchaRef?.current?.getValue();
      const response = await axios({
        method: "POST",
        url: "https://formbold.com/s/oaPkK",
        data: {
          ...inputs,
          "g-recaptcha-response": token,
        },
      });

      if (response.status === 201) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }

    recaptchaRef.current?.reset();
  };

  return (
    <>
      <Paragraph>
        Thank you for considering reaching out! I'm always eager to connect with
        like-minded professionals, potential collaborators, or anyone interested
        in discussing innovative ideas and projects. If you have any questions,
        require assistance, or simply want to chat, please don't hesitate to get
        in touch. I value every opportunity to expand my network and knowledge.
        Looking forward to our conversation!
      </Paragraph>
      <Grid columns={[1, 1, 1, 2]}>
        <form onSubmit={handleOnSubmit}>
          <TextField
            onChange={handleOnChange}
            value={inputs.email}
            id="email"
            type="email"
            name="email"
            label="Email"
            sx={{ marginTop: 0 }}
          />
          <TextField
            onChange={handleOnChange}
            value={inputs.subject}
            id="subject"
            type="text"
            name="subject"
            label="Subject"
          />
          <TextArea
            onChange={handleOnChange}
            value={inputs.message}
            id="message"
            name="message"
            label="Message"
            placeholder="Hi Ashley! I wanted to get in touch..."
          />
          <Flex
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ marginLeft: 2, marginTop: 3, marginBottom: 3 }}>
              <ReCAPTCHA ref={recaptchaRef} />
            </Box>
            <Box>
              <Button type="submit" sx={{ marginLeft: 3 }}>
                Send Message
              </Button>
            </Box>
          </Flex>
        </form>
        <Flex
          sx={{
            flexDirection: "column",
            marginRight: 3,
            marginLeft: 3,
          }}
        >
          <Box sx={{ marginBottom: "1em" }}>
            <Typography variant="body2">
              If you're interested in connecting with me professionally, you can
              find me on LinkedIn. Feel free to send a connection request or
              drop me a message—I'm always delighted to meet new people and
              explore potential collaborations. Additionally, you're welcome to
              visit my GitHub profile to explore my contributions, projects, and
              repositories. Let's connect and create something extraordinary
              together!
            </Typography>
          </Box>
          <Flex
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <IconButton
              aria-label="LinkedIn"
              as="a"
              // @ts-ignore
              href="https://www.linkedin.com/in/ashleydavid/"
              target="_blank"
              sx={{
                marginLeft: 1,
                fontSize: "2em",
                height: "2.5em",
                width: "2.5em",
              }}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              as="a"
              // @ts-ignore
              href="https://github.com/fluteroute"
              target="_blank"
              sx={{
                marginLeft: 1,
                fontSize: "2em",
                height: "2.5em",
                width: "2.5em",
              }}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </IconButton>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default Contact;
