import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Button,
  FormHelperText,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import urlSchema from "../../schema/urlSchema";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(urlSchema) });

  const onSubmit = async (formData) => {
    console.log(formData);
    reset();
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ mt: 2, mb: 4 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-url">URL</InputLabel>
        <OutlinedInput
          id="outlined-adornment-url"
          type="text"
          inputProps={{ ...register("fullUrl") }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                type="submit"
                variant="contained"
                className={clsx(classes.btn)}
              >
                Shrink
              </Button>
            </InputAdornment>
          }
          label="URL"
        />
        {errors.fullUrl && (
          <FormHelperText>
            <Typography style={{ color: "red" }} variant="subtitle2">
              {errors.fullUrl?.message}
            </Typography>
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
};

export default UrlShrinkForm;
