import "./App.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  height: "100vh",
  color: "#000",
  margin: "10px",
  padding: "20px",
}));

function App() {
  const [value, setValue] = useState(2);
  const [readOnly, setReadOnly] = useState(false);
  const [disabled, setDisabled] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    if (e.target.value === "readOnly") {
      setReadOnly(true);
      setDisabled(false);
    } else if (e.target.value === "disabled") {
      setReadOnly(false);
      setDisabled(true);
    } else if (e.target.value === "simple") {
      setReadOnly(false);
      setDisabled(false);
    }
  }

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "primary.dark",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Properties
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="simple"
                  name="radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="readOnly"
                    control={<Radio />}
                    label="Read Only"
                  />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio />}
                    label="Disabled"
                  />
                  <FormControlLabel
                    value="simple"
                    control={<Radio />}
                    label="simple"
                  />
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={readOnly}
                disabled={disabled}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Stack spacing={2} direction="row">
                <Button
                  variant="outlined"
                  readOnly={readOnly}
                  disabled={disabled}
                >
                  Outlined
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
