import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Button,
} from "@mui/material";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: "#000",
    minWidth: "150px",
    letterSpacing: "2px",
    borderColor: "2px solid #222",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#fff",
  },
});

const UrlShrinkForm = () => {
  const classes = useStyles();
  return (
    <FormControl fullWidth sx={{ mt: 2, mb: 4 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-url">URL</InputLabel>
      <OutlinedInput
        id="outlined-adornment-url"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <Button variant="contained" className={clsx(classes.btn)}>
              Shrink
            </Button>
          </InputAdornment>
        }
        label="URL"
      />
    </FormControl>
  );
};

export default UrlShrinkForm;
