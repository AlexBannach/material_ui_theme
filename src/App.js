import "./App.css";
import { styled, Box, Button, Link, Typography } from "@mui/material";

const BoxContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxStyled = styled(Box)`
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <BoxContainer>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="h4">H4</Typography>
      <Typography variant="h5">H5</Typography>
      <Typography variant="h6">H6</Typography>

      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
    </BoxContainer>
  );
}

export default App;
