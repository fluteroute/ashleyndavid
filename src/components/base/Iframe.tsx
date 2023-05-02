import styled from "@emotion/styled";

export const Iframe = styled.iframe({
  border: "unset",
  "@media screen and (min-width: 64em)": {
    minHeight: "441px",
    minWidth: "784px",
  },
});

Iframe.displayName = "Iframe";

export default Iframe;
