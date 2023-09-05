import "./App.css";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const name = "John Doe";
const link = "Just another link";

const stringAvatar = (str: string) => {
  const firstLetters = str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return firstLetters;
};

const UserBtn = (
  <Grid item xs={2}>
    <Button
      variant="contained"
      startIcon={<Avatar children={stringAvatar(name)} />}
      sx={{ backgroundColor: "#ed7d31", color: "#fff", width: "100%" }}
    >
      {name}
    </Button>
  </Grid>
);
const LinkBtn = (
  <Grid item xs={2}>
    <Button
      variant="contained"
      startIcon={<Avatar children={<LinkIcon />} />}
      sx={{ backgroundColor: "#ed7d31", color: "#fff", width: "100%" }}
    >
      {link}
    </Button>
  </Grid>
);

function App() {
  return (
    <Grid container direction="row" pr={2}>
      <Grid item xs />
      <Grid container direction="column" item xs={4}>
        <Accordion
          defaultExpanded
          sx={{
            marginTop: "20%",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Admins</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              component={Paper}
              container
              item
              direction="column"
              spacing={0.5}
              width="70%"
              padding={1}
            >
              {UserBtn}
              {UserBtn}
              {UserBtn}
              {UserBtn}
              {UserBtn}
            </Grid>
          </AccordionDetails>
          <AccordionActions sx={{ justifyContent: "start" }} disableSpacing>
            <Button variant="outlined" title="Maintain Links" color="primary">
              Maintain Admin Contacts
            </Button>
          </AccordionActions>
        </Accordion>
        <Accordion defaultExpanded disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Links</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              component={Paper}
              container
              item
              direction="column"
              width="70%"
              spacing={0.5}
              padding={1}
            >
              {LinkBtn}
              {LinkBtn}
              {LinkBtn}
              {LinkBtn}
              {LinkBtn}
            </Grid>
          </AccordionDetails>
          <AccordionActions sx={{ justifyContent: "start" }} disableSpacing>
            <Button variant="outlined" title="Maintain Links" color="primary">
              Maintain Links
            </Button>
          </AccordionActions>
        </Accordion>
      </Grid>
    </Grid>
  );
}

export default App;
