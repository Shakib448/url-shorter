import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import urlApi from "../../pages/api/URL";

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      color: "#F800CD",
    },
  },
});

const UrlShrinkTable = ({ data }) => {
  const classes = useStyles();

  const deleteHandler = async (id) => {
    const { ok } = await urlApi.deleteShortUrl(id);
    if (ok) {
      toast.success("URL Deleted Successfully");
    } else {
      toast.error("Url Not Found");
    }
  };
  return (
    <TableContainer component={Paper}>
      <ToastContainer />
      <Table sx={{ minWidth: 1024 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Full URL</TableCell>
            <TableCell>Shorter URL</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <IconButton onClick={() => deleteHandler(item._id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {item.fullUrl}
              </TableCell>
              <TableCell className={clsx(classes.link)}>
                <a target="_blank" href={item.fullUrl}>
                  {item.shortUrl}
                </a>
              </TableCell>
              <TableCell>{item.createdAt.slice(0, 10)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UrlShrinkTable;
