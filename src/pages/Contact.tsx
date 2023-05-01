import React from "react";
import { Box, Grid, Typography, Paragraph } from "../components";

export function Contact() {
  const [inputs, setInputs] = React.useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (event: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
    event.persist();
    setInputs((prev: any) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await fetch("https://formbold.com/s/oaPkK", {
      method: "POST",
      body: JSON.stringify(inputs),
    })
      .then((r) => {
        console.log(r);
      })
      .catch((r) => {
        console.log(r);
      });
  };

  return (
    <>
      <Paragraph>
        Thank you for considering reaching out! I'm a dedicated and passionate
        software engineer, always eager to connect with like-minded
        professionals, potential collaborators, or anyone interested in
        discussing innovative ideas and projects. If you have any questions,
        require assistance, or simply want to chat about the world of software
        development and technology, please don't hesitate to get in touch. I
        value every opportunity to expand my network and knowledge, and I'm
        excited to embark on new ventures with you. Looking forward to our
        conversation!
      </Paragraph>
      <Grid columns={[1, 1, 1, 2]}>
        {/* <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            value={inputs.email}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleOnChange}
            value={inputs.subject}
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            onChange={handleOnChange}
            value={inputs.message}
            id="message"
            name="message"
            placeholder="Type your message"
          />
          <button type="submit"> Send Message </button>
        </form> */}
      </Grid>
    </>
  );
}

export default Contact;
