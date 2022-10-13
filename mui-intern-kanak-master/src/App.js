import "./App.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import * as Color from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  height: "530px",
  color: "#000",
  margin: "25px",
  padding: "15px",
}));

function App() {
  const [buttonColor, setButtonColor] = useState("#11cb5f");
  // for (const [key, value] of Object.entries(Color)) {
  //   console.log(`${key}: ${value}`);
  // }
  // console.log(Object.entries(Color));

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: buttonColor,
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });

  const handleChange = (event) => {
    setButtonColor(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#000" }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                  Button Color
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Button Color"
                  value={buttonColor}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  {Object.entries(Color).map((obj, j) => (
                    <optgroup label={obj[0]}>
                      {Object.entries(obj[1]).map((ent, i) => (
                        <option value={ent[1]}>{`${obj[0]}[${ent[0]}]`}</option>
                      ))}
                    </optgroup>
                  ))}
                </Select>
              </FormControl>

              {/* <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">
                  
                </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={buttonColor}
                  label="Button Color"
                  // onChange={handleChange}
                >
                  {Object.entries(Color).map((obj, j) => (
                    <div>
                      <ListSubheader key={j}>{obj[0]}</ListSubheader>
                      {Object.entries(obj[1]).map((ent, i) => (
                        <MenuItem
                          value={ent[1]}
                          key={i}
                        >{`${obj[0]}[${ent[0]}]`}</MenuItem>
                      ))}
                    </div>
                  ))}
                </Select>
              </FormControl> */}
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <ThemeProvider theme={theme}>
              <Button variant="contained" sx={{ mr: "5px" }}>
                Primary
              </Button>
              <Button variant="outlined">Secondary</Button>
            </ThemeProvider>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
