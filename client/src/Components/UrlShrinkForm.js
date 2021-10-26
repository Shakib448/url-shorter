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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import urlSchema from "../../schema/urlSchema";
import urlApi from "../../pages/api/URL";

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
    const { ok } = await urlApi.createShortUrl(formData);
    if (ok) {
      toast.success("URL created successfully");
    } else {
      toast.error("Url already exists");
    }
    reset();
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
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
            <Typography style={{ color: "red" }} variant="subtitle1">
              {errors.fullUrl?.message}
            </Typography>
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
};

export default UrlShrinkForm;
