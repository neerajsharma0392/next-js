import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import { css } from "@emotion/css";
import { Button, ButtonGroup } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function MaterialUI() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <br />
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

// export default function EmotionCSS() {
//   const style = css`
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid #bf4f74;
//     color: #bf4f74;
//     margin: 1em 1em;
//     padding: 0.25em 1em;
//   `;

//   return (
//     <div>
//       <button className={style}>Click Me!</button>
//     </div>
//   );
// }

/// Global CSS and Module Css
// export default function Home() {
//   return (
//     <div>
//       <h1 className="h1-red">Red</h1>
//       <h1 className={styles["h1-blue"]}>Layout Demo</h1>
//       <h1 className={styles.h1red}>Red</h1>
//     </div>
//   );
// }

/// Styled Component
// export default function StyledComponents() {
//   const Button = styled.button`
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid #bf4f74;
//     color: #bf4f74;
//     margin: 1em 1em;
//     padding: 0.25em 1em;
//     &:hover {
//       background: red;
//       color: white;
//     }
//     ${(props) => {
//       if (props.primary) {
//         return "background:#bf4f74; color:white;";
//       }
//     }}
//   `;

//   return (
//     <div>
//       <h1>Styled Component</h1>
//       <Button primary>Click Me!</Button>
//     </div>
//   );
// }
